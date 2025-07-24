
import React from "react";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import FadeInSection from "@/components/FadeInSection";
import DemoCard from "@/components/DemoCard";
import PreventionCard from "@/components/PreventionCard";
import { Shield, Mail, Lock, AlertTriangle, Database, UserX, CreditCard, Smartphone, IndianRupee } from "lucide-react";

const Index = () => {
  // Featured demo data
  const featuredDemos = [
    {
      id: "email-spoofing",
      title: "Email Spoofing",
      description: "Learn how attackers can forge email headers to make messages appear as if they're coming from trusted sources, and how to identify these deceptive tactics.",
      difficulty: "beginner" as const,
      category: "Email Security",
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "fake-login",
      title: "Fake Login Pages",
      description: "Experience how convincing fake login pages can be and discover the telltale signs that can help you distinguish legitimate sites from fraudulent ones.",
      difficulty: "intermediate" as const,
      category: "Web Security",
      image: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "smishing",
      title: "SMS Phishing (Smishing)",
      description: "Understand how attackers use text messages to trick users into revealing sensitive information or installing malware, and learn strategies to protect yourself.",
      difficulty: "advanced" as const,
      category: "Mobile Security",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    }
  ];

  // Key prevention tips
  const preventionTips = [
    {
      title: "Verify Email Senders",
      description: "Always check the sender's email address carefully, not just the display name, to verify the source is legitimate.",
      icon: Mail
    },
    {
      title: "Check URLs Before Clicking",
      description: "Hover over links to preview the destination URL and look for unusual domains or misspellings.",
      icon: Lock
    },
    {
      title: "Use Two-Factor Authentication",
      description: "Enable 2FA on all your important accounts to add an extra layer of security beyond passwords.",
      icon: Shield
    },
    {
      title: "Keep Software Updated",
      description: "Regularly update your operating system, browsers, and security software to protect against known vulnerabilities.",
      icon: Smartphone
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Featured Demos Section */}
      <section className="py-20 bg-secondary/50">
        <div className="page-container">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-4">Interactive Phishing Demos</h2>
              <p className="body-md max-w-2xl mx-auto text-muted-foreground">
                Experience real-world phishing scenarios in a safe environment and learn how to identify and avoid them in your daily digital life.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredDemos.map((demo, index) => (
              <DemoCard 
                key={demo.id} 
                {...demo} 
                delay={index * 0.1}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link 
              to="/phishing-demos" 
              className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-all-200 shadow-sm"
            >
              View All Demos
            </Link>
          </div>
        </div>
      </section>

      {/* Prevention Tips Section */}
      <section className="py-20">
        <div className="page-container">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-4">Essential Prevention Tips</h2>
              <p className="body-md max-w-2xl mx-auto text-muted-foreground">
                Protect yourself with these key strategies to recognize and avoid phishing attempts.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {preventionTips.map((tip, index) => (
              <PreventionCard 
                key={index} 
                {...tip} 
                delay={index * 0.1}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link 
              to="/prevention-tips" 
              className="inline-flex items-center px-6 py-3 rounded-lg bg-white border border-gray-200 text-foreground font-medium hover:bg-gray-50 transition-all-200"
            >
              View All Prevention Tips
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="page-container">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-4">Phishing By The Numbers</h2>
              <p className="body-md max-w-2xl mx-auto text-muted-foreground">
                Understanding the scale and impact of phishing attacks helps emphasize the importance of awareness.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FadeInSection delay={0.1} className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-primary mb-2">83%</div>
              <p className="text-sm text-foreground/70">of organizations experienced phishing attacks in 2022</p>
            </FadeInSection>
            <FadeInSection delay={0.2} className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-primary mb-2 flex items-center justify-center">
                <IndianRupee className="w-7 h-7 mr-1" />3.5Cr
              </div>
              <p className="text-sm text-foreground/70">average cost of a successful phishing attack</p>
            </FadeInSection>
            <FadeInSection delay={0.3} className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-primary mb-2">30%</div>
              <p className="text-sm text-foreground/70">of phishing emails are opened by targeted users</p>
            </FadeInSection>
            <FadeInSection delay={0.4} className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-primary mb-2">76%</div>
              <p className="text-sm text-foreground/70">of businesses reported being a victim of a phishing attack</p>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20">
        <div className="page-container">
          <div className="bg-primary rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 flex items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                    Stay Protected in Your Digital Life
                  </h2>
                  <p className="text-primary-foreground/90 mb-8 max-w-lg">
                    Explore our comprehensive resources to protect yourself and your organization from increasingly sophisticated phishing attempts.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      to="/phishing-demos" 
                      className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-primary font-medium hover:bg-gray-100 transition-all-200"
                    >
                      View Interactive Demos
                    </Link>
                    <Link 
                      to="/prevention-tips" 
                      className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary/20 border border-white/20 text-white font-medium hover:bg-primary/30 transition-all-200"
                    >
                      Learn Prevention Techniques
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative lg:h-auto">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Shield size={180} className="text-white/10" />
                </div>
                <div className="h-64 lg:h-full bg-primary-foreground/10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
