
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Send } from "lucide-react";
import React from 'react';
import * as z from "zod";

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

interface CreateSMSFormProps {
  form: any;
  onSubmit: (values: z.infer<typeof formSchema>) => Promise<void>;
  isSending: boolean;
}

export const CreateSMSForm: React.FC<CreateSMSFormProps> = ({ form, onSubmit, isSending }) => (
  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
    <h3 className="text-lg font-semibold mb-4">Send a Phishing SMS (For Awareness)</h3>
    <p className="text-sm text-gray-600 mb-4">
      Send an educational SMS to demonstrate how phishing attacks work. 
      <span className="font-semibold text-red-600"> For educational purposes only.</span>
    </p>
    
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Target Phone Number (will be prefixed with +91)</FormLabel>
              <FormControl>
                <Input placeholder="Enter 10-digit phone number (e.g., 9876543210)" {...field} />
              </FormControl>
              <p className="text-xs text-gray-500 mt-1">
                The number will be formatted with +91 country code for India
              </p>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="messageName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sender Name/ID</FormLabel>
              <FormControl>
                <Input placeholder="e.g., SBIBank, HDFC, etc." {...field} />
              </FormControl>
              <p className="text-xs text-gray-500 mt-1">
                Will appear as sent from a Twilio number (+1) with this name
              </p>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="messageContent"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message Content</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Enter message content with deceptive links or urgent calls to action"
                  rows={4}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isSending} className="w-full">
          {isSending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
              Sending...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" /> 
              Send SMS
            </>
          )}
        </Button>

        <div className="mt-2 p-2 bg-yellow-50 text-yellow-800 text-xs rounded">
          <p className="font-semibold">Note:</p>
          <p>Messages will be sent from a Twilio number (+1) to the Indian number (+91) you specify.</p>
          <p>A disclaimer will be added indicating it's for educational purposes.</p>
        </div>
      </form>
    </Form>
  </div>
);
