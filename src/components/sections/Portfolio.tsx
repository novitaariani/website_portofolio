import Image from 'next/image';

const projects = [
  { title: 'Portofolio 1', year: '2025', file: '/portofolio 1.png' },
  { title: 'Portofolio 2', year: '2025', file: '/portofolio 2.png' },
  { title: 'Portofolio 3', year: '2025', file: '/portofolio 3.png' },
];

export default function Portfolio() {
  return (
    <section id='projects' className='bg-black text-white'>
      <div className='max-w-[1200px] mx-auto px-6 lg:px-10 py-12 lg:py-20'>
        {/* Header */}
        <div className='text-center mb-8 lg:mb-10'>
          <h2 className='text-[20px] lg:text-[28px] font-bold'>
            Bridging Design and Development
          </h2>
          <p className='mt-2 text-white/40 text-[10px] lg:text-[11px] max-w-[500px] mx-auto'>
            These are real projects where I implemented frontend interfaces with
            precision and attention to detail.
          </p>
        </div>

        {/* Grid - Responsive */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-5'>
          {projects.map((project) => (
            <div key={project.title} className='group'>
              {/* Image Card */}
              <div className='relative w-full aspect-[4/3] bg-[#111] rounded-[8px] overflow-hidden border border-white/[0.06] group-hover:border-white/20 transition'>
                <Image
                  src={project.file}
                  alt={project.title}
                  width={400}
                  height={300}
                  className='w-full h-full object-cover object-top group-hover:scale-[1.02] transition duration-300'
                />
              </div>
              {/* Info */}
              <div className='mt-3'>
                <h3 className='text-[12px] font-medium text-white'>
                  {project.title}
                </h3>
                <p className='mt-1 text-[10px] text-white/40'>{project.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
