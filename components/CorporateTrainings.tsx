import Image from 'next/image';
import { Zap } from 'lucide-react';

export default function CorporateTrainings() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 lg:px-[64px] py-[40px] lg:pt-[60px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] lg:gap-[120px] items-center">
        
        {/* Left side: Content */}
        <div className="flex flex-col order-2 lg:order-1">
          <h2 className="text-[32px] md:text-[40px] font-nunito font-semibold text-mainText leading-[150%] tracking-[0.03em] mb-6">
            Corporate Trainings
          </h2>
          
          <p className="text-[16px] md:text-[18px] font-nunito-sans font-semibold text-subdued leading-[150%] mb-8">
            Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company&apos;s goals and values.
          </p>

          <ul className="space-y-[14px]">
            {[
              'Leadership Training', 'Strategic Planning and Implementation', 
              'Project Management', 'Sustainability Training', 'Customised Training'
            ].map(item => (
              <li key={item} className="flex items-center gap-3 w-full lg:max-w-[333.4px] h-[27px]">
                <Zap width={12.44} height={16} strokeWidth={1.52} className="text-primary shrink-0" fill="currentColor" />
                <span className="text-[18px] font-nunito-sans font-semibold text-subdued leading-[150%]">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right side: Image Container */}
        <div className="relative w-full max-w-[602px] h-[346px] mx-auto order-1 lg:order-2 shrink-0">
           <Image
             src="/CoporateTrainings.jpg"
             alt="Corporate training session"
             fill
             className="object-cover rounded-tl-[56px] rounded-tr-[24px] rounded-br-[23px] rounded-bl-[12px]"
           />
        </div>

      </div>
    </section>
  );
}
