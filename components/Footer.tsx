import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, Linkedin, Instagram } from 'lucide-react';
import { Button } from './ui/Button';

export default function Footer() {
  return (
    <footer className="w-full bg-[#1A0512] text-white pt-16 pb-8">
      
      {/* Pre-footer CTA */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[64px] mb-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/10 pb-16">
          <div className="flex flex-col gap-2 max-w-2xl">
            <p className="text-gray-300 text-sm font-light">Ready to be a part of something extraordinary?</p>
            <h2 className="text-[32px] md:text-[40px] font-semibold text-white leading-tight">Let&apos;s work together to create a difference</h2>
          </div>
          <Button variant="primary" className="bg-[#571244] hover:bg-[#571244]/90 text-white rounded-[8px]">
            Get In Touch
          </Button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[64px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 mb-16">
          
          {/* Column 1: Logo & Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Link href="/" className="mb-2 block w-[188px] h-[72.6px]">
               <Image 
                 src="/logo.png" 
                 width={188} 
                 height={72.61} 
                 alt="Tobams Group" 
                 className="w-full h-full object-contain" 
               />
            </Link>
            <p className="text-gray-300 text-[14px] leading-relaxed max-w-md">
              Tobams Group is an innovative consultancy firm reshaping the future of tech talent development in Africa, specializing in talent acquisition, internships, and skill development with a global perspective.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <Link href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1A0512] hover:bg-gray-200 transition-colors">
                <Linkedin size={18} fill="currentColor" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1A0512] hover:bg-gray-200 transition-colors">
                <Instagram size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1A0512] hover:bg-gray-200 transition-colors font-bold text-lg leading-none">
                <span className="mb-[2px]">X</span>
              </Link>
            </div>
          </div>

          {/* Column 2: What We Do */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-lg mb-2">What We Do</h4>
            <Link href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Sustainability Services</Link>
            <Link href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Strategy Planning and Implementation</Link>
            <Link href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Tech Talent Solutions</Link>
            <Link href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Training and Development</Link>
            <Link href="#" className="text-gray-300 text-sm hover:text-white transition-colors">IT Consulting Services</Link>
            <Link href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Social Impact</Link>
            <Link href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Talent Recruitment</Link>
          </div>

          {/* Column 3: Company */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-[18px] mb-2">Company</h4>
            <Link href="#" className="text-gray-300 text-[14px] hover:text-white transition-colors">About</Link>
            <Link href="#" className="text-gray-300 text-[14px] hover:text-white transition-colors">Jobs</Link>
            <Link href="#" className="text-gray-300 text-[14px] hover:text-white transition-colors">Projects</Link>
            <Link href="#" className="text-gray-300 text-[14px] hover:text-white transition-colors">Our Founder</Link>
            <Link href="#" className="text-gray-300 text-[14px] hover:text-white transition-colors">Business Model</Link>
            <Link href="#" className="text-gray-300 text-[14px] hover:text-white transition-colors">The Team</Link>
            <Link href="#" className="text-gray-300 text-[14px] hover:text-white transition-colors">Contact Us</Link>
            <Link href="#" className="text-gray-300 text-[14px] hover:text-white transition-colors">Blog</Link>
            <Link href="#" className="text-gray-300 text-[14px] hover:text-white transition-colors">FAQs</Link>
            <Link href="#" className="text-gray-300 text-[14px] hover:text-white transition-colors">Testimonials</Link>
          </div>

          {/* Column 4: Solution */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-[18px] mb-2">Solution</h4>
            <Link href="#" className="text-gray-300 text-[14px] hover:text-white transition-colors">Tobams Group Academy</Link>
            <Link href="#" className="text-gray-300 text-[14px] hover:text-white transition-colors">Help a Tech Talent</Link>
            <Link href="#" className="text-gray-300 text-[14px] hover:text-white transition-colors">Campus Ambassadors Program</Link>
            <Link href="#" className="text-gray-300 text-[14px] hover:text-white transition-colors">Join Our Platform</Link>
            <Link href="#" className="text-gray-300 text-[14px] hover:text-white transition-colors">Pricing</Link>
            <Link href="#" className="text-gray-300 text-[14px] hover:text-white transition-colors">Book a Consultation</Link>
            <Link href="#" className="text-gray-300 text-[14px] hover:text-white transition-colors">Join Our Slack Community</Link>
          </div>

        </div>

        {/* Contact and Registered Offices - placed in a grid below */}
        <div className="bg-[#2B1525] rounded-xl flex flex-col lg:flex-row gap-8 py-10 px-6 lg:px-10 border border-white/5 mb-8">
           
           <div className="flex flex-col gap-4 flex-1">
             <h4 className="font-bold mb-2 text-white">Registered Offices</h4>
             <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:border-r border-white/10 lg:pr-10">
               <div className="flex-1">
                 <p className="text-[#EF4353] font-medium text-[14px] mb-1">United Kingdom</p>
                 <p className="text-gray-300 text-[14px] leading-relaxed">
                   07451196 (Registered by Company House)<br/>
                   Vine Cottages, 215 North Street, Romford, Essex. United Kingdom, RM1 4QA
                 </p>
               </div>
               <div className="flex-1">
                 <p className="text-[#EF4353] font-medium text-[14px] mb-1">Nigeria</p>
                 <p className="text-gray-300 text-[14px] leading-relaxed">
                   RC 1048722 (Registered by the Corporate Affairs Commission)<br/>
                   4, Muaz Close, Angwari-Rimi
                 </p>
               </div>
             </div>
           </div>

           <div className="flex flex-col gap-4 lg:w-1/3 content-start">
              <h4 className="font-bold mb-2 w-full text-left text-white">Contact Information</h4>
              <div className="flex flex-col gap-3 w-full items-start">
                 <div className="flex items-center gap-3">
                   <Mail size={16} className="text-[#EF4353]" />
                   <a href="mailto:theteam@tobamsgroup.com" className="text-gray-300 text-[14px] hover:text-white transition-colors">theteam@tobamsgroup.com</a>
                 </div>
                 <div className="flex items-center gap-3">
                   <Phone size={16} className="text-[#EF4353]" />
                   <a href="tel:+447886600748" className="text-gray-300 text-[14px] hover:text-white transition-colors">+447886600748</a>
                 </div>
              </div>
           </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 py-6">
          <p>Copyright © Tobams Group, 2024. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
            <Link href="#" className="underline underline-offset-2 decoration-gray-500 hover:text-gray-200 transition-colors">Terms and Conditions</Link>
            <Link href="#" className="underline underline-offset-2 decoration-gray-500 hover:text-gray-200 transition-colors">Privacy Policy</Link>
            <Link href="#" className="underline underline-offset-2 decoration-gray-500 hover:text-gray-200 transition-colors">Cookies Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
