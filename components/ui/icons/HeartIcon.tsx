import { SVGProps } from "react";

const variants = {
  fill: {
    liked: "hsl(var(--primary))",
    unliked: "hsl(var(--background))",
  },
  stroke: {
    liked: "hsl(var(--primary))",
    unliked: "hsl(var(--foreground))",
  },
};

export function HeartIcon({
  variant = "unliked",
  ...props
}: SVGProps<SVGSVGElement> & { variant?: "liked" | "unliked" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill={variants.fill[variant]}
        stroke={variants.stroke[variant]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19.5 12.572L12 20l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572"
      ></path>
    </svg>
  );
}
