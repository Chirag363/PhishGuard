
import React from "react";
import { 
  Shield, 
  Mail, 
  Lock, 
  AlertTriangle, 
  Database, 
  UserX, 
  CreditCard, 
  Smartphone, 
  Eye, 
  ShieldAlert, 
  Fingerprint, 
  BellRing
} from "lucide-react";
import FadeInSection from "@/components/FadeInSection";
import PreventionCard from "@/components/PreventionCard";

const PreventionTips = () => {
  // All prevention tips
  const allTips = [
    {
      title: "Verify Email Senders",
      description: "Check the email address carefully, not just the display name. Hover over or tap the sender name to reveal the actual email address.",
      icon: Mail,
      category: "email"
    },
    {
      title: "Inspect URL Before Clicking",
      description: "Hover over links to see where they actually lead. Look for misspellings or unusual domains in URLs.",
      icon: Eye,
      category: "web"
    },
    {
      title: "Use Two-Factor Authentication",
      description: "Enable 2FA on all your important accounts to add an extra layer of security beyond just passwords.",
      icon: Shield,
      category: "account"
    },
    {
      title: "Keep Software Updated",
      description: "Regularly update your operating system, browsers, and security software to protect against known vulnerabilities.",
      icon: Smartphone,
      category: "devices"
    },
    {
      title: "Use Strong, Unique Passwords",
      description: "Create complex passwords and use different ones for each account. Consider a password manager to help manage them.",
      icon: Lock,
      category: "account"
    },
    {
      title: "Be Wary of Urgent Requests",
      description: "Be skeptical of messages creating a sense of urgency or fear. Phishers often use pressure tactics to rush decisions.",
      icon: AlertTriangle,
      category: "general"
    },
    {
      title: "Verify Unexpected Attachments",
      description: "Never open attachments from unknown sources. Even from known sources, verify unexpected attachments before opening.",
      icon: Database,
      category: "email"
    },
    {
      title: "Check for Grammar and Spelling",
      description: "Professional organizations rarely send communications with poor grammar or spelling. These can be indicators of phishing.",
      icon: AlertTriangle,
      category: "email"
    },
    {
      title: "Secure Your Personal Information",
      description: "Limit the personal information you share online, especially on social media, which can be used for targeted phishing.",
      icon: UserX,
      category: "general"
    },
    {
      title: "Monitor Financial Statements",
      description: "Regularly check your banking and credit card statements for unauthorized transactions that might indicate compromise.",
      icon: CreditCard,
      category: "financial"
    },
    {
      title: "Use Biometric Authentication",
      description: "When available, enable fingerprint or face recognition, which are harder to compromise than passwords alone.",
      icon: Fingerprint,
      category: "account"
    },
    {
      title: "Enable Security Alerts",
      description: "Set up alerts for account logins, password changes, and suspicious activities across your important services.",
      icon: BellRing,
      category: "account"
    }
  ];
  
  // Define filter state
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all");
  
  // Extract unique categories
  const categories = ["all", ...new Set(allTips.map(tip => tip.category))];
  
  // Filter tips based on selected category
  const filteredTips = allTips.filter(tip => 
    selectedCategory === "all" || tip.category === selectedCategory
  );

  // Category labels for display
  const categoryLabels = {
    all: "All Categories",
    email: "Email Security",
    web: "Web Browsing",
    account: "Account Security",
    devices: "Device Security",
    general: "General Awareness",
    financial: "Financial Security"
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-16">
        <div className="page-container">
          <FadeInSection>
            <h1 className="heading-lg text-center mb-4">Phishing Prevention Tips</h1>
            <p className="body-md text-center max-w-3xl mx-auto text-muted-foreground mb-8">
              Learn practical strategies to protect yourself from phishing attacks in your daily digital life.
            </p>
          </FadeInSection>

          {/* Category Filter */}
          <FadeInSection delay={0.1}>
            <div className="flex justify-center flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all-200 ${
                    selectedCategory === category
                      ? "bg-primary text-white"
                      : "bg-white hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  {categoryLabels[category as keyof typeof categoryLabels]}
                </button>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Tips Grid */}
      <section className="py-12">
        <div className="page-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTips.map((tip, index) => (
              <PreventionCard
                key={index}
                title={tip.title}
                description={tip.description}
                icon={tip.icon}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Prevention Infographic */}
      <section className="py-12 bg-secondary/50">
        <div className="page-container">
          <FadeInSection>
            <h2 className="heading-md text-center mb-12">The Phishing Prevention Framework</h2>
          </FadeInSection>
          
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FadeInSection delay={0.1} className="text-center p-6">
                <div className="rounded-full w-16 h-16 flex items-center justify-center bg-blue-100 text-blue-700 mx-auto mb-4">
                  <Eye size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Identify</h3>
                <p className="text-foreground/80">Learn to recognize the warning signs of phishing attempts across different platforms.</p>
                <div className="border-t border-gray-100 mt-4 pt-4">
                  <ul className="text-left text-sm space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Check sender details carefully
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Inspect URLs before clicking
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Be suspicious of unexpected messages
                    </li>
                  </ul>
                </div>
              </FadeInSection>
              
              <FadeInSection delay={0.2} className="text-center p-6 border-t md:border-t-0 md:border-l md:border-r border-gray-100">
                <div className="rounded-full w-16 h-16 flex items-center justify-center bg-green-100 text-green-700 mx-auto mb-4">
                  <Shield size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Protect</h3>
                <p className="text-foreground/80">Implement security measures to minimize your vulnerability to phishing attacks.</p>
                <div className="border-t border-gray-100 mt-4 pt-4">
                  <ul className="text-left text-sm space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Use multi-factor authentication
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Keep software updated
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Use strong, unique passwords
                    </li>
                  </ul>
                </div>
              </FadeInSection>
              
              <FadeInSection delay={0.3} className="text-center p-6 border-t md:border-t-0">
                <div className="rounded-full w-16 h-16 flex items-center justify-center bg-red-100 text-red-700 mx-auto mb-4">
                  <AlertTriangle size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Respond</h3>
                <p className="text-foreground/80">Know what to do if you suspect you've encountered a phishing attempt.</p>
                <div className="border-t border-gray-100 mt-4 pt-4">
                  <ul className="text-left text-sm space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Don't click suspicious links
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Report phishing attempts
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Change compromised passwords
                    </li>
                  </ul>
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="page-container">
          <div className="glass-panel rounded-2xl p-8 md:p-12 text-center">
            <FadeInSection>
              <ShieldAlert size={64} className="text-primary mx-auto mb-6" />
              <h2 className="heading-md mb-4">Stay Vigilant, Stay Secure</h2>
              <p className="body-md max-w-2xl mx-auto mb-8 text-muted-foreground">
                Phishing techniques continually evolve, but by staying informed and practicing good security habits, 
                you can significantly reduce your risk of becoming a victim.
              </p>
              <a 
                href="/phishing-demos" 
                className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-all-200 shadow-sm"
              >
                Explore Interactive Demos
              </a>
            </FadeInSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PreventionTips;
