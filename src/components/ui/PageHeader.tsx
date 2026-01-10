
import React from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  background?: "primary" | "secondary" | "gradient";
}

const PageHeader = ({ 
  title, 
  subtitle,
  background = "primary" 
}: PageHeaderProps) => {
  let bgClasses = "bg-secondary";
  
  if (background === "primary") {
    bgClasses = "bg-primary/10";
  } else if (background === "gradient") {
    bgClasses = "bg-gradient-to-r from-primary/20 to-accent/20";
  }
  
  return (
    <div className={`py-16 ${bgClasses}`}>
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
