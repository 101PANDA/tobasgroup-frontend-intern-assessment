'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Aisha Yusuf',
    title: 'Founder, CraftHub NG',
    content: 'Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!',
    image: '/Testionial-1.png'
  },
  {
    id: 2,
    name: 'John Davies',
    title: 'Marketing Manager, E-Commerce Emporium',
    content: 'Tobams Group\'s Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!',
    image: '/Testionial-2.png'
  },
  {
    id: 3,
    name: 'Chinonso Nwankwo',
    title: 'HR Director, FutureTech Solutions',
    content: 'Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.',
    image: '/Testionial-3.png'
  },
  {
    id: 4,
    name: 'Sarah Jenkins',
    title: 'Operations Head',
    content: 'The tailored corporate training completely transformed our internal processes. The team feels more cohesive and our productivity metrics have never been higher.',
    image: '/Testionial-1.png' 
  },
  {
    id: 5,
    name: 'Michael Okon',
    title: 'Tech Lead',
    content: 'A truly magnificent group of professionals. The skill gap in our engineering team was quickly bridged with the personalized learning approach provided by Tobams Academy.',
    image: '/Testionial-2.png' 
  },
  {
    id: 6,
    name: 'Elena Rodriguez',
    title: 'Product Manager',
    content: 'I attended the Transformation Hub webinar series and it catalyzed my transition into senior leadership. Absolutely invaluable insights and actionable advice.',
    image: '/Testionial-3.png' 
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsToShow(1);
      else if (window.innerWidth < 1024) setItemsToShow(2);
      else setItemsToShow(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 > testimonials.length - itemsToShow ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? testimonials.length - itemsToShow : prev - 1));
  };

  return (
    <section className="w-full max-w-[1440px] mx-auto py-12 lg:py-20 px-4 lg:px-[64px]">
      <div className="w-full overflow-hidden">
        
        <h2 className="text-[32px] md:text-[40px] font-nunito font-semibold text-mainText text-center leading-[150%] tracking-[0.03em] mb-12">
          Testimonials
        </h2>

        <div className="relative mb-10 overflow-hidden py-4 px-2">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
          >
            {testimonials.map((t) => (
              <div key={t.id} className="flex-shrink-0 px-4 flex" style={{ width: `${100 / itemsToShow}%` }}>
                <div className="bg-white rounded-[24px] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-gray-50 border-l-[3px] border-l-[#EF4353] flex flex-col w-full h-full min-h-[260px]">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden flex-shrink-0">
                      <Image 
                        src={t.image}
                        alt={t.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-nunito-sans font-semibold text-mainText text-[16px]">{t.name}</h4>
                      <p className="text-[14px] font-nunito-sans font-medium text-subdued">{t.title}</p>
                    </div>
                  </div>
                  <p className="text-mainText text-[16px] font-nunito-sans leading-[160%] flex-grow">
                    {t.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end items-center gap-4 pr-4">
          <button 
            onClick={prevSlide}
            className="w-[40px] h-[40px] rounded-xl bg-[#FDECEE] flex items-center justify-center text-[#EF4353] hover:bg-[#EF4353] hover:text-white transition-colors cursor-pointer"
          >
            <ChevronLeft size={20} className="ml-[-2px]" strokeWidth={2.5}/>
          </button>
          <button 
            onClick={nextSlide}
            className="w-[40px] h-[40px] rounded-xl bg-[#FDECEE] flex items-center justify-center text-[#EF4353] hover:bg-[#EF4353] hover:text-white transition-colors cursor-pointer"
          >
            <ChevronRight size={20} className="mr-[-2px]" strokeWidth={2.5}/>
          </button>
        </div>

      </div>
    </section>
  );
}
