import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto h-auto min-h-[511px] lg:h-[511px] px-4 lg:px-[64px] py-[60px] lg:py-[112px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/representation-user-experience-interface-design.png"
          alt="Professional working on laptop"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-overlay mix-blend-multiply"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1312px] mx-auto flex flex-col items-center gap-[40px] text-center text-white">
        
        {/* 'What We Do' Label */}
        <div className="w-[193px] border border-white/30 rounded-[100px] bg-white/10 backdrop-blur-sm shadow-sm py-3 px-6">
          <span className="font-nunito-sans font-semibold text-[14px] leading-[150%] uppercase tracking-wide">
            What We Do
          </span>
        </div>

        {/* Text Block */}
        <div className="flex flex-col items-center gap-4 w-full">
           <h1 className="text-4xl md:text-[56px] font-nunito font-bold leading-[130%]">
             Training and Development
           </h1>
           
           <p className="text-base md:text-[18px] font-nunito-sans font-semibold text-gray-200 max-w-[800px] leading-[150%]">
             Our comprehensive range of programs and resources is designed to enhance skills, broaden knowledge, and propel careers forward in today&apos;s ever-evolving landscape.
           </p>
        </div>

        {/* CTA Button */}
        <button className="w-full max-w-[214px] h-[48px] bg-primary hover:bg-purpleSelection text-white rounded-md font-nunito-sans font-semibold text-[16px] transition-colors leading-[150%]">
          Book a Consultation
        </button>
        
      </div>
    </section>
  );
}
