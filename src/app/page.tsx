import Navbar from '@/components/layout/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className='min-h-screen bg-black text-white relative overflow-hidden'>
        {/* Background Grid Teal Left - Persis Figma */}
        <div className='absolute inset-0'>
          <div
            className='absolute top-0 left-0 w-[62%] h-full bg-[#022A2E] opacity-100'
            style={{
              backgroundImage: `linear-gradient(to right, rgba(0,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,255,255,0.08) 1px, transparent 1px)`,
              backgroundSize: '26px 26px',
            }}
          />
          <div className='absolute top-0 left-0 w-[62%] h-full bg-gradient-to-r from-transparent via-black/40 to-black' />
          <div className='absolute top-0 left-0 w-[62%] h-full bg-gradient-to-b from-transparent to-black/80' />
        </div>

        <section className='relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10 pt-[110px] lg:pt-[140px] pb-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10'>
          {/* LEFT */}
          <div className='max-w-[560px]'>
            <p className='text-white/70 text-[12px] mb-5 tracking-wide'>
              Hi. I'm Edwin Anderson
            </p>

            <h1 className='leading-[0.9] tracking-tighter'>
              <span className='flex items-baseline gap-1 text-[44px] sm:text-[62px] lg:text-[68px] font-black'>
                FRONT
                <span className='font-serif italic font-light text-[48px] sm:text-[68px] lg:text-[74px] -ml-1'>
                  END
                </span>
              </span>
              <span className='block text-[44px] sm:text-[62px] lg:text-[68px] font-black'>
                DEVELOPER
              </span>
            </h1>

            <p className='mt-6 text-white/40 text-[11px] sm:text-[12px] leading-[1.7] max-w-[440px]'>
              Passionate about frontend development, I focus on crafting digital
              products that are visually polished, performance-optimized, and
              deliver a consistent experience across all platforms.
            </p>

            <a
              href='#'
              className='mt-8 inline-flex items-center justify-center gap-2 bg-[#1B9AAA] hover:bg-[#178a99] transition w-[140px] h-[36px] text-[11px] font-semibold tracking-wide'
            >
              <span className='text-[14px]'>✉</span> Hire Me
            </a>
          </div>

          {/* RIGHT - ID CARD */}
          <div className='relative mx-auto lg:mx-0 lg:mr-10 mt-4 lg:mt-0'>
            {/* Lanyard */}
            <div className='absolute -top-[54px] left-1/2 -translate-x-1/2 z-20 flex flex-col items-center'>
              <div className='w-[38px] h-[56px] bg-[#1e1e1e] rounded-[4px] flex justify-center pt-2'>
                <div className='w-[14px] h-[14px] bg-[#0f0f0f] rounded-full border border-black shadow-inner flex items-center justify-center'>
                  <div className='w-[5px] h-[5px] bg-black rounded-full'></div>
                </div>
              </div>
              <div className='w-[34px] h-[28px] bg-[#111] -mt-1 rounded-b-[6px] flex flex-col items-center'>
                <div className='w-[24px] h-[14px] bg-black mt-[2px] rounded-[3px]'></div>
                <div className='w-[18px] h-[6px] bg-[#222] mt-[10px] rounded-[2px]'></div>
              </div>
            </div>

            {/* Card */}
            <div className='relative w-[280px] sm:w-[300px] h-[400px] sm:h-[420px] bg-[#f0f0f0] rounded-[12px] overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.7)]'>
              {/* Blue Brush Stroke */}
              <div
                className='absolute top-[58%] left-[12%] w-[78%] h-[42px] bg-[#1B9AAA] rotate-[-12deg] rounded-[4px]'
                style={{
                  clipPath:
                    'polygon(0% 30%, 15% 10%, 85% 0%, 100% 30%, 90% 85%, 20% 100%, 0% 70%)',
                }}
              />
              <Image
                src='/edwin anderson.png'
                alt='Edwin'
                width={300}
                height={420}
                className='absolute bottom-0 left-0 w-full h-[92%] object-cover object-top'
                priority
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
