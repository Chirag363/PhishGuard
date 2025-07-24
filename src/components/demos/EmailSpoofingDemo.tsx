
import React, { useState } from "react";
import { ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const EmailSpoofingDemo: React.FC = () => {
  const [emailShown, setEmailShown] = useState(false);
  
  const handleShowEmail = () => {
    setEmailShown(true);
    toast({
      title: "Remember",
      description: "Check the sender's actual email address, not just the display name"
    });
  };

  return (
    <div className="space-y-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">How Email Spoofing Works</h2>
        <p className="mb-4">
          Email spoofing is a technique used by attackers to forge email headers so that messages appear 
          to come from someone other than the actual sender. This is commonly used in phishing attacks 
          to trick recipients into believing an email came from a trusted source like their bank, 
          workplace, or a well-known company.
        </p>
        <h3 className="text-xl font-medium mt-8 mb-3">Red Flags to Watch For:</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Mismatched sender information (display name vs. actual email address)</li>
          <li>Suspicious or misspelled domain names</li>
          <li>Urgent requests for personal information</li>
          <li>Unexpected attachments or links</li>
          <li>Poor grammar or unusual formatting</li>
        </ul>
      </div>

      <div className="border border-gray-200 rounded-lg max-w-2xl mx-auto mt-8 overflow-hidden">
        <div className="bg-gray-100 p-3 border-b border-gray-200 flex items-center">
          <div className="w-3 h-3 rounded-full bg-red-500 mx-1"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 mx-1"></div>
          <div className="w-3 h-3 rounded-full bg-green-500 mx-1"></div>
          <div className="ml-4 text-sm text-gray-700">Email Client</div>
        </div>
        
        {!emailShown ? (
          <div className="p-6 flex flex-col items-center justify-center min-h-[300px]">
            <ShieldAlert className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-lg font-medium mb-2">Simulated Phishing Email</h3>
            <p className="text-sm text-center text-muted-foreground mb-6 max-w-md">
              Click the button below to display a simulated spoofed email from "Your Bank" 
              asking for account verification. Then try to identify the signs of spoofing.
            </p>
            <Button onClick={handleShowEmail}>Show Spoofed Email</Button>
          </div>
        ) : (
          <div className="p-6 bg-white">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <div className="font-medium">Your Bank Customer Service</div>
                  <div className="text-xs text-gray-500 hover:underline cursor-pointer" onClick={() => toast({
                    title: "Suspicious Email Address",
                    description: "Actual email address: scammer@malicious-domain.com. This doesn't match the display name 'Your Bank Customer Service'"
                  })}>
                    yourbank_service@yourbamk-secure.com
                  </div>
                </div>
                <div className="text-xs text-gray-500">10:15 AM</div>
              </div>
              <div className="text-sm font-medium">Action Required: Verify Your Account Information</div>
            </div>
            
            <div className="text-sm space-y-4 border-t pt-4">
              <p>Dear Valued Customer,</p>
              
              <p>Our security system has detected unusual activity on your account. To ensure the safety of your funds, please verify your account information immediately by clicking the link below:</p>
              
              <div className="bg-blue-50 text-blue-600 p-3 rounded text-center hover:bg-blue-100 cursor-pointer" onClick={() => toast({
                variant: "destructive",
                title: "Caught a phishing attempt!",
                description: "The link would have taken you to a fake website designed to steal your credentials"
              })}>
                Verify Account Now
              </div>
              
              <p>If you do not verify your information within 24 hours, your account access may be temporarily suspended.</p>
              
              <p>Thank you for your cooperation,<br />Your Bank Security Team</p>
            </div>
          </div>
        )}
      </div>

      <div className="max-w-3xl mx-auto mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
        <h3 className="text-lg font-medium text-green-800 mb-2">How to Protect Yourself</h3>
        <ul className="list-disc pl-6 text-sm text-green-700 space-y-1">
          <li>Always verify the sender's actual email address, not just the display name</li>
          <li>Look for misspellings in domain names (like "yourbamk" instead of "yourbank")</li>
          <li>Never click on suspicious links; instead, manually navigate to your bank's website</li>
          <li>Contact the organization directly using their official phone number if you're unsure</li>
          <li>Enable two-factor authentication on all your important accounts</li>
        </ul>
      </div>
    </div>
  );
};

export default EmailSpoofingDemo;
