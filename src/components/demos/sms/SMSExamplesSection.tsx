
import React from 'react';

export const SMSExamplesSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Common SMS Phishing Techniques</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-medium mb-2">Urgency & Fear</h4>
            <div className="bg-gray-100 p-3 rounded-lg text-sm mb-2">
              <p className="font-semibold text-gray-700">BANKNAME:</p>
              <p>URGENT: Your account has been compromised. Call immediately or your account will be locked: +1-555-123-4567</p>
            </div>
            <p className="text-xs text-gray-600">
              Creates panic by claiming immediate action is needed to avoid a negative consequence.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-medium mb-2">Prize & Rewards</h4>
            <div className="bg-gray-100 p-3 rounded-lg text-sm mb-2">
              <p className="font-semibold text-gray-700">Prize-Alert:</p>
              <p>Congratulations! You've won a $1,000 Amazon gift card. Claim now at: amzn-rewards.com/claim-gift</p>
            </div>
            <p className="text-xs text-gray-600">
              Exploits desire for free rewards by claiming you've won something valuable.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-medium mb-2">Delivery Notifications</h4>
            <div className="bg-gray-100 p-3 rounded-lg text-sm mb-2">
              <p className="font-semibold text-gray-700">USPS Delivery:</p>
              <p>Your package #39471 couldn't be delivered. Update delivery preferences: usps-deliverysystem.com/reschedule</p>
            </div>
            <p className="text-xs text-gray-600">
              Pretends to be from a shipping company requiring action on a delivery.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-medium mb-2">Government Impersonation</h4>
            <div className="bg-gray-100 p-3 rounded-lg text-sm mb-2">
              <p className="font-semibold text-gray-700">IRS-TAX:</p>
              <p>FINAL NOTICE: Tax refund of $1,483.22 pending. Confirm identity: irs-tax-refund.com/verify</p>
            </div>
            <p className="text-xs text-gray-600">
              Impersonates government agencies to seem authoritative and trustworthy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
