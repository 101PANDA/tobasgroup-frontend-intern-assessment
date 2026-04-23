import Image from 'next/image';

export default function ManagementProgram() {
  return (
    <section className="w-full flex justify-center py-12 lg:py-[100px] px-4 lg:px-[64px]">
      {/* Container: Wraps with a dark background matching exact screenshot layout styling */}
      <div className="w-full max-w-[1440px] bg-[#1A0512] rounded-[24px] overflow-hidden p-6 lg:p-[64px] flex flex-col lg:flex-row items-center gap-[40px] lg:gap-16">
        
        {/* On Mobile: Title goes FIRST */}
        <h2 className="text-[32px] md:text-[40px] font-nunito font-semibold leading-[120%] tracking-[0.03em] lg:hidden w-full text-white">
          Management Development Program
        </h2>

        {/* IMAGE container */}
        <div className="w-full lg:w-1/2 relative min-h-[300px] h-[300px] lg:min-h-[500px] lg:h-auto rounded-[16px] overflow-hidden shrink-0 shadow-md">
           <Image
             src="/Management-Development-Program.jpg"
             alt="Team working together"
             fill
             className="object-cover"
           />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-[24px] lg:gap-[32px]">
          {/* On Desktop: Title goes HERE */}
          <h2 className="text-[32px] md:text-[40px] font-nunito font-semibold text-white leading-[150%] tracking-[0.03em] hidden lg:block">
            Management Development<br/>Program
          </h2>
          
          <div className="text-white lg:text-[#E0E0E0] text-[14px] md:text-[16px] font-nunito-sans leading-[160%] space-y-4 max-w-[620px]">
            <p className="opacity-90">
              Tobams Group offers a comprehensive Management Development Program designed to equip corporate organisations with the high - performing leaders they need to thrive.
            </p>
            <p className="opacity-90">
              Our program includes workshops, seminars, coaching sessions, online courses, and experiential learning opportunities designed to improve leadership, strategic thinking, communication, and other essential managerial competencies for corporate organisations.
            </p>
          </div>

          <div className="space-y-[16px] max-w-[620px]">
            {['Enhanced Leadership Skills', 'Improved Employee Engagement', 'Stronger Organisational Culture', 'Sustainable Growth'].map((skill, index) => (
              <div 
                key={index} 
                className="bg-[#8F6182] bg-opacity-70 px-[24px] py-[14px] flex items-center gap-[16px] rounded-lg border border-transparent shadow-sm"
              >
                {/* SVG Zap Icon styled white inside pill  */}
                <span className="text-white shrink-0">
                  <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.1558 1L1 11.2857H8.62568L8.13065 19L17 8.33333H9.76131L10.1558 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="currentColor"/>
                  </svg>
                </span>
                <span className="text-white font-nunito-sans text-[16px] opacity-90">{skill}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
