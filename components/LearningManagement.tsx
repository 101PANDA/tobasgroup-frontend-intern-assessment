import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export default function LearningManagement() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-0 lg:px-[64px] py-[40px]">
      <div className="w-full h-auto min-h-[664px] bg-[#5712441A] px-4 lg:px-[64px] py-[48px] rounded-3xl lg:rounded-none">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px] h-full items-center">
          
          {/* Left side: Circular Image Container */}
          <div className="relative w-full max-w-[500px] mx-auto aspect-square">
             <div className="absolute inset-0 rounded-full overflow-hidden shadow-sm">
                <Image
                  src="/LMS.png"
                  alt="Learning Management System Interface"
                  fill
                  className="object-cover"
                />
             </div>
          </div>

          {/* Right side: Content */}
          <div className="flex flex-col h-full justify-center">
            <h2 className="text-[32px] md:text-[40px] font-nunito font-semibold text-primary leading-[150%] tracking-[0.03em] mb-6">
              Learning Management System
            </h2>
            
            <p className="text-mainText text-[16px] md:text-[18px] font-nunito-sans font-semibold leading-[150%] mb-6">
              TG Academy is a hub of knowledge and skill-building resources designed to empower tech talents on their learning journey. From technical courses covering the latest programming languages and development frameworks to soft skills training in leadership, effective communication and project management, TG Academy offers a wide range of courses to cater to diverse learning needs. With accessible and interactive learning materials, individuals can enhance their skills and stay ahead in today&apos;s competitive tech landscape.
            </p>

            <h3 className="text-[18px] font-nunito-sans font-bold text-primary mb-4 leading-[150%]">
              Some of our courses include:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-10">
              <ul className="space-y-3">
                {['Business Analysis', 'Effective Communication', 'Career Development'].map(course => (
                  <li key={course} className="flex items-center gap-3 text-mainText text-[18px] font-nunito-sans font-semibold leading-[150%]">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                    {course}
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {['Design Thinking', 'Entrepreneurship', 'Business Model'].map(course => (
                  <li key={course} className="flex items-center gap-3 text-mainText text-[18px] font-nunito-sans font-semibold leading-[150%]">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                    {course}
                  </li>
                ))}
              </ul>
            </div>

            <button className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-purpleSelection text-white px-[24px] py-[12px] rounded-md font-nunito-sans font-semibold text-[16px] transition-colors w-fit">
              Learn More
              <ArrowUpRight size={18} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
