import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export default function TransformationHub() {
  return (
    <section className="w-full bg-white flex justify-center py-16 lg:py-24">
      <div className="w-full max-w-[1440px] px-4 lg:px-[64px]">
        
        {/* Soft pink wrapper replicating screenshot exactly */}
        <div className="bg-[#FDF2F4] rounded-[24px] p-6 lg:p-12 w-full">
           
           {/* Top Content Row */}
           <div className="flex flex-col mb-8 lg:mb-10 w-full max-w-[1100px]">
              <span className="text-[#1671D9] text-[16px] font-nunito-sans italic font-medium mb-3 block">Learning With Our CEO:</span>
              <h2 className="text-[32px] md:text-[40px] text-primary font-nunito italic font-semibold leading-[120%] lg:leading-[150%] mb-4 lg:mb-6">
                Transformation Hub With Jite Newton
              </h2>
              <p className="text-mainText text-[16px] md:text-[18px] font-nunito-sans font-medium leading-[150%] opacity-90 max-w-[1000px]">
                Transformation Hub with Jite Newton is a flagship webinar series curated by the CEO, Dr. Jite Newton. Designed to elevate career trajectories and leadership capabilities, this exclusive event offers invaluable insights and strategies for personal and professional growth. Whether you&apos;re seeking to advance your career or enhance your leadership skills, the Transformation Hub provides a transformative learning experience to unlock your full potential and drive success in your endeavours.
              </p>
           </div>

           {/* Bottom Grid Content */}
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-12 items-start">
             
             {/* Large Image container */}
             <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[460px] rounded-[16px] overflow-hidden shadow-sm">
                <Image
                  src="/Transformation-Hub-With-Jite-Newton.jpg"
                  alt="Jite Newton speaking"
                  fill
                  className="object-cover"
                />
             </div>

             {/* Pill content container */}
             <div className="flex flex-col justify-center gap-8 h-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  {[
                    'Strategic Career Guidance', 'Leadership Development', 
                    'CV Development', 'Sustainability Leadership', 
                    'Communication Skills', 'Business Model'
                  ].map(item => (
                    <div key={item} className="w-full bg-white transition-colors shadow-[0_2px_12px_rgba(0,0,0,0.02)] rounded-[12px] px-[20px] py-[16px] flex items-center gap-3 border border-gray-50">
                      <span className="text-primary">
                        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.1558 1L1 11.2857H8.62568L8.13065 19L17 8.33333H9.76131L10.1558 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <span className="font-nunito-sans font-medium text-mainText text-[15px]">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="w-full flex justify-start mt-2">
                  <button className="flex items-center gap-2 px-[24px] py-[14px] bg-primary hover:bg-[#571244]/90 text-white rounded-xl font-nunito-sans font-semibold text-[16px] transition-colors">
                     Learn More
                     <ArrowUpRight size={18} strokeWidth={2.5}/>
                  </button>
                </div>
             </div>

           </div>
        </div>

      </div>
    </section>
  );
}
