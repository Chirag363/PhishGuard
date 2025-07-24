
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AlertTriangle, ChevronRight, Lock, Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";
import FadeInSection from "./FadeInSection";

export interface DemoCardProps {
  id: string;
  title: string;
  description: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  category: string;
  image?: string;
  className?: string;
  delay?: number;
}

const DemoCard: React.FC<DemoCardProps> = ({
  id,
  title,
  description,
  difficulty,
  category,
  image,
  className,
  delay = 0,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const difficultyColor = {
    beginner: "bg-green-100 text-green-800",
    intermediate: "bg-yellow-100 text-yellow-800",
    advanced: "bg-red-100 text-red-800",
  };

  return (
    <FadeInSection 
      className={cn("h-full", className)} 
      delay={delay}
      direction="up"
    >
      <div
        className="group h-full flex flex-col overflow-hidden rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative aspect-[16/9] overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={title}
              className={cn(
                "w-full h-full object-cover transition-transform duration-500",
                isHovered ? "scale-105" : "scale-100"
              )}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
              <Lock className="text-gray-400" size={48} />
            </div>
          )}
          <div className="absolute top-3 right-3">
            <div className={cn("text-xs px-2 py-1 rounded-full font-medium", difficultyColor[difficulty])}>
              {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
            </div>
          </div>
          <div className="absolute top-3 left-3">
            <div className="bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
              {category}
            </div>
          </div>
        </div>
        
        <div className="flex-1 p-5 flex flex-col">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          
          <div className="relative">
            <p className={cn(
              "text-sm text-gray-600 mb-4 transition-all duration-300",
              showDetails ? "line-clamp-none" : "line-clamp-2"
            )}>
              {description}
            </p>
            {description.length > 100 && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShowDetails(!showDetails);
                }}
                className="text-xs text-primary flex items-center hover:underline mb-4"
              >
                {showDetails ? (
                  <>
                    <EyeOff size={12} className="mr-1" /> Show less
                  </>
                ) : (
                  <>
                    <Eye size={12} className="mr-1" /> Show more
                  </>
                )}
              </button>
            )}
          </div>
          
          <div className="mt-auto pt-4 flex items-center justify-between">
            <div className="flex items-center text-yellow-700">
              <AlertTriangle size={16} className="mr-1" />
              <span className="text-xs">Educational purposes only</span>
            </div>
            <Link
              to={`/phishing-demos/${id}`}
              className="inline-flex items-center text-sm text-primary font-medium hover:underline"
            >
              View Demo
              <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};

export default DemoCard;
