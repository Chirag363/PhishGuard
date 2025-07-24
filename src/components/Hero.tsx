
import React from "react";
import { ShieldCheck, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import FadeInSection from "./FadeInSection";
import { cn } from "@/lib/utils";

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "relative min-h-[90vh] flex items-center justify-center overflow-hidden py-16 px-4",
        className
      )}
    >
      {/* Background gradient elements */}
      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-blue-400/10 blur-3xl" />
      </div>

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <FadeInSection direction="right" className="order-2 md:order-1">
            <div className="max-w-xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 mb-6 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <AlertCircle size={16} />
                <span>Security Awareness Training</span>
              </div>
              <h1 className="heading-xl mb-6 text-balance">
                Protect Yourself from{" "}
                <span className="text-primary">Phishing Attacks</span>
              </h1>
              <p className="body-lg mb-8 text-foreground/80 max-w-lg">
                Learn to identify and prevent phishing attempts with our interactive demos and educational resources.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/phishing-demos"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-all-200 shadow-sm"
                >
                  View Phishing Demos
                </Link>
                <Link
                  to="/prevention-tips"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white border border-gray-200 text-foreground font-medium hover:bg-gray-50 transition-all-200"
                >
                  Prevention Tips
                </Link>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection direction="left" className="order-1 md:order-2">
            <div className="glass-panel rounded-2xl p-2 sm:p-4 shadow-xl">
              <div className="relative aspect-[4/3] bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <ShieldCheck size={120} className="text-primary/20" />
                </div>
                <div className="absolute top-0 left-0 right-0 p-4 glass-panel bg-white/80 backdrop-blur rounded-t-xl">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    <div className="ml-2 text-xs text-gray-500 flex-1 overflow-hidden whitespace-nowrap">
                      https://secure-<span className="text-red-500">bank-login.com</span>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 p-4 glass-panel rounded-lg">
                  <div className="text-xs font-medium text-red-500 mb-1">Security Alert</div>
                  <div className="text-sm text-gray-700">
                    This website appears to be imitating a legitimate banking website.
                    Learn how to identify these fraudulent sites.
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <div className="animate-bounce w-6 h-10 flex items-start justify-center">
          <div className="w-1 h-6 bg-primary/50 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
