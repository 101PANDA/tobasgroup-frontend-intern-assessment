import React from "react";

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export const Heading1 = ({ children, className = "" }: TypographyProps) => (
  <h1
    className={`font-nunito text-[56px] font-bold leading-[130%] tracking-[0%] text-center ${className}`}
  >
    {children}
  </h1>
);

export const Heading2 = ({ children, className = "" }: TypographyProps) => (
  <h2
    className={`font-nunito text-[40px] font-semibold leading-[150%] tracking-[3%] ${className}`}
  >
    {children}
  </h2>
);

export const HeadingTestimonials = ({
  children,
  className = "",
}: TypographyProps) => (
  <h2
    className={`font-nunito text-[40px] font-bold leading-[130%] tracking-[0%] ${className}`}
  >
    {children}
  </h2>
);

export const Subtitle2 = ({ children, className = "" }: TypographyProps) => (
  <p
    className={`font-nunitoSans text-[18px] font-normal leading-[150%] tracking-[0%] ${className}`}
  >
    {children}
  </p>
);

export const Subtitle3Blue = ({
  children,
  className = "",
}: TypographyProps) => (
  <p
    className={`font-nunito text-[20px] font-semibold italic leading-[130%] tracking-[0%] ${className}`}
  >
    {children}
  </p>
);
