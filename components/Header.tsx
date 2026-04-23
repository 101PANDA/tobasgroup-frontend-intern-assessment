'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Menu, ChevronDown, User } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        // Hide if scrolling down and past 80px (header height)
        if (currentScrollY > lastScrollY && currentScrollY > 80) {
          setIsVisible(false);
        } else {
          // Show if scrolling up
          setIsVisible(true);
        }
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header 
      className={`sticky top-0 z-50 w-full bg-white flex flex-col items-center shadow-sm font-nunito-sans transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Top Bar: Logo and Account / CTA */}
      <div className="w-full max-w-[1440px] px-4 lg:px-[64px] border-b border-gray-100 flex items-center justify-between h-[80px]">
         <Link href="/">
           <Image 
             src="/logo.png" 
             width={165.7} 
             height={64} 
             alt="Tobams Group" 
             className="w-[165.7px] h-[64px] object-contain" 
             priority
           />
         </Link>
         
         <div className="hidden lg:flex items-center gap-4">
            <button className="flex items-center justify-center gap-2 w-[167px] h-[48px] bg-primary text-white rounded-md font-semibold text-[16px] hover:bg-opacity-90 transition-colors">
              <div className="border border-white/40 rounded-full p-0.5"><User size={16} /></div>
              Account
              <ChevronDown size={16} />
            </button>
            <button className="flex items-center justify-center px-6 h-[48px] bg-secondary text-white rounded-md font-semibold text-[16px] hover:bg-opacity-90 transition-colors">
              Take Assessment
            </button>
         </div>

         {/* Mobile Menu Toggle - Updated matching user screenshot style */}
         <button className="lg:hidden w-[40px] h-[40px] bg-mainText text-white rounded-[10px] flex items-center justify-center hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-mainText focus:ring-offset-2">
           <Menu size={24} />
         </button>
      </div>

      {/* Nav Bar */}
      <div className="hidden lg:flex w-full max-w-[1440px] px-[64px] py-[20px] items-center justify-center overflow-x-auto hide-scrollbar">
         <nav className="flex items-center gap-[32px] text-[16px] text-mainText font-semibold">
            <Link href="#" className="flex items-center gap-1 text-primary border-b-[2px] border-primary pb-1 transition-colors">
              About <ChevronDown size={14} />
            </Link>
            <Link href="#" className="flex items-center gap-1 hover:text-primary transition-colors pb-1">What We Do <ChevronDown size={14} /></Link>
            <Link href="#" className="flex items-center gap-1 hover:text-primary transition-colors pb-1">Jobs <ChevronDown size={14} /></Link>
            <Link href="#" className="hover:text-primary transition-colors pb-1">Projects</Link>
            <Link href="#" className="hover:text-primary transition-colors pb-1">TG Academy</Link>
            <Link href="#" className="hover:text-primary transition-colors pb-1">Strategic Partnership</Link>
            <Link href="#" className="hover:text-primary transition-colors pb-1">Pricing</Link>
            <Link href="#" className="hover:text-primary transition-colors whitespace-nowrap pb-1">Book a Consultation</Link>
         </nav>
      </div>
    </header>
  );
}
