
import React, { useState } from "react";
import { 
  Lock, User, AlertCircle, CreditCard, Eye, EyeOff,
  CheckCircle, Globe, AlertTriangle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";

const FakeLoginDemo: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<'intro' | 'real' | 'fake' | 'comparison'>('intro');
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleRealSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Secure Login",
      description: "This is how a legitimate login form should work - it uses HTTPS and doesn't collect unnecessary information."
    });
    setUsername('');
    setPassword('');
  };

  const handleFakeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      variant: "destructive",
      title: "Phishing Detected!",
      description: "In a real attack, your credentials would now be in the hands of attackers."
    });
  };

  const handleGoogleLogin = (isLegitimate: boolean) => {
    if (isLegitimate) {
      toast({
        title: "Secure OAuth Login",
        description: "A legitimate Google login redirects to Google's official domain and doesn't ask for your password directly."
      });
    } else {
      toast({
        variant: "destructive",
        title: "Fake OAuth Login!",
        description: "This fake Google login button would redirect to a phishing site that mimics Google's login page."
      });
      setSubmitted(true);
    }
  };

  const renderIntroduction = () => (
    <div className="space-y-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Fake Login Page Detection</h2>
      <p>
        Fake login pages are one of the most common phishing techniques. Attackers create convincing 
        replicas of legitimate websites like banks, social media platforms, or email providers to steal 
        your credentials.
      </p>
      <h3 className="text-xl font-medium mt-8 mb-3">What You'll Learn:</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>How to identify suspicious login pages</li>
        <li>The difference between legitimate and fraudulent login forms</li>
        <li>Key security indicators to look for before entering your credentials</li>
        <li>How to safely use social login options like Google Sign-In</li>
      </ul>

      <div className="flex flex-wrap gap-4 mt-8">
        <Button onClick={() => setCurrentStep('real')}>See a Legitimate Login</Button>
        <Button onClick={() => setCurrentStep('fake')} variant="outline">See a Fake Login</Button>
        <Button onClick={() => setCurrentStep('comparison')} variant="secondary">Compare Side by Side</Button>
      </div>
    </div>
  );

  const renderRealLogin = () => (
    <div className="max-w-md mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-medium">Legitimate Login Page</h3>
        <Button variant="ghost" size="sm" onClick={() => setCurrentStep('intro')}>Back</Button>
      </div>
      
      <div className="border border-green-200 rounded-lg overflow-hidden mb-6">
        <div className="bg-gray-100 p-3 border-b flex items-center gap-2">
          <Lock className="h-4 w-4 text-green-600" />
          <div className="text-sm text-green-700 flex-1 truncate">https://secure.yourbank.com/login</div>
          <div className="px-2 py-0.5 bg-green-100 text-green-800 text-xs rounded-full">Secure</div>
        </div>
        
        <div className="p-6 bg-white">
          <form onSubmit={handleRealSubmit} className="space-y-4">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold">Welcome Back</h3>
              <p className="text-sm text-gray-500">Sign in to your account</p>
            </div>
            
            <div>
              <Label htmlFor="real-email">Email</Label>
              <div className="relative mt-1">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="real-email"
                  type="email"
                  className="pl-10 pr-3"
                  placeholder="you@example.com"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="real-password">Password</Label>
              <div className="relative mt-1">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="real-password"
                  type={showPassword ? "text" : "password"}
                  className="pl-10 pr-10"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <input id="remember" type="checkbox" className="h-4 w-4 border-gray-300 rounded" />
                <label htmlFor="remember" className="ml-2 text-gray-600">Remember me</label>
              </div>
              <a href="#" className="text-primary hover:underline">Forgot password?</a>
            </div>
            
            <Button type="submit" className="w-full">Sign In</Button>
            
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>
            
            <Button 
              type="button" 
              variant="outline" 
              className="w-full" 
              onClick={() => handleGoogleLogin(true)}
            >
              <div className="flex items-center justify-center w-5 h-5 mr-2">
                <svg viewBox="0 0 24 24" width="16" height="16">
                  <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                    <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"/>
                    <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"/>
                    <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"/>
                    <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"/>
                  </g>
                </svg>
              </div>
              Sign in with Google
            </Button>
          </form>
        </div>
      </div>
      
      <div className="bg-green-50 p-4 rounded-lg border border-green-100">
        <h4 className="text-sm font-medium text-green-800 flex items-center gap-2">
          <Lock className="h-4 w-4" /> Security Features:
        </h4>
        <ul className="mt-2 text-sm text-green-700 space-y-1">
          <li>• Secure HTTPS connection (lock icon in URL)</li>
          <li>• Correct domain name (yourbank.com)</li>
          <li>• No suspicious or excessive form fields</li>
          <li>• Professional design consistent with the brand</li>
          <li>• Google sign-in redirects to accounts.google.com</li>
        </ul>
      </div>
    </div>
  );

  const renderFakeLogin = () => (
    <div className="max-w-md mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-medium">Suspicious Login Page</h3>
        <Button variant="ghost" size="sm" onClick={() => setCurrentStep('intro')}>Back</Button>
      </div>
      
      {!submitted ? (
        <div className="border border-red-100 rounded-lg overflow-hidden mb-6">
          <div className="bg-gray-100 p-3 border-b flex items-center gap-2">
            <AlertCircle className="h-4 w-4 text-red-600" />
            <div className="text-sm text-red-700 flex-1 truncate">http://your-bank-secure-login.co/signin</div>
          </div>
          
          <div className="p-6 bg-white">
            <form onSubmit={handleFakeSubmit} className="space-y-4">
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold">Account Verification Required</h3>
                <p className="text-sm text-red-500">Security Alert: Please verify your account information</p>
              </div>
              
              <div>
                <Label htmlFor="fake-email">Email Address</Label>
                <Input
                  id="fake-email"
                  type="email"
                  className="mt-1"
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="fake-password">Password</Label>
                <Input
                  id="fake-password"
                  type="password"
                  className="mt-1"
                  placeholder="Enter your password"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="fake-cc">Credit Card Number (for verification)</Label>
                <div className="relative mt-1">
                  <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="fake-cc"
                    type="text"
                    className="pl-10"
                    placeholder="XXXX-XXXX-XXXX-XXXX"
                    onClick={() => toast({
                      variant: "destructive",
                      title: "Red Flag!",
                      description: "Legitimate banking logins never ask for your full credit card number during sign-in."
                    })}
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="fake-dob">Date of Birth</Label>
                <Input
                  id="fake-dob"
                  type="date"
                  className="mt-1"
                  onClick={() => toast({
                    variant: "destructive",
                    title: "Red Flag!",
                    description: "Regular logins don't need personal information like your date of birth."
                  })}
                />
              </div>
              
              <Button type="submit" className="w-full bg-yellow-600 hover:bg-yellow-700">Verify & Secure Account Now</Button>
              
              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>
              
              <Button 
                type="button" 
                variant="outline" 
                className="w-full bg-white text-black border-gray-300" 
                onClick={() => handleGoogleLogin(false)}
              >
                <div className="flex items-center justify-center w-5 h-5 mr-2">
                  <svg viewBox="0 0 24 24" width="16" height="16">
                    <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                      <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"/>
                      <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"/>
                      <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"/>
                      <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"/>
                    </g>
                  </svg>
                </div>
                Sign in with Google
              </Button>
              
              <p className="text-xs text-center text-gray-500 mt-4">
                By clicking "Verify", you agree to our updated terms and conditions. This verification is required due to suspicious login attempts.
              </p>
            </form>
          </div>
        </div>
      ) : (
        <div className="border border-red-100 rounded-lg overflow-hidden mb-6">
          <div className="bg-red-50 p-6 text-center">
            <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-red-800 mb-2">Your Information Has Been Compromised</h3>
            <p className="text-sm text-red-700 mb-4">
              In a real phishing attack, your credentials would now be in the hands of attackers. 
              They could use this information to:
            </p>
            <ul className="text-sm text-red-700 text-left list-disc pl-6 space-y-1 mb-6">
              <li>Log into your actual account</li>
              <li>Steal money or make unauthorized transactions</li>
              <li>Steal your identity</li>
              <li>Access other accounts with similar passwords</li>
              <li>Sell your information to other criminals</li>
            </ul>
            <Button 
              variant="outline" 
              onClick={() => {
                setSubmitted(false);
                setCurrentStep('intro');
              }}
            >
              Return to Demo
            </Button>
          </div>
        </div>
      )}
      
      <div className="bg-red-50 p-4 rounded-lg border border-red-200">
        <h4 className="text-sm font-medium text-red-800 flex items-center gap-2">
          <AlertCircle className="h-4 w-4" /> Red Flags:
        </h4>
        <ul className="mt-2 text-sm text-red-700 space-y-1">
          <li>• No HTTPS (secure connection)</li>
          <li>• Suspicious domain name (not yourbank.com)</li>
          <li>• Asking for excessive personal information</li>
          <li>• Urgent security alert messaging</li>
          <li>• Google sign-in doesn't redirect to Google</li>
        </ul>
      </div>
    </div>
  );

  const renderComparison = () => (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-medium">Side-by-Side Comparison</h3>
        <Button variant="ghost" size="sm" onClick={() => setCurrentStep('intro')}>Back</Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-lg font-medium mb-4 text-green-700 flex items-center">
            <Lock className="h-5 w-5 mr-2" /> Legitimate Login
          </h4>
          <div className="border border-green-200 rounded-lg overflow-hidden p-4">
            <div className="bg-gray-100 p-2 rounded flex items-center gap-2 mb-4">
              <Lock className="h-4 w-4 text-green-600" />
              <div className="text-xs text-green-700 flex-1 truncate">https://secure.yourbank.com/login</div>
              <div className="px-2 py-0.5 bg-green-100 text-green-800 text-xs rounded-full">Secure</div>
            </div>
            
            <h5 className="text-sm font-medium mb-4">Security Features:</h5>
            <ul className="text-xs space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-px flex-shrink-0" />
                <span>HTTPS connection (encrypted)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-px flex-shrink-0" />
                <span>Official domain name (yourbank.com)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-px flex-shrink-0" />
                <span>Minimal required information</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-px flex-shrink-0" />
                <span>Professional, consistent branding</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-px flex-shrink-0" />
                <span>No urgent messaging or threats</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-px flex-shrink-0" />
                <span>OAuth redirects to actual provider</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-medium mb-4 text-red-700 flex items-center">
            <AlertCircle className="h-5 w-5 mr-2" /> Fake Login
          </h4>
          <div className="border border-red-200 rounded-lg overflow-hidden p-4">
            <div className="bg-gray-100 p-2 rounded flex items-center gap-2 mb-4">
              <AlertCircle className="h-4 w-4 text-red-600" />
              <div className="text-xs text-red-700 flex-1 truncate">http://your-bank-secure-login.co/signin</div>
            </div>
            
            <h5 className="text-sm font-medium mb-4">Warning Signs:</h5>
            <ul className="text-xs space-y-2">
              <li className="flex items-start">
                <AlertTriangle className="h-4 w-4 text-red-600 mr-2 mt-px flex-shrink-0" />
                <span>No HTTPS (unencrypted connection)</span>
              </li>
              <li className="flex items-start">
                <AlertTriangle className="h-4 w-4 text-red-600 mr-2 mt-px flex-shrink-0" />
                <span>Suspicious domain name with hyphens</span>
              </li>
              <li className="flex items-start">
                <AlertTriangle className="h-4 w-4 text-red-600 mr-2 mt-px flex-shrink-0" />
                <span>Requests excessive sensitive info (credit card, DOB)</span>
              </li>
              <li className="flex items-start">
                <AlertTriangle className="h-4 w-4 text-red-600 mr-2 mt-px flex-shrink-0" />
                <span>Creates urgency with security alerts</span>
              </li>
              <li className="flex items-start">
                <AlertTriangle className="h-4 w-4 text-red-600 mr-2 mt-px flex-shrink-0" />
                <span>Long forms with unnecessary fields</span>
              </li>
              <li className="flex items-start">
                <AlertTriangle className="h-4 w-4 text-red-600 mr-2 mt-px flex-shrink-0" />
                <span>Fake OAuth buttons redirect to phishing pages</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h4 className="text-md font-medium text-blue-800 mb-3 flex items-center gap-2">
          <Globe className="h-4 w-4" /> OAuth Security (Sign in with Google, Facebook, etc.)
        </h4>
        <div className="text-sm text-blue-700 space-y-4">
          <p>
            OAuth buttons provide a secure way to log in without sharing your password with third-party sites.
            However, phishers can create fake "Sign in with..." buttons that:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="flex items-start">
              <AlertTriangle className="h-4 w-4 text-red-600 mr-2 mt-1 flex-shrink-0" />
              <div>
                <div className="font-medium">Phishing Risk:</div>
                <p className="text-xs">Redirect to fake OAuth pages that steal your credentials instead of the real Google/Facebook login pages</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
              <div>
                <div className="font-medium">How to Stay Safe:</div>
                <p className="text-xs">Always check the URL after clicking an OAuth button. It should go to the official domain (accounts.google.com, facebook.com, etc.)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      {currentStep === 'intro' && renderIntroduction()}
      {currentStep === 'real' && renderRealLogin()}
      {currentStep === 'fake' && renderFakeLogin()}
      {currentStep === 'comparison' && renderComparison()}
    </div>
  );
};

export default FakeLoginDemo;
