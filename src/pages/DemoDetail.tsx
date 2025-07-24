
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ShieldAlert, ExternalLink } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { EmailSpoofingDemo, FakeLoginDemo, ClonePhishingDemo, SMSPhishingDemo } from "@/components/demos";
import { DemoData, DemoId } from "@/components/demos/types";

const getDemoContent = (demoId: string): React.ReactNode => {
  switch (demoId) {
    case "email-spoofing":
      return <EmailSpoofingDemo />;
    case "fake-login":
      return <FakeLoginDemo />;
    case "clone-phishing":
      return <ClonePhishingDemo />;
    case "smishing":
      return <SMSPhishingDemo />;
    default:
      return (
        <div className="p-8 text-center">
          <ShieldAlert className="mx-auto h-12 w-12 text-yellow-500 mb-4" />
          <h3 className="text-xl font-medium mb-3">Demo Coming Soon</h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            This phishing demonstration is still under development. Please check back later.
          </p>
        </div>
      );
  }
};

const demosData: Record<string, DemoData> = {
  "email-spoofing": {
    id: "email-spoofing",
    title: "Email Spoofing",
    description: "Learn how attackers can forge email headers to make messages appear as if they're coming from trusted sources, and how to identify these deceptive tactics.",
    difficulty: "beginner",
    category: "Email Security",
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
  },
  "fake-login": {
    id: "fake-login",
    title: "Fake Login Pages",
    description: "Experience how convincing fake login pages can be and discover the telltale signs that can help you distinguish legitimate sites from fraudulent ones.",
    difficulty: "intermediate",
    category: "Web Security",
    image: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
  },
  "clone-phishing": {
    id: "clone-phishing",
    title: "Clone Phishing",
    description: "See how attackers create nearly identical copies of legitimate emails or websites, and learn to spot the subtle differences that reveal their true nature.",
    difficulty: "intermediate",
    category: "Web Security",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
  },
  "smishing": {
    id: "smishing",
    title: "SMS Phishing (Smishing)",
    description: "Understand how attackers use text messages to trick users into revealing sensitive information or installing malware, and learn strategies to protect yourself.",
    difficulty: "advanced",
    category: "Mobile Security",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
  },
};

const DemoDetail = () => {
  const { demoId } = useParams<{ demoId: string }>();
  const navigate = useNavigate();
  const [demo, setDemo] = useState<DemoData | null>(null);

  useEffect(() => {
    if (demoId && demosData[demoId]) {
      setDemo(demosData[demoId]);
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Demo not found"
      });
      navigate("/phishing-demos", { replace: true });
    }
  }, [demoId, navigate]);

  if (!demo) {
    return null;
  }

  return (
    <div className="min-h-screen pt-16">
      <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-12">
        <div className="page-container">
          <FadeInSection>
            <Button
              variant="ghost"
              className="mb-6 -ml-2"
              onClick={() => navigate("/phishing-demos")}
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Demos
            </Button>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              {demo.image && (
                <div className="w-full md:w-1/3">
                  <img
                    src={demo.image}
                    alt={demo.title}
                    className="w-full h-auto rounded-xl shadow-md"
                  />
                </div>
              )}

              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4 bg-black/10">
                  <span>{demo.category}</span>
                  <span className="w-1 h-1 rounded-full bg-current opacity-50"></span>
                  <span className="capitalize">{demo.difficulty} Level</span>
                </div>
                
                <h1 className="heading-lg mb-4">{demo.title}</h1>
                <p className="body-md text-muted-foreground mb-6">
                  {demo.description}
                </p>

                <div className="flex items-center gap-4">
                  <Button variant="default">Start Interactive Demo</Button>
                  <Button variant="outline">
                    Learn More <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      <section className="py-12">
        <div className="page-container">
          <div className="glass-panel rounded-xl p-6 md:p-8">
            <FadeInSection delay={0.2}>
              {demoId && getDemoContent(demoId)}
            </FadeInSection>
          </div>
        </div>
      </section>

      <section className="py-8 bg-yellow-50">
        <div className="page-container">
          <FadeInSection>
            <div className="flex flex-col md:flex-row items-center gap-4 p-6 rounded-xl border border-yellow-200 bg-yellow-100/50">
              <ShieldAlert className="h-10 w-10 text-yellow-600" />
              <div>
                <h3 className="text-lg font-medium mb-1">Educational Purposes Only</h3>
                <p className="text-sm text-muted-foreground">
                  This demonstration is provided solely for educational purposes to help you identify and protect 
                  against phishing attacks. Never use these techniques for malicious purposes.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
};

export default DemoDetail;
