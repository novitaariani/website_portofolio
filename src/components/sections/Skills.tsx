import Image from 'next/image';

const skills = [
  { name: 'HTML', file: '/html.png', percent: '100%' },
  { name: 'CSS', file: '/css.png', percent: '90%' },
  { name: 'Javascript', file: '/javascript.png', percent: '90%' },
  { name: 'Typescript', file: '/typescript.png', percent: '80%' },
  { name: 'Sequalize', file: '/sequalize.png', percent: '80%' },
  { name: 'Mongo DB', file: '/mongo DB.png', percent: '75%' },
];

export default function Skills() {
  return (
    <section id='skills' className='bg-black text-white'>
      <div className='max-w-[1200px] mx-auto px-6 lg:px-10 py-12 lg:py-20'>
        <div className='grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-20 items-start'>
          {/* LEFT */}
          <div>
            <h2 className='text-[24px] lg:text-[26px] font-bold leading-[1.2]'>
              Tools I Use to
              <br />
              Build
            </h2>
            <p className='mt-3 text-white/40 text-[11px] leading-[1.6] max-w-[220px]'>
              From code to design — here's the tech that helps me turn ideas
              into real products.
            </p>
            <a
              href='#contact'
              className='mt-16 lg:mt-[120px] inline-flex items-center justify-center gap-2 bg-[#1B9AAA] hover:bg-[#178a99] transition w-full sm:w-[220px] h-[36px] text-[11px] font-semibold'
            >
              ✉ Send Message
            </a>
          </div>

          {/* RIGHT */}
          <div className='relative pl-6 lg:pl-8 border-l-[2px] border-white'>
            <div className='flex flex-col'>
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className='flex items-center justify-between py-[16px] border-b border-white/[0.08] last:border-0'
                >
                  <div className='flex items-center gap-3'>
                    <Image
                      src={skill.file}
                      alt={skill.name}
                      width={20}
                      height={20}
                      className='w-[20px] h-[20px] object-contain'
                    />
                    <span className='text-[12px] text-white/90'>
                      {skill.name}
                    </span>
                  </div>
                  <span className='text-[12px] font-bold'>{skill.percent}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
