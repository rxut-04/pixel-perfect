import * as React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Stat {
  icon: React.ReactNode;
  label: string;
}

export interface AnimatedHikeCardProps {
  title: string;
  images: string[];
  stats: Stat[];
  description: string;
  href: string;
  className?: string;
}

export const AnimatedHikeCard = React.forwardRef<
  HTMLAnchorElement,
  AnimatedHikeCardProps
>(({ title, images, stats, description, href, className }, ref) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Link
      ref={ref}
      to={href}
      className={cn(
        "group relative block w-full max-w-full sm:max-w-sm cursor-pointer rounded-2xl border bg-card p-4 sm:p-6 text-card-foreground shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg lg:max-w-md",
        className
      )}
      aria-label={`Learn more about ${title}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col">
        {/* Card Header: Title and Arrow */}
        <div className="mb-4 sm:mb-6 flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tighter">{title}</h2>
          <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
        </div>

        {/* Stacked Images with CORRECTED Hover Animation */}
        <div className="relative mb-4 sm:mb-6 h-24 sm:h-28 md:h-32">
          {images.map((src, index) => {
            const baseTranslateX = index * 32;
            const hoverTranslateX = baseTranslateX + (index * 80);
            const hoverRotate = index * 5 - 5;
            
            return (
              <div
                key={index}
                className="absolute h-full w-[40%] overflow-hidden rounded-lg border-2 border-background shadow-md transition-all duration-300 ease-in-out"
                style={{
                  transform: isHovered
                    ? `translateX(${hoverTranslateX}px) rotate(${hoverRotate}deg)`
                    : `translateX(${baseTranslateX}px)`,
                  zIndex: images.length - index,
                }}
              >
                <img
                  src={src}
                  alt={`${title} view ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mb-3 sm:mb-4 flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center space-x-1.5">
              {stat.icon}
              <span className="whitespace-nowrap">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </Link>
  );
});

AnimatedHikeCard.displayName = "AnimatedHikeCard";

