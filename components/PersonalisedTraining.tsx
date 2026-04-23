import Image from 'next/image';
import { Zap } from 'lucide-react';

export default function PersonalisedTraining() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 lg:px-[64px] py-[40px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] lg:gap-[120px] items-center">
        
        {/* Left side: Image */}
        <div className="relative w-full max-w-[602px] h-[346px] mx-auto shrink-0">
           <Image
             src="/Personalized-Individual-Training.jpg"
             alt="Person taking notes"
             fill
             className="object-cover rounded-tl-[56px] rounded-tr-[24px] rounded-br-[23px] rounded-bl-[12px]"
           />
        </div>

        {/* Right side: Content */}
        <div className="flex flex-col">
          <h2 className="text-[32px] md:text-[40px] font-nunito font-semibold text-mainText leading-[150%] tracking-[0.03em] mb-6">
            Personalised Individual Training
          </h2>
          
          <p className="text-[16px] md:text-[18px] font-nunito-sans font-semibold text-subdued leading-[150%] mb-8">
            Begin a journey of lifelong learning and professional development with Tobams Group&apos;s diverse range of training programs for individuals. From technical skills mastery to soft skills enhancement, our courses cover a wide spectrum of topics to meet the evolving needs of today&apos;s professionals.
          </p>

          <ul className="space-y-[14px]">
            {[
              'Leadership Development', 'Soft Skills Development', 'Industry Specific Knowledge',
              'Technical Skills Enhancement', 'Time Management and Productivity', 'Career Development'
            ].map(item => (
              <li key={item} className="flex items-center gap-3 w-full h-[27px]">
                <Zap width={12.44} height={16} strokeWidth={1.52} className="text-primary shrink-0" fill="currentColor" />
                <span className="text-[18px] font-nunito-sans font-semibold text-subdued leading-[150%] break-words">{item}</span>
              </li>
           ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
