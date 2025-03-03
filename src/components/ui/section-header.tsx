
import { ReactNode } from "react";

interface SectionHeaderProps {
  tagline: string;
  title: string;
  description: ReactNode;
}

const SectionHeader = ({ tagline, title, description }: SectionHeaderProps) => {
  return (
    <div className="text-center max-w-2xl mx-auto mb-16">
      <div className="inline-block px-3 py-1 bg-rosegold-50 text-rosegold-600 rounded-full text-xs font-medium mb-4 fade-in-hidden">
        {tagline}
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 fade-in-hidden">
        {title}
      </h2>
      <p className="text-muted-foreground fade-in-hidden">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
