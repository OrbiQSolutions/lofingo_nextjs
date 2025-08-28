"use client";

import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

export function LofingoO(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      aria-label="Lofingo O Logo"
      {...props}
    >
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke="currentColor"
        strokeWidth="10"
        strokeDasharray="283"
        strokeDashoffset="283"
        className="animate-draw"
        style={{ animation: 'draw 1s ease-out forwards' }}
      />
      <style jsx>{`
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </svg>
  );
}
