import Image from 'next/image';
import { Zap } from 'lucide-react';

export default function CapacityDevelopment() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 lg:px-[64px] py-[40px] lg:pb-[100px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] lg:gap-[120px] items-center">
        
        {/* Left side: Content */}
        <div className="flex flex-col order-2 lg:order-1">
          <h2 className="text-[32px] md:text-[40px] font-nunito font-semibold text-mainText leading-[150%] tracking-[0.03em] mb-6">
            Capacity Development
          </h2>
          
          <p className="text-[16px] md:text-[18px] font-nunito-sans font-semibold text-subdued leading-[150%] mb-8">
            At Tobams Group, we empower individuals and organizations through tailored training programs, expert-led workshops, and personalized mentorship. We are committed to your success and growth. We are dedicated to providing a comprehensive suite of benefits designed to foster your development and success:
          </p>

          <ul className="space-y-[14px]">
            {[
              'Tailored Training Programs', 'Expert-Led Workshops', 'Personalized Mentorship',
              'Technical Skills Enhancement', 'Collaborative Learning Environment', 'Ongoing Support and Resources'
            ].map(item => (
              <li key={item} className="flex items-center gap-3 w-full h-[27px]">
                <Zap width={12.44} height={16} strokeWidth={1.52} className="text-primary shrink-0" fill="currentColor" />
                <span className="text-[18px] font-nunito-sans font-semibold text-subdued leading-[150%] break-words">{item}</span>
              </li>
           ))}
          </ul>
        </div>

        {/* Right side: Image */}
        <div className="relative w-full max-w-[602px] h-[346px] mx-auto order-1 lg:order-2 shrink-0">
           <Image
             src="/Capacity-development.jpg"
             alt="Capacity development session"
             fill
             className="object-cover rounded-tl-[56px] rounded-tr-[24px] rounded-br-[23px] rounded-bl-[12px]"
           />
        </div>

      </div>
    </section>
  );
}
