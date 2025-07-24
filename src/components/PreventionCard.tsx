
import React from "react";
import { cn } from "@/lib/utils";
import FadeInSection from "./FadeInSection";
import { LucideIcon } from "lucide-react";

interface PreventionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  delay?: number;
}

const PreventionCard: React.FC<PreventionCardProps> = ({
  title,
  description,
  icon: Icon,
  className,
  delay = 0,
}) => {
  return (
    <FadeInSection className={className} delay={delay} direction="up">
      <div className="h-full glass-panel rounded-xl p-6 hover:shadow-lg transition-all-300">
        <div className="rounded-full w-12 h-12 flex items-center justify-center bg-primary/10 text-primary mb-5">
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-foreground/80">{description}</p>
      </div>
    </FadeInSection>
  );
};

export default PreventionCard;
