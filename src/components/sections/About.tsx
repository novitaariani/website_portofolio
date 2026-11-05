import Image from 'next/image';

export default function About() {
  return (
    <section
      id='about'
      className='bg-black text-white relative overflow-hidden'
    >
      {/* MARQUEE CYAN */}
      <div className='bg-[#1B9AAA] py-2.5 overflow-hidden whitespace-nowrap'>
        <div className='flex animate-marquee gap-8 text-black font-bold text-[14px] tracking-wide'>
          <span className='flex items-center gap-3'>
            Pixel Perfect <span>✳</span>
          </span>
          <span className='flex items-center gap-3'>
            React Expert <span>✳</span>
          </span>
          <span className='flex items-center gap-3'>
            App Development <span>✳</span>
          </span>
          <span className='flex items-center gap-3'>
            Website Development <span>✳</span>
          </span>
          <span className='flex items-center gap-3'>
            Pixel Perfect <span>✳</span>
          </span>
          <span className='flex items-center gap-3'>
            React Expert <span>✳</span>
          </span>
        </div>
      </div>

      <div className='max-w-[1200px] mx-auto px-6 lg:px-10 py-12 lg:py-20'>
        <div className='flex flex-col lg:flex-row justify-between gap-6'>
          <h2 className='text-[18px] sm:text-[20px] lg:text-[22px] font-semibold leading-[1.5] max-w-[580px]'>
            I turn ideas and designs into functional,
            <br />
            accessible, and performant websites
            <br />
            <span className='text-[#1B9AAA]'>
              using modern frontend technologies.
            </span>
          </h2>
          <div className='flex flex-col items-start lg:items-end gap-4'>
            <span className='text-white/50 text-[11px]'>About Me</span>
            <div className='flex gap-2'>
              <div className='w-[28px] h-[28px] rounded-full border border-white/20 flex items-center justify-center text-[11px]'>
                f
              </div>
              <div className='w-[28px] h-[28px] rounded-full border border-white/20 flex items-center justify-center text-[11px]'>
                ◎
              </div>
              <div className='w-[28px] h-[28px] rounded-full border border-white/20 flex items-center justify-center text-[11px]'>
                in
              </div>
              <div className='w-[28px] h-[28px] rounded-full border border-white/20 flex items-center justify-center text-[11px]'>
                ♪
              </div>
            </div>
          </div>
        </div>

        <div className='h-[1px] bg-white/10 my-8'></div>

        <div className='grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8 lg:gap-12'>
          {/* FIX IMAGE DISINI */}
          <div className='w-full h-[380px] lg:h-[380px] bg-[#1a1a1a] rounded-[8px] overflow-hidden'>
            <Image
              src='/edwin plus laptop.png'
              alt='Edwin with laptop'
              width={340}
              height={380}
              className='w-full h-full object-cover'
            />
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-x-12 lg:gap-y-14 pt-2'>
            <div>
              <div className='text-[#1B9AAA] text-[14px] mb-3'>&lt;/&gt;</div>
              <h4 className='text-[13px] font-semibold mb-2'>
                Frontend Development
              </h4>
              <p className='text-white/40 text-[11px] leading-[1.6]'>
                I build responsive, accessible, and scalable websites using
                modern frontend tools and best practices.
              </p>
            </div>
            <div>
              <div className='text-[#1B9AAA] text-[14px] mb-3'>⊕</div>
              <h4 className='text-[13px] font-semibold mb-2'>
                Web Performance
              </h4>
              <p className='text-white/40 text-[11px] leading-[1.6]'>
                I optimize websites for speed and efficiency to ensure smooth
                experiences across all devices.
              </p>
            </div>
            <div>
              <div className='text-[#1B9AAA] text-[14px] mb-3'>◈</div>
              <h4 className='text-[13px] font-semibold mb-2'>
                Component Based UI
              </h4>
              <p className='text-white/40 text-[11px] leading-[1.6]'>
                I specialize in crafting reusable UI components that are clean,
                maintainable, and aligned with design systems.
              </p>
            </div>
            <div>
              <div className='text-[#1B9AAA] text-[14px] mb-3'>▭</div>
              <h4 className='text-[13px] font-semibold mb-2'>
                Responsive Design
              </h4>
              <p className='text-white/40 text-[11px] leading-[1.6]'>
                I ensure that every layout adapts beautifully to different
                screen sizes — from mobile to desktop.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee { 0% { transform: translateX(0) } 100% { transform: translateX(-50%) } }
        .animate-marquee { animation: marquee 20s linear infinite; }
      `}</style>
    </section>
  );
}
