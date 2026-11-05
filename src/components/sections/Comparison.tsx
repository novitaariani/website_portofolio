export default function Comparison() {
  const rows = [
    'React Expert',
    'Pixel Perfect',
    'TypeScript Proficiency',
    'Clean, Maintainable Code',
    'Performance Optimization',
    'Responsive Website',
    'UI Design Proficiency (Figma)',
  ];

  return (
    <section className='relative bg-black text-white overflow-hidden'>
      {/* Background gradient teal bottom left */}
      <div className='absolute bottom-0 left-0 w-[40%] h-[80%] opacity-30 pointer-events-none'>
        <div
          className='w-full h-full'
          style={{
            backgroundColor: '#0a2e30',
            backgroundImage: `linear-gradient(rgba(20,184,166,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(20,184,166,0.2) 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
          }}
        />
        <div className='absolute inset-0 bg-gradient-to-tr from-[#0d4a4d] via-transparent to-transparent' />
      </div>

      <div className='relative max-w-[900px] mx-auto px-4 lg:px-10 py-12 lg:py-20'>
        {/* Header */}
        <div className='text-center mb-8'>
          <h2 className='text-[20px] lg:text-[28px] font-bold tracking-tight'>
            Not Your Typical Frontend Developer
          </h2>
          <p className='mt-2 text-white/40 text-[10px] lg:text-[11px]'>
            I care about how it looks, how it works, and how it feels — all at
            once
          </p>
        </div>

        {/* Table - Responsive Wrapper */}
        <div className='border border-white/[0.08] bg-[#0a0a0a] overflow-hidden overflow-x-auto'>
          <div className='min-w-[500px]'>
            {/* Table Header */}
            <div className='grid grid-cols-3 text-[12px] font-bold border-b border-white/[0.08]'>
              <div className='px-4 lg:px-6 py-3 text-white'>Skill</div>
              <div className='px-4 lg:px-6 py-3 bg-[#134e54] text-white'>
                With Me
              </div>
              <div className='px-4 lg:px-6 py-3 bg-black text-white'>Other</div>
            </div>

            {/* Rows */}
            {rows.map((skill, i) => (
              <div
                key={skill}
                className='grid grid-cols-3 text-[11px] border-b border-white/[0.06] last:border-0'
              >
                <div className='px-4 lg:px-6 py-3 text-white/80 flex items-center'>
                  {skill}
                </div>
                <div className='px-4 lg:px-6 py-3 bg-[#164f56] flex items-center justify-start'>
                  <div className='w-[16px] h-[16px] rounded-full bg-white flex items-center justify-center text-[10px] text-[#164f56] font-bold'>
                    ✓
                  </div>
                </div>
                <div className='px-4 lg:px-6 py-3 bg-black flex items-center'>
                  <div className='w-[16px] h-[16px] rounded-full bg-[#2a2a2a] flex items-center justify-center text-[9px] text-white/50'>
                    ✕
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile hint */}
        <p className='lg:hidden text-center text-white/30 text-[9px] mt-3'>
          ← swipe table →
        </p>
      </div>
    </section>
  );
}
