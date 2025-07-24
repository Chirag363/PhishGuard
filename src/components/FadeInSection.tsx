
import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number; // Visibility threshold (0-1)
  direction?: "up" | "down" | "left" | "right" | "none";
}

const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  className,
  delay = 0,
  threshold = 0.1,
  direction = "up",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const getTransformStyles = () => {
    if (!isVisible) {
      switch (direction) {
        case "up":
          return "translate3d(0, 40px, 0)";
        case "down":
          return "translate3d(0, -40px, 0)";
        case "left":
          return "translate3d(40px, 0, 0)";
        case "right":
          return "translate3d(-40px, 0, 0)";
        default:
          return "translate3d(0, 0, 0)";
      }
    }
    return "translate3d(0, 0, 0)";
  };

  return (
    <div
      ref={domRef}
      className={cn(className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransformStyles(),
        transition: `opacity 0.8s ease-out ${delay}s, transform 0.8s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
