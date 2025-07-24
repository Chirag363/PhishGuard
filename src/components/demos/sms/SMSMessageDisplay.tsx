
import React from 'react';
import { Phone, CheckCheck, AlertCircle, Clock } from 'lucide-react';
import { MessageData } from '../SMSPhishingDemo';

interface SMSMessageDisplayProps {
  messages: MessageData[];
}

export const SMSMessageDisplay: React.FC<SMSMessageDisplayProps> = ({ messages }) => {
  return (
    <>
      <div className="bg-gray-800 p-4 rounded-t-xl border border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
            <span className="text-gray-400 text-xs">Jio Carrier</span>
          </div>
          <div className="text-gray-400 text-xs">
            {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      </div>

      <div className="bg-gray-900 p-6 rounded-b-xl border-l border-r border-b border-gray-700 h-[500px] overflow-y-auto">
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`rounded-lg p-4 ${message.status === 'failed' ? 'bg-red-900/30 border border-red-800/50' : 'bg-gray-800'}`}>
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center">
                  <span className="font-semibold text-gray-300">
                    {message.sender} {message.phoneFrom && `(${message.phoneFrom})`}
                  </span>
                  {message.isPhishing && (
                    <span className="ml-2 bg-red-900/50 text-red-400 text-xs px-2 py-0.5 rounded-full">
                      Phishing
                    </span>
                  )}
                </div>
                <span className="text-gray-500 text-xs">{message.timestamp}</span>
              </div>
              <p className="text-gray-300 text-sm whitespace-pre-wrap">{message.content}</p>
              {message.phoneTo && (
                <div className="mt-1 text-xs text-gray-500">
                  To: {message.phoneTo}
                </div>
              )}
              {message.status && (
                <div className={`mt-2 text-xs flex items-center ${
                  message.status === 'sent' || message.status === 'delivered' || message.status === 'queued' 
                    ? 'text-green-400' 
                    : 'text-red-400'
                }`}>
                  {message.status === 'sent' || message.status === 'delivered' ? (
                    <CheckCheck className="h-3 w-3 mr-1" />
                  ) : message.status === 'queued' ? (
                    <Clock className="h-3 w-3 mr-1" />
                  ) : (
                    <AlertCircle className="h-3 w-3 mr-1" />
                  )}
                  Status: {message.status}
                </div>
              )}
            </div>
          ))}
          
          {messages.length === 0 && (
            <div className="text-center text-gray-500 py-4">
              <Phone className="h-10 w-10 mx-auto mb-2 opacity-50" />
              <p>No messages to display.</p>
              <p className="text-xs">Create a message to see it here.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
