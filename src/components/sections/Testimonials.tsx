export default function Testimonials() {
  return (
    <section className='bg-black text-white'>
      <div className='max-w-[1200px] mx-auto px-6 lg:px-10 py-12 lg:py-20'>
        <div className='text-center mb-8'>
          <h2 className='text-[22px] lg:text-[28px] font-bold'>
            Trusted Voices
          </h2>
          <p className='mt-2 text-white/40 text-[10px] lg:text-[11px]'>
            Here's what people say about working with me — across projects,
            teams, and timelines.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
          <div className='lg:row-span-2 bg-[#0f1f21] border border-white/[0.08] p-6 flex flex-col justify-between min-h-[380px]'>
            <div>
              <div className='text-[20px] font-bold'>8X</div>
              <h3 className='mt-1 text-[14px] font-bold max-w-[160px]'>
                More users converted after redesign
              </h3>
              <div className='mt-3 text-[#f5c518] text-[12px]'>★★★★★</div>
              <p className='mt-4 text-[10px] leading-[1.7] text-white/50'>
                Working with Edwin has been a fantastic experience. His
                attention to detail and commitment to quality are evident in
                every project. He consistently delivers results that exceed
                expectations.
              </p>
            </div>
            <div className='mt-8 flex justify-between items-end'>
              <div>
                <p className='text-[9px] font-semibold'>Pablo Stanley</p>
                <p className='text-[8px] text-white/40'>
                  Product Manager at Finovate
                </p>
              </div>
              <span className='text-[24px] text-white/10'>”</span>
            </div>
          </div>

          <div className='lg:col-span-2 grid gap-4'>
            <div className='bg-[#080808] border border-white/[0.08] p-6'>
              <div className='text-[20px] font-bold'>3X</div>
              <p className='mt-1 text-[11px] font-semibold'>
                Improved user engagement and sign-ups
              </p>
              <div className='mt-3 text-[#f5c518] text-[11px]'>★★★★★</div>
              <p className='mt-3 text-[10px] text-white/50'>
                Edwin's expertise in frontend development is remarkable. He
                brings creativity and innovation to the table.
              </p>
              <div className='mt-6 flex justify-between'>
                <p className='text-[9px] font-semibold'>Pablo Stanley</p>
                <span className='text-white/10'>”</span>
              </div>
            </div>
            <div className='grid sm:grid-cols-2 gap-4'>
              <div className='bg-[#080808] border border-white/[0.08] p-5'>
                <div className='text-[#f5c518] text-[10px]'>★★★★★</div>
                <p className='mt-3 text-[10px] text-white/50'>
                  Edwin's work ethic and dedication are truly inspiring.
                </p>
                <p className='mt-4 text-[8px]'>Pablo Stanley</p>
              </div>
              <div className='bg-[#080808] border border-white/[0.08] p-5'>
                <div className='text-[#f5c518] text-[10px]'>★★★★★</div>
                <p className='mt-3 text-[10px] text-white/50'>
                  Edwin has a unique ability to transform complex ideas into
                  user-friendly designs.
                </p>
                <p className='mt-4 text-[8px]'>Pablo Stanley</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
