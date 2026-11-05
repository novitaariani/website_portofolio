import Navbar from '@/components/layout/Navbar';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Comparison from '@/components/sections/Comparison';
import Portfolio from '@/components/sections/Portfolio';
import Journey from '@/components/sections/Journey';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className='min-h-screen bg-black text-white relative overflow-hidden'>
        <div className='absolute inset-0'>
          <div
            className='absolute top-0 left-0 w-full lg:w-[62%] h-full opacity-40'
            style={{
              backgroundColor: '#0a2e30',
              backgroundImage: `linear-gradient(rgba(20,184,166,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(20,184,166,0.15) 1px, transparent 1px)`,
              backgroundSize: '26px 26px',
            }}
          />
          <div className='absolute top-0 left-0 w-full lg:w-[62%] h-full bg-gradient-to-r from-transparent to-black' />
        </div>
        <section className='relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10 pt-[100px] lg:pt-[140px] pb-12 flex flex-col lg:flex-row items-center justify-between gap-10'>
          <div className='order-2 lg:order-1 max-w-[560px] w-full'>
            <p className='text-white/70 text-[12px] mb-5'>
              Hi. I'm Edwin Anderson
            </p>
            <h1 className='font-serif font-bold leading-[0.9] text-[42px] sm:text-[56px] lg:text-[68px]'>
              FRONT<span className='italic font-light'>END</span>
              <br />
              DEVELOPER
            </h1>
            <p className='mt-6 text-white/40 text-[12px] max-w-[440px]'>
              Passionate about frontend development, I focus on crafting digital
              products that are visually polished.
            </p>
            <a
              href='#contact'
              className='mt-8 inline-flex bg-[#1B9AAA] px-8 py-[10px] text-[11px] font-semibold'
            >
              ✉ Hire Me
            </a>
          </div>
          <div className='order-1 lg:order-2 relative lg:mr-10'>
            <div className='relative w-[280px] lg:w-[320px] h-[380px] bg-white rounded-[12px] overflow-hidden'>
              <Image
                src='/edwin anderson.png'
                alt='Edwin'
                width={320}
                height={420}
                className='absolute bottom-0 w-full h-[92%] object-cover object-top'
                priority
              />
            </div>
          </div>
        </section>
      </main>
      <About />
      <Skills />
      <Comparison />
      <Portfolio />
      <Journey />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
