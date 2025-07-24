
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { SMSMessageDisplay } from './sms/SMSMessageDisplay';
import { SMSExamplesSection } from './sms/SMSExamplesSection'; 
import { SMSProtectionTips } from './sms/SMSProtectionTips';
import { TabNavigation } from './sms/TabNavigation';
import { CreateSMSForm } from './sms/CreateSMSForm';

export type MessageData = {
  id: string;
  sender: string;
  content: string;
  timestamp: string;
  isPhishing: boolean;
  status?: string;
  phoneTo?: string;
  phoneFrom?: string;
};

const formSchema = z.object({
  phoneNumber: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  messageName: z.string().min(2, {
    message: "Sender name must be at least 2 characters.",
  }),
  messageContent: z.string().min(10, {
    message: "Message content must be at least 10 characters.",
  }),
});

const SMSPhishingDemo = () => {
  const [messages, setMessages] = useState<MessageData[]>([
    {
      id: "1",
      sender: "SBIBank",
      content: "ALERT: Your account has been locked due to suspicious activity. Restore access at: sbi-bank.securitycheck.com",
      timestamp: "11:42 AM",
      isPhishing: true,
      phoneFrom: "+17753688960"
    },
    {
      id: "2",
      sender: "HDFC",
      content: "Dear customer, your HDFC account showing unusual activity. Verify your account: hdfc-secure.trackingverify.net",
      timestamp: "Yesterday",
      isPhishing: true,
      phoneFrom: "+17753688960"
    },
  ]);
  
  const [activeTab, setActiveTab] = useState<'create' | 'examples' | 'protection'>('create');
  const [isSending, setIsSending] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phoneNumber: "",
      messageName: "SBIBank",
      messageContent: "ALERT: Unusual activity detected on your account. Verify your identity: securebank-verify.com/login",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSending(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('send-sms', {
        body: {
          phoneNumber: values.phoneNumber,
          messageName: values.messageName,
          messageContent: values.messageContent,
        },
      });

      if (error) {
        console.error("Edge function error:", error);
        toast({
          variant: "destructive",
          title: "Failed to send SMS",
          description: "Edge Function returned an error: " + error.message,
        });
        
        const newMessage: MessageData = {
          id: Date.now().toString(),
          sender: values.messageName,
          content: values.messageContent,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isPhishing: true,
          status: 'failed',
          phoneFrom: "+17753688960",
          phoneTo: formatPhoneNumberForDisplay(values.phoneNumber),
        };
        
        setMessages(prev => [newMessage, ...prev]);
        setIsSending(false);
        return;
      }

      if (!data.success) {
        console.error("API error:", data.error);
        toast({
          variant: "destructive",
          title: "Failed to send SMS",
          description: data.error || "An unexpected error occurred",
        });
        
        const newMessage: MessageData = {
          id: Date.now().toString(),
          sender: values.messageName,
          content: values.messageContent,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isPhishing: true,
          status: 'failed',
          phoneFrom: "+17753688960",
          phoneTo: formatPhoneNumberForDisplay(values.phoneNumber),
        };
        
        setMessages(prev => [newMessage, ...prev]);
        
        const { error: messageError } = await supabase
          .from('sms_messages')
          .insert({
            phone_number: values.phoneNumber,
            message_content: values.messageContent,
            sender_name: values.messageName,
            status: 'failed',
            error_message: data.error || "Unknown error",
          });

        if (messageError) {
          console.error("Error logging SMS:", messageError);
          toast({
            variant: "destructive",
            title: "Database Error",
            description: "Failed to log SMS message to database.",
          });
        }
        
        setIsSending(false);
        return;
      }

      const status = data.twilioData?.status || 'sent';
      
      const { data: messageData, error: messageError } = await supabase
        .from('sms_messages')
        .insert({
          phone_number: values.phoneNumber,
          message_content: values.messageContent,
          sender_name: values.messageName,
          status: status,
          error_message: null,
        })
        .select('id')
        .single();

      if (messageError) {
        console.error("Error logging SMS:", messageError);
        toast({
          variant: "destructive",
          title: "Database Error",
          description: "Failed to log SMS message to database.",
        });
      }

      const formattedReceiverNumber = formatPhoneNumberForDisplay(values.phoneNumber);

      const newMessage: MessageData = {
        id: messageData?.id || Date.now().toString(),
        sender: values.messageName,
        content: values.messageContent,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isPhishing: true,
        status: status,
        phoneFrom: data.twilioData?.from || "+17753688960",
        phoneTo: formattedReceiverNumber,
      };
      
      setMessages(prev => [newMessage, ...prev]);
      
      toast({
        title: data.twilioData?.demo_mode ? "Demo SMS message sent" : "SMS message sent",
        description: `Your phishing awareness message has been ${data.twilioData?.demo_mode ? "simulated" : "sent"} to ${formattedReceiverNumber}.`,
      });

      form.reset({
        phoneNumber: "",
        messageName: "SBIBank",
        messageContent: "ALERT: Unusual activity detected on your account. Verify your identity: securebank-verify.com/login",
      });
    } catch (err) {
      console.error("Error in SMS sending process:", err);
      toast({
        variant: "destructive",
        title: "Failed to send SMS",
        description: "There was an error sending the SMS message. Please try again.",
      });
      
      const newMessage: MessageData = {
        id: Date.now().toString(),
        sender: values.messageName,
        content: values.messageContent,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isPhishing: true,
        status: 'failed',
        phoneFrom: "+17753688960",
        phoneTo: formatPhoneNumberForDisplay(values.phoneNumber),
      };
      
      setMessages(prev => [newMessage, ...prev]);
    } finally {
      setIsSending(false);
    }
  };

  const formatPhoneNumberForDisplay = (phoneNumber: string): string => {
    const digits = phoneNumber.replace(/\D/g, '');
    
    if (digits.length === 10) {
      return `+91${digits}`;
    }
    
    if (digits.startsWith('91') && digits.length >= 12) {
      return `+${digits}`;
    }
    
    return digits.startsWith('+') ? digits : `+91${digits}`;
  };

  return (
    <div className="p-4">
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === 'create' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CreateSMSForm 
            form={form} 
            onSubmit={onSubmit} 
            isSending={isSending} 
          />
          <div>
            <SMSMessageDisplay messages={messages} />
          </div>
        </div>
      )}

      {activeTab === 'examples' && <SMSExamplesSection />}
      {activeTab === 'protection' && <SMSProtectionTips />}
    </div>
  );
};

export default SMSPhishingDemo;
