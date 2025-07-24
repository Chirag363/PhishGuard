   
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";
import {
  AlertCircle, AlertTriangle,
  CheckCircle,
  Copy,
  Globe, Layers,
  Lock,
  Mail
} from "lucide-react";
import React, { useState } from "react";

const ClonePhishingDemo: React.FC = () => {
  const [currentView, setCurrentView] = useState<'intro' | 'email' | 'website' | 'comparison'>('intro');
  const [showOriginal, setShowOriginal] = useState(true);
  
  const handleToggleView = () => {
    setShowOriginal(!showOriginal);
    
    if (!showOriginal) {
      toast({
        title: "Viewing Original",
        description: "This is the legitimate content from the actual organization."
      });
    } else {
      toast({
        variant: "destructive",
        title: "Viewing Clone",
        description: "This is the cloned phishing version with subtle differences."
      });
    }
  };
  
  const renderIntroduction = () => (
    <div className="space-y-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Clone Phishing Explained</h2>
      <p>
        Clone phishing is a sophisticated attack where criminals create nearly identical copies 
        (or "clones") of legitimate messages or websites, but replace links or attachments with 
        malicious versions to steal credentials or distribute malware.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <Mail className="h-8 w-8 text-indigo-500 mb-4" />
          <h3 className="text-lg font-medium mb-2">Email Cloning</h3>
          <p className="text-sm text-gray-600 mb-4">
            Attackers copy legitimate emails (like shipping notifications, password resets, or account alerts) and 
            make subtle changes to trick recipients.
          </p>
          <Button onClick={() => setCurrentView('email')} className="w-full">
            See Email Clone Example
          </Button>
        </div>
        
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <Globe className="h-8 w-8 text-indigo-500 mb-4" />
          <h3 className="text-lg font-medium mb-2">Website Cloning</h3>
          <p className="text-sm text-gray-600 mb-4">
            Attackers duplicate entire websites, like banking portals or social media login pages, that look 
            identical but steal entered credentials.
          </p>
          <Button onClick={() => setCurrentView('website')} className="w-full">
            See Website Clone Example
          </Button>
        </div>
      </div>
      
      <Button 
        variant="outline" 
        onClick={() => setCurrentView('comparison')} 
        className="mt-4"
      >
        <Layers className="mr-2 h-4 w-4" />
        Compare Original vs. Clone
      </Button>
    </div>
  );
  
  const renderEmailClone = () => (
    <div className="max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-medium">Email Clone Example</h3>
        <Button variant="ghost" size="sm" onClick={() => setCurrentView('intro')}>Back</Button>
      </div>
      
      <div className="bg-white rounded-lg border overflow-hidden mb-6">
        <div className="bg-gray-100 p-3 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-red-500 mx-1"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 mx-1"></div>
            <div className="w-3 h-3 rounded-full bg-green-500 mx-1"></div>
            <div className="ml-4 text-sm text-gray-700">Email Client</div>
          </div>
          <Button 
            size="sm" 
            variant="outline" 
            onClick={handleToggleView} 
            className="text-xs"
          >
            {showOriginal ? "Show Clone" : "Show Original"}
          </Button>
        </div>
        
        <div className="p-6">
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <div>
                <div className="font-medium">
                  {showOriginal ? "Amazon Order Confirmation" : "Amazon Order Confirmation"}
                </div>
                <div className="text-xs text-gray-500">
                  {showOriginal ? "orders@amazon.com" : "orders-update@amaz0n-shipment.com"}
                </div>
              </div>
              <div className="text-xs text-gray-500">Yesterday, 2:34 PM</div>
            </div>
            <div className="text-sm font-medium">
              {showOriginal 
                ? "Your Amazon.com order #123-4567890-1234567 of \"Wireless Headphones\"" 
                : "Your Amazon.com order #123-4567890-1234567 of \"Wireless Headphones\""}
            </div>
          </div>
          
          <div className="border-t pt-4 text-sm space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4 mt-1">
                <img 
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop"
                  alt="Headphones" 
                  className="w-16 h-16 object-cover rounded"
                />
              </div>
              <div>
                <p className="font-medium">Wireless Headphones</p>
                <p className="text-gray-600">Color: Black</p>
                <p className="text-gray-600">$79.99</p>
                <p className="text-xs text-gray-500 mt-1">
                  Arriving: {showOriginal ? "Tomorrow by 8pm" : "Check tracking status (updated)"}
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded border border-gray-200">
              <p className="font-medium mb-2">Order Summary:</p>
              <div className="flex justify-between text-sm">
                <span>Items:</span>
                <span>$79.99</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Shipping:</span>
                <span>FREE</span>
              </div>
              <div className="flex justify-between font-medium mt-2 pt-2 border-t border-gray-200">
                <span>Total:</span>
                <span>$79.99</span>
              </div>
            </div>
            
            <div 
              className={`${showOriginal ? "bg-blue-50 text-blue-600" : "bg-yellow-50 text-yellow-600"} p-3 rounded text-center hover:opacity-90 cursor-pointer`}
              onClick={() => {
                if (showOriginal) {
                  toast({
                    title: "Safe Link",
                    description: "This would take you to the real Amazon order tracking page"
                  });
                } else {
                  toast({
                    variant: "destructive",
                    title: "Phishing Link!",
                    description: "This would take you to a fake Amazon login page to steal your credentials"
                  });
                }
              }}
            >
              {showOriginal ? "Track Your Package" : "Verify and Track Your Package Now"}
            </div>
            
            {!showOriginal && (
              <div className="text-xs text-red-500 font-medium">
                IMPORTANT: Please verify your payment method before shipment by logging in to your account.
              </div>
            )}
            
            <p>Thank you for shopping with {showOriginal ? "Amazon.com" : "Amazon"}!</p>
            
            <div className="text-xs text-gray-500 border-t pt-4 mt-4">
              {showOriginal ? (
                <>
                  <p>This email was sent from a notification-only address that cannot accept incoming email. Please do not reply to this message.</p>
                  <p className="mt-2">© 2023 Amazon.com, Inc. or its affiliates. All rights reserved.</p>
                </>
              ) : (
                <>
                  <p>This email was sent from Amazon shipping department. Please do not reply to this message.</p>
                  <p className="mt-2">© 2023 Amazon Inc. All rights reserved.</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {!showOriginal && (
        <div className="bg-red-50 p-4 rounded-lg border border-red-200 mb-6">
          <h4 className="text-sm font-medium text-red-800 flex items-center gap-2 mb-2">
            <AlertCircle className="h-4 w-4" /> Clone Detection Clues:
          </h4>
          <ul className="text-sm text-red-700 space-y-1">
            <li className="flex items-start gap-2">
              <AlertTriangle className="h-4 w-4 flex-shrink-0 mt-0.5" />
              <span>Suspicious sender email domain: "amaz0n-shipment.com" (with a zero instead of "o")</span>
            </li>
            <li className="flex items-start gap-2">
              <AlertTriangle className="h-4 w-4 flex-shrink-0 mt-0.5" />
              <span>Urgent request to verify payment method (Amazon doesn't do this after order confirmation)</span>
            </li>
            <li className="flex items-start gap-2">
              <AlertTriangle className="h-4 w-4 flex-shrink-0 mt-0.5" />
              <span>Slightly altered wording and formatting compared to real Amazon emails</span>
            </li>
            <li className="flex items-start gap-2">
              <AlertTriangle className="h-4 w-4 flex-shrink-0 mt-0.5" />
              <span>Missing or incorrect details in the email footer</span>
            </li>
          </ul>
        </div>
      )}
      
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
        <h4 className="text-sm font-medium text-blue-800 mb-2">How to Protect Yourself from Email Clones:</h4>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Always check the sender's full email address, not just the display name</li>
          <li>• Be suspicious of urgent requests related to accounts or payments</li>
          <li>• Hover over links to see where they actually go before clicking</li>
          <li>• Access your accounts by typing the URL directly in your browser instead of clicking email links</li>
          <li>• Enable two-factor authentication on all important accounts</li>
        </ul>
      </div>
    </div>
  );
  
  const renderWebsiteClone = () => (
    <div className="max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-medium">Website Clone Example</h3>
        <Button variant="ghost" size="sm" onClick={() => setCurrentView('intro')}>Back</Button>
      </div>
      
      <div className="bg-white rounded-lg border overflow-hidden mb-6">
        <div className="bg-gray-100 p-3 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {showOriginal ? (
              <Lock className="h-4 w-4 text-green-600" />
            ) : (
              <AlertCircle className="h-4 w-4 text-red-600" />
            )}
            <div className="text-sm text-gray-700 flex-1 truncate">
              {showOriginal 
                ? "https://www.paypal.com/signin" 
                : "http://paypa1-account-secure.com/signin"}
            </div>
          </div>
          <Button 
            size="sm" 
            variant="outline" 
            onClick={handleToggleView} 
            className="text-xs"
          >
            {showOriginal ? "Show Clone" : "Show Original"}
          </Button>
        </div>
        
        <div className="p-6">
          <div className="flex justify-center mb-6">
            <div className="text-2xl font-bold text-blue-700">
              {showOriginal 
                ? <span className="flex items-center"><span className="text-blue-800">Pay</span><span className="text-blue-500">Pal</span></span>
                : <span className="flex items-center"><span className="text-blue-800">Pay</span><span className="text-blue-500">Pa1</span></span>}
            </div>
          </div>
          
          <form className="space-y-4 max-w-md mx-auto">
            <div className="text-center mb-2">
              <h3 className="text-lg font-medium">
                {showOriginal ? "Log In to Your Account" : "Login Required"}
              </h3>
              {!showOriginal && (
                <p className="text-xs text-red-500 mt-1">
                  Account access limited: Please verify your information now
                </p>
              )}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                id="email"
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Email address"
              />
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-1">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <a href="#" className="text-xs text-blue-600 hover:underline">Forgot?</a>
              </div>
              <input
                id="password"
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter password"
              />
            </div>
            
            {!showOriginal && (
              <>
                <div>
                  <label htmlFor="card" className="block text-sm font-medium text-gray-700 mb-1">Verify Credit Card</label>
                  <div className="relative">
                    <input
                      id="card"
                      type="text"
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Card number"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                    <input
                      id="expiry"
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">Security Code</label>
                    <input
                      id="cvv"
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="CVV"
                    />
                  </div>
                </div>
              </>
            )}
            
            <Button 
              type="button" 
              className="w-full bg-blue-600 hover:bg-blue-700"
              onClick={() => {
                if (showOriginal) {
                  toast({
                    title: "Secure Login Attempt",
                    description: "This would securely sign you into the real PayPal service"
                  });
                } else {
                  toast({
                    variant: "destructive",
                    title: "Credentials Stolen!",
                    description: "A phishing site would now have your email, password and credit card information"
                  });
                }
              }}
            >
              {showOriginal ? "Log In" : "Verify and Continue"}
            </Button>
            
            <div className="text-center text-sm">
              <span className="text-gray-600">Don't have an account?</span> 
              <a href="#" className="text-blue-600 hover:underline ml-1">Sign Up</a>
            </div>
          </form>
        </div>
      </div>
      
      {!showOriginal && (
        <div className="bg-red-50 p-4 rounded-lg border border-red-200 mb-6">
          <h4 className="text-sm font-medium text-red-800 flex items-center gap-2 mb-2">
            <AlertCircle className="h-4 w-4" /> Clone Detection Clues:
          </h4>
          <ul className="text-sm text-red-700 space-y-1">
            <li className="flex items-start gap-2">
              <AlertTriangle className="h-4 w-4 flex-shrink-0 mt-0.5" />
              <span>Fake domain: "paypa1-account-secure.com" (using the number "1" instead of "l")</span>
            </li>
            <li className="flex items-start gap-2">
              <AlertTriangle className="h-4 w-4 flex-shrink-0 mt-0.5" />
              <span>No HTTPS security (http:// instead of https://)</span>
            </li>
            <li className="flex items-start gap-2">
              <AlertTriangle className="h-4 w-4 flex-shrink-0 mt-0.5" />
              <span>Asking for full credit card details during login (PayPal never does this)</span>
            </li>
            <li className="flex items-start gap-2">
              <AlertTriangle className="h-4 w-4 flex-shrink-0 mt-0.5" />
              <span>Urgent messaging about limited account access</span>
            </li>
          </ul>
        </div>
      )}
      
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
        <h4 className="text-sm font-medium text-blue-800 mb-2">How to Protect Yourself from Website Clones:</h4>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Always check the URL before entering credentials (bookmark official sites)</li>
          <li>• Verify the site has HTTPS (lock icon in browser)</li>
          <li>• Be suspicious of any financial website asking for your full credit card details</li>
          <li>• Type the website address directly in your browser instead of clicking links</li>
          <li>• Use a password manager that will only auto-fill on legitimate domains</li>
        </ul>
      </div>
    </div>
  );
  
  const renderComparison = () => (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-medium">Original vs. Clone: Spot the Differences</h3>
        <Button variant="ghost" size="sm" onClick={() => setCurrentView('intro')}>Back</Button>
      </div>
      
      <div className="bg-white rounded-xl border p-6 mb-8">
        <h4 className="text-lg font-medium mb-4">Key Differences in Clone Phishing Attacks</h4>
        
        <Tabs defaultValue="domains" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="domains">Domains</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="requests">Requests</TabsTrigger>
          </TabsList>
          
          <TabsContent value="domains" className="p-4">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <div>
                  <p className="font-medium">Original: Real Domain</p>
                  <p className="text-sm text-gray-600">paypal.com, amazon.com, netflix.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0" />
                <div>
                  <p className="font-medium">Clone: Lookalike Domain</p>
                  <p className="text-sm text-gray-600">paypa1.com, amaz0n.com, netfl1x.com</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <div className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">Number substitutions (0 for o, 1 for l)</div>
                    <div className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">Added hyphens (paypal-secure.com)</div>
                    <div className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">Added words (paypal-account-verify.com)</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded mt-4">
                <div className="flex items-start">
                  <Copy className="h-4 w-4 text-yellow-700 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-sm text-yellow-800">
                    <strong>Pro Tip:</strong> Always check the domain name carefully, especially the part right before ".com", ".org", etc. 
                    That's the actual domain owner. For example, "paypal-secure.fraudsite.com" is owned by "fraudsite", not PayPal.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="content" className="p-4">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <div>
                  <p className="font-medium">Original: Professional Content</p>
                  <ul className="text-sm text-gray-600 list-disc ml-5 mt-1 space-y-1">
                    <li>Perfect grammar and spelling</li>
                    <li>High-quality images and logos</li>
                    <li>Consistent branding elements</li>
                    <li>Personalization (uses your actual name)</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0" />
                <div>
                  <p className="font-medium">Clone: Small Inconsistencies</p>
                  <ul className="text-sm text-gray-600 list-disc ml-5 mt-1 space-y-1">
                    <li>Minor grammar or spelling errors</li>
                    <li>Slightly different versions of logos</li>
                    <li>Inconsistent fonts or spacing</li>
                    <li>Generic greetings ("Dear Customer")</li>
                    <li>Typos in button text or headlines</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="security" className="p-4">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <div>
                  <p className="font-medium">Original: Security Features</p>
                  <ul className="text-sm text-gray-600 list-disc ml-5 mt-1 space-y-1">
                    <li>HTTPS encryption (lock icon in browser)</li>
                    <li>Valid security certificates</li>
                    <li>Privacy policies and terms links</li>
                    <li>Multi-factor authentication options</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0" />
                <div>
                  <p className="font-medium">Clone: Security Red Flags</p>
                  <ul className="text-sm text-gray-600 list-disc ml-5 mt-1 space-y-1">
                    <li>No HTTPS (http:// only)</li>
                    <li>Security certificate warnings</li>
                    <li>Missing or broken footer links</li>
                    <li>No multi-factor authentication</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded mt-2">
                <div className="flex items-start">
                  <Lock className="h-4 w-4 text-blue-700 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-sm text-blue-800">
                    <strong>Security Note:</strong> Most modern browsers will warn you about insecure sites, but cloned phishing pages 
                    sometimes use free certificates to appear secure. Always verify the domain name too.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="requests" className="p-4">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <div>
                  <p className="font-medium">Original: Reasonable Requests</p>
                  <ul className="text-sm text-gray-600 list-disc ml-5 mt-1 space-y-1">
                    <li>Only asks for information relevant to the task</li>
                    <li>Never requests full financial information during login</li>
                    <li>Clear purpose for any information collected</li>
                    <li>No unusual urgency in messaging</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0" />
                <div>
                  <p className="font-medium">Clone: Excessive Information Requests</p>
                  <ul className="text-sm text-gray-600 list-disc ml-5 mt-1 space-y-1">
                    <li>Asks for unnecessary personal details</li>
                    <li>Requests full credit card information during login</li>
                    <li>Collects security questions and answers</li>
                    <li>Creates artificial urgency ("Account will be locked")</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-red-50 p-4 rounded mt-2">
                <div className="flex items-start">
                  <AlertTriangle className="h-4 w-4 text-red-700 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-sm text-red-800">
                    <strong>Warning:</strong> Legitimate organizations will never ask for your full credit card details, social security number, 
                    or complete password via email. If a website suddenly asks for excessive information, it's likely a phishing attempt.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h4 className="text-md font-medium text-green-800 mb-3">Protection Strategies:</h4>
          <ul className="text-sm text-green-700 space-y-2">
            <li className="flex items-start">
              <CheckCircle className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
              <span>Manually type website addresses instead of clicking links</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
              <span>Bookmark official websites for financial services and frequent logins</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
              <span>Use a password manager that will only auto-fill on legitimate domains</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
              <span>Enable two-factor authentication on all important accounts</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <h4 className="text-md font-medium text-yellow-800 mb-3">If You Suspect a Clone:</h4>
          <ul className="text-sm text-yellow-700 space-y-2">
            <li className="flex items-start">
              <AlertTriangle className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
              <span>Don't enter any information on the site</span>
            </li>
            <li className="flex items-start">
              <AlertTriangle className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
              <span>Report the site to the organization being impersonated</span>
            </li>
            <li className="flex items-start">
              <AlertTriangle className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
              <span>Forward suspicious emails to the organization's phishing report address</span>
            </li>
            <li className="flex items-start">
              <AlertTriangle className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
              <span>If you entered information, change passwords immediately and monitor accounts</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
  
  return (
    <div className="space-y-8">
      {currentView === 'intro' && renderIntroduction()}
      {currentView === 'email' && renderEmailClone()}
      {currentView === 'website' && renderWebsiteClone()}
      {currentView === 'comparison' && renderComparison()}
    </div>
  );
};

export default ClonePhishingDemo;
