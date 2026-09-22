import React from 'react';
import logoImg from '../assets/beezy_logo_clean.png';
import iconImg from '../assets/beezy_icon_clean.png';

/**
 * BeezyIcon: Authentic brand emblem.
 * Perfectly transparent with zero background artifacts or box contours.
 */
export function BeezyIcon({ className = "w-8 h-8", ...props }) {
  return (
    <img 
      src={iconImg} 
      alt="Beezy Solutions" 
      className={`object-contain inline-block select-none ${className}`}
      {...props}
    />
  );
}

/**
 * BeezyLogo: Exact Authentic Logo Lockup for Beezy Solutions.
 * Renders directly and seamlessly with 100% transparent background,
 * authentic vibrant emerald folded ribbon emblem, and crisp white typography.
 */
export default function BeezyLogo({ 
  size = "default", 
  className = "",
  interactive = true,
  href,
  ...props
}) {
  const sizeClasses = {
    xs: "h-6 sm:h-7",
    small: "h-7 sm:h-8",
    sm: "h-7 sm:h-8",
    default: "h-9 sm:h-10",
    md: "h-9 sm:h-10",
    large: "h-12 sm:h-14",
    lg: "h-12 sm:h-14",
    xl: "h-16 sm:h-18",
    "2xl": "h-20 sm:h-24",
  };

  const heightClass = sizeClasses[size] || sizeClasses.default;

  const content = (
    <img 
      src={logoImg} 
      alt="Beezy Solutions" 
      className={`${heightClass} w-auto object-contain shrink-0 drop-shadow-[0_0_16px_rgba(0,223,154,0.25)] transition-transform duration-200 ${
        interactive ? 'hover:scale-[1.02]' : ''
      }`}
      {...props}
    />
  );

  const wrapperClass = `inline-flex items-center select-none ${className}`;

  if (href) {
    return (
      <a href={href} className={`${wrapperClass} cursor-pointer`} aria-label="Beezy Solutions">
        {content}
      </a>
    );
  }

  return (
    <div className={wrapperClass}>
      {content}
    </div>
  );
}
