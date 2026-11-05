'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';

const faqs = [
  {
    q: 'Do you work on freelance or remote projects?',
    a: 'Yes, I work on both freelance and remote projects. I enjoy collaborating with teams across different time zones.',
  },
  {
    q: 'What technologies do you work with?',
    a: 'I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.',
    active: true,
  },
  {
    q: 'Can you convert Figma or Sketch designs into code?',
    a: 'Absolutely! I specialize in converting Figma and Sketch designs into clean, responsive, and pixel-perfect code.',
  },
  {
    q: 'Do you collaborate with backend developers or teams?',
    a: 'Yes, I frequently collaborate with backend developers and cross-functional teams to deliver full-stack solutions.',
  },
  {
    q: 'Are you available full-time roles?',
    a: "Yes, I'm open to full-time opportunities that align with my skills and career goals.",
  },
];

export default function FAQ() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(1);

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === 'left' ? -350 : 350,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className='bg-black text-white border-t border-white/[0.05]'>
      <div className='max-w-[1200px] mx-auto px-6 lg:px-10 py-12 lg:py-20'>
        <div className='flex justify-between items-start mb-8'>
          <div>
            <h2 className='text-[20px] lg:text-[26px] font-bold'>
              Still Got Questions?
            </h2>
            <p className='mt-1.5 text-white/40 text-[9px] lg:text-[10px]'>
              I've listed answers to questions I often get as a frontend
              developer.
            </p>
          </div>
          <div className='flex gap-2'>
            <button
              onClick={() => scroll('left')}
              className='px-4 py-1 border border-white/10 text-[9px] text-white/40 hover:text-white transition'
            >
              Prev
            </button>
            <button
              onClick={() => scroll('right')}
              className='px-4 py-1 border border-white/10 text-[9px] text-white/80 hover:text-white transition'
            >
              Next
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className='flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory'
          style={{ scrollbarWidth: 'none' }}
        >
          {faqs.map((item, i) => {
            const isActive = i === active;
            return (
              <div
                key={i}
                onClick={() => setActive(i)}
                className={`min-w-[220px] max-w-[220px] lg:min-w-[240px] lg:max-w-[240px] h-[300px] border p-4 flex flex-col justify-between snap-start cursor-pointer transition-all
                  ${isActive ? 'bg-[#164e5c] border-[#1B9AAA]/30' : 'bg-[#080808] border-white/[0.06] hover:border-white/15'}`}
              >
                <div className='flex justify-between items-start'>
                  <div className='w-[18px] h-[18px]'>
                    {isActive ? (
                      <Image
                        src='/pablo.png'
                        alt='pablo'
                        width={36}
                        height={36}
                        className='w-[36px] h-[36px] rounded-full object-cover'
                      />
                    ) : (
                      <Image
                        src='/colom.png'
                        alt='chat'
                        width={18}
                        height={18}
                        className='w-[18px] h-[18px] opacity-50'
                      />
                    )}
                  </div>
                  <div className='w-[18px] h-[18px] opacity-30'>
                    <Image
                      src='/colom.png'
                      alt='chat'
                      width={18}
                      height={18}
                      className='w-[18px] h-[18px]'
                    />
                  </div>
                </div>

                <div>
                  <h3
                    className={`text-[13px] font-bold leading-tight ${isActive ? 'text-white' : 'text-white'}`}
                  >
                    {item.q}
                  </h3>
                  {isActive && (
                    <p className='mt-3 text-[9px] leading-[1.6] text-white/60'>
                      {item.a}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
