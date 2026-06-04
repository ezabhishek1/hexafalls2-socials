import React from "react";
import Link from "next/link";

export interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  handle?: string;
  delay: string;
}

export default function SocialLink({
  href,
  icon,
  label,
  handle,
  delay,
}: SocialLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center gap-4 p-4 rounded-2xl
        hf-glass animate-glow
        border border-[#66FCF1]/10
        hover:border-[#66FCF1]/30
        transition-all duration-400 ease-out
        hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(102,252,241,0.12)]
        animate-float"
      style={{
        animationDelay: delay,
        animationDuration: "4s",
      }}
    >
      {/* Icon circle */}
      <div
        className="relative flex items-center justify-center w-11 h-11 rounded-full shrink-0
        bg-gradient-to-br from-[#F97316] via-[#FFB703] to-[#EA580C]
        text-[#081018]
        group-hover:shadow-[0_0_16px_rgba(249,115,22,0.4)]
        transition-shadow duration-400"
      >
        {icon}
      </div>

      {/* Text */}
      <div className="flex flex-col min-w-0">
        <span className="text-[#FFF8EE] font-medium text-[15px] group-hover:text-[#66FCF1] transition-colors duration-300">
          {label}
        </span>
        {handle && (
          <span className="text-[#C5C6C7]/50 text-xs mt-0.5 truncate">
            {handle}
          </span>
        )}
      </div>

      {/* Arrow */}
      <div className="ml-auto text-[#31465A] group-hover:text-[#66FCF1]/60 group-hover:translate-x-1 transition-all duration-300">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 3L11 8L6 13"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </Link>
  );
}
