
import React from "react";
import { Link } from "react-router-dom";
import FadeInSection from "@/components/FadeInSection";
import { Info, Users, BookOpen, MessageSquare, Shield } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-16">
        <div className="page-container">
          <FadeInSection>
            <h1 className="heading-lg text-center mb-4">About PhishGuard</h1>
            <p className="body-md text-center max-w-3xl mx-auto text-muted-foreground">
              Our mission is to educate individuals and organizations about phishing threats and provide practical tools for protection.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInSection direction="right">
              <div className="glass-panel rounded-2xl p-8 aspect-square flex items-center justify-center">
                <Shield size={180} className="text-primary/20" />
              </div>
            </FadeInSection>
            
            <FadeInSection direction="left">
              <div>
                <div className="inline-flex items-center space-x-2 px-3 py-1 mb-6 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <Info size={16} />
                  <span>Our Mission</span>
                </div>
                <h2 className="heading-lg mb-6">Making the Digital World Safer</h2>
                <p className="body-md mb-6 text-foreground/80">
                  PhishGuard was created with a simple but powerful mission: to empower individuals and organizations 
                  with the knowledge and tools they need to identify, avoid, and report phishing attacks.
                </p>
                <p className="body-md mb-6 text-foreground/80">
                  We believe that education is the most effective defense against phishing. Through realistic 
                  demonstrations and practical guidelines, we aim to build a more security-conscious digital community.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Link
                    to="/phishing-demos"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-all-200 shadow-sm"
                  >
                    <BookOpen size={18} className="mr-2" />
                    Explore Our Demos
                  </Link>
                  <Link
                    to="/prevention-tips"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white border border-gray-200 text-foreground font-medium hover:bg-gray-50 transition-all-200"
                  >
                    <Shield size={18} className="mr-2" />
                    View Prevention Tips
                  </Link>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="py-16 bg-secondary/50">
        <div className="page-container">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-4">Why We Exist</h2>
              <p className="body-md max-w-2xl mx-auto text-muted-foreground">
                The threat landscape is constantly evolving, with phishing remaining one of the most common and effective attack vectors.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FadeInSection delay={0.1}>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="rounded-full w-12 h-12 flex items-center justify-center bg-primary/10 text-primary mb-5">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Everyone is a Target</h3>
                <p className="text-foreground/80">
                  Phishing attacks target individuals across all demographics and organizations of all sizes. 
                  No one is immune to these threats, making awareness crucial for everyone.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="rounded-full w-12 h-12 flex items-center justify-center bg-primary/10 text-primary mb-5">
                  <BookOpen size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Knowledge is Power</h3>
                <p className="text-foreground/80">
                  Understanding how phishing attacks work is the first step in preventing them. 
                  Our educational approach focuses on practical, applicable knowledge.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="rounded-full w-12 h-12 flex items-center justify-center bg-primary/10 text-primary mb-5">
                  <Shield size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Prevention is Better</h3>
                <p className="text-foreground/80">
                  The cost of falling victim to phishing far exceeds the effort of prevention. 
                  We provide practical tools to help you stay one step ahead of attackers.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-16">
        <div className="page-container">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-4">How We Help</h2>
              <p className="body-md max-w-2xl mx-auto text-muted-foreground">
                Our approach combines realistic simulations with practical education to create a comprehensive security awareness platform.
              </p>
            </div>
          </FadeInSection>

          <div className="space-y-8">
            <FadeInSection delay={0.1}>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="rounded-full w-16 h-16 flex items-center justify-center bg-blue-100 text-blue-700 shrink-0">
                    <BookOpen size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Interactive Demonstrations</h3>
                    <p className="text-foreground/80 mb-4">
                      Our phishing demos provide hands-on experience with various attack techniques in a safe, controlled environment. 
                      By experiencing these scenarios firsthand, you'll be better equipped to recognize them in the wild.
                    </p>
                    <Link to="/phishing-demos" className="text-primary font-medium hover:underline inline-flex items-center">
                      View Demonstrations <span className="ml-1">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="rounded-full w-16 h-16 flex items-center justify-center bg-green-100 text-green-700 shrink-0">
                    <Shield size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Practical Prevention Tips</h3>
                    <p className="text-foreground/80 mb-4">
                      We provide actionable advice that you can immediately implement to enhance your security posture. 
                      These tips are designed to be accessible for users of all technical levels.
                    </p>
                    <Link to="/prevention-tips" className="text-primary font-medium hover:underline inline-flex items-center">
                      Explore Prevention Tips <span className="ml-1">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="rounded-full w-16 h-16 flex items-center justify-center bg-purple-100 text-purple-700 shrink-0">
                    <MessageSquare size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Community Engagement</h3>
                    <p className="text-foreground/80 mb-4">
                      Security is a collective effort. We foster a community of security-conscious individuals 
                      sharing experiences and knowledge to strengthen our collective defense against phishing.
                    </p>
                    <Link to="/" className="text-primary font-medium hover:underline inline-flex items-center">
                      Join Our Community <span className="ml-1">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="page-container">
          <div className="text-center">
            <FadeInSection>
              <h2 className="heading-lg mb-6">Ready to Strengthen Your Defenses?</h2>
              <p className="body-md max-w-2xl mx-auto mb-8 text-primary-foreground/90">
                Start your journey to better security awareness today by exploring our interactive phishing demonstrations.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/phishing-demos"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-primary font-medium hover:bg-gray-100 transition-all-200"
                >
                  View Phishing Demos
                </Link>
                <Link
                  to="/prevention-tips"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary/20 border border-white/20 text-white font-medium hover:bg-primary/30 transition-all-200"
                >
                  Learn Prevention Techniques
                </Link>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
