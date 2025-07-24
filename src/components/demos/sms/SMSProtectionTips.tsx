
import React from 'react';
import { ShieldCheck, AlertTriangle } from 'lucide-react';

export const SMSProtectionTips: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <div className="flex items-start mb-4">
          <ShieldCheck className="h-6 w-6 text-green-600 mr-3 mt-1" />
          <div>
            <h3 className="text-lg font-semibold">How to Protect Yourself from SMS Phishing</h3>
            <p className="text-sm text-gray-600">
              Follow these guidelines to avoid falling victim to smishing attacks.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
              <h4 className="font-medium text-green-900 mb-2">Be Suspicious of Unknown Senders</h4>
              <p className="text-sm text-green-800">
                Don't trust messages from numbers you don't recognize, especially if they're asking for information or action.
              </p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
              <h4 className="font-medium text-green-900 mb-2">Don't Click on Suspicious Links</h4>
              <p className="text-sm text-green-800">
                Avoid clicking links in text messages, especially shortened URLs that hide their true destination.
              </p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
              <h4 className="font-medium text-green-900 mb-2">Never Share Personal Information</h4>
              <p className="text-sm text-green-800">
                Legitimate organizations won't ask for sensitive information like passwords or account numbers via text message.
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
              <h4 className="font-medium text-green-900 mb-2">Verify Independently</h4>
              <p className="text-sm text-green-800">
                If you receive a message claiming to be from your bank or another service, contact them directly using their official phone number.
              </p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
              <h4 className="font-medium text-green-900 mb-2">Report Suspicious Messages</h4>
              <p className="text-sm text-green-800">
                Forward suspicious text messages to 7726 (SPAM), which helps carriers identify and block scammers.
              </p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
              <h4 className="font-medium text-green-900 mb-2">Use Security Software</h4>
              <p className="text-sm text-green-800">
                Consider installing security apps that can help identify and block potential phishing attempts.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 bg-yellow-50 p-4 rounded-lg border border-yellow-100">
          <div className="flex items-start">
            <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
            <div>
              <h4 className="font-medium text-yellow-900 mb-1">Remember</h4>
              <p className="text-sm text-yellow-800">
                If an offer seems too good to be true, it probably is. Legitimate companies don't give away large prizes via random text messages, and government agencies like the IRS will contact you by official mail, not SMS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
