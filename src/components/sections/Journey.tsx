'use client';
import { useRef } from 'react';
import Image from 'next/image';

const experiences = [
  {
    company: 'airbnb',
    logo: '/airbnb.png',
    role: 'Frontend Developer',
    period: '2025- Present',
  },
  {
    company: 'dribbble',
    logo: '/dribbble.png',
    role: 'Frontend Developer',
    period: '2025- Present',
  },
  {
    company: 'zoom',
    logo: '/zoom.png',
    role: 'Frontend Developer',
    period: '2025- Present',
  },
  {
    company: 'airbnb',
    logo: '/airbnb.png',
    role: 'Frontend Developer',
    period: '2025- Present',
  },
];

export default function Journey() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = 340;
      scrollRef.current.scrollBy({
        left: dir === 'left' ? -amount : amount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id='experience'
      className='bg-black text-white border-t border-white/[0.05]'
    >
      <div className='max-w-[1200px] mx-auto px-6 lg:px-10 py-12 lg:py-20'>
        {/* Header */}
        <div className='mb-8'>
          <h2 className='text-[20px] lg:text-[28px] font-bold'>
            My Journey in Tech
          </h2>
          <p className='mt-2 text-white/40 text-[10px] lg:text-[11px] max-w-[500px]'>
            From small gigs to real-world challenges — each experience helped me
            grow as a builder and problem-solver.
          </p>
        </div>

        {/* Horizontal Scroll Cards */}
        <div
          ref={scrollRef}
          className='flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory pb-4'
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {experiences.map((exp, i) => (
            <div
              key={i}
              className='min-w-[300px] lg:min-w-[360px] max-w-[360px] bg-[#080808] border border-white/[0.08] p-5 lg:p-6 snap-start flex flex-col justify-between'
            >
              <div>
                <div className='flex justify-between items-start'>
                  <div className='border-l-2 border-[#1B9AAA]/60 pl-3'>
                    <h3 className='text-[11px] font-semibold'>{exp.role}</h3>
                    <p className='text-[10px] text-white/50 mt-0.5'>
                      {exp.period}
                    </p>
                  </div>
                  <div className='w-[18px] h-[18px] border border-white/10 rounded-[3px] flex items-center justify-center'>
                    <span className='text-[10px] text-white/40'>◳</span>
                  </div>
                </div>

                <p className='mt-5 text-[10px] leading-[1.6] text-white/40 line-clamp-4'>
                  Built responsive web interfaces using modern frameworks like
                  React.js, ensuring seamless integration with backend systems.
                  Optimized performance, implemented accessible designs, and
                  delivered clean, reusable code to enhance user experience and
                  scalability.
                </p>
              </div>

              <div className='mt-6 h-[22px] flex items-center'>
                <Image
                  src={exp.logo}
                  alt={exp.company}
                  width={80}
                  height={22}
                  className='h-[20px] w-auto object-contain opacity-90'
                />
              </div>
            </div>
          ))}
        </div>

        {/* Scrollbar fake + Buttons */}
        <div className='mt-2 flex flex-col gap-4'>
          <div className='w-full h-[2px] bg-white/10'>
            <div className='w-[35%] h-full bg-white'></div>
          </div>

          <div className='flex gap-2'>
            <button
              onClick={() => scroll('left')}
              className='px-4 py-1.5 border border-white/10 text-[10px] text-white/50 hover:text-white hover:border-white/30 transition'
            >
              Prev
            </button>
            <button
              onClick={() => scroll('right')}
              className='px-4 py-1.5 border border-white/10 text-[10px] text-white/80 hover:text-white hover:border-white/30 transition'
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
