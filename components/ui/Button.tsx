import React from 'react';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  icon?: 'arrow-up-right' | 'chevron-right' | 'none';
  href?: string;
}

export function Button({ variant = 'primary', icon = 'none', className = '', children, href, ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 rounded-md font-medium text-sm transition-colors w-fit";
  
  const variants = {
    primary: "bg-primary hover:bg-purpleSelection text-white px-6 py-3",
    secondary: "bg-secondary hover:bg-opacity-90 text-white px-6 py-3",
    outline: "border border-primary text-primary hover:bg-purpleSelection hover:text-white px-4 py-2",
    white: "bg-white text-primary hover:bg-gray-100 px-8 py-3 font-semibold"
  };

  const IconComponent = icon === 'arrow-up-right' ? ArrowUpRight : icon === 'chevron-right' ? ChevronRight : null;

  const content = (
    <>
      {children}
      {IconComponent && <IconComponent size={18} />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {content}
      </Link>
    )
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {content}
    </button>
  );
}
