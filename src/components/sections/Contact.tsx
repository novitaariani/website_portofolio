'use client';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  return (
    <section id='contact' className='relative bg-black overflow-hidden'>
      {/* Background teal stripes */}
      <div className='absolute inset-0'>
        <div
          className='absolute inset-0 opacity-[0.25]'
          style={{
            backgroundImage: `repeating-linear-gradient(90deg, #1B9AAA 0px, #1B9AAA 1px, transparent 1px, transparent 42px)`,
          }}
        />
        <div className='absolute inset-0 bg-gradient-to-b from-black via-black/80 to-[#0a2e30]/60' />
      </div>

      <div className='relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10 py-12 lg:py-20'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start'>
          {/* LEFT FORM */}
          <div className='bg-[#0a0a0a] border border-white/[0.08] p-6 lg:p-7'>
            <h2 className='text-[26px] lg:text-[30px] font-bold leading-tight'>
              Let's <span className='text-[#1B9AAA]'>Build Something</span>{' '}
              <br /> Great
            </h2>
            <p className='mt-2 text-[9px] text-white/40'>
              Got an idea, a project, or just want to connect? I'm always open
              to new conversations.
            </p>

            <div className='mt-6 space-y-4'>
              <div>
                <label className='text-[9px] text-white'>Name</label>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder='Enter your name'
                  className='mt-1 w-full bg-black border border-white/10 px-3 py-2.5 text-[10px] text-white placeholder:text-white/30 outline-none focus:border-[#1B9AAA]'
                />
              </div>
              <div>
                <label className='text-[9px] text-white'>Email</label>
                <input
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder='Enter your email'
                  className='mt-1 w-full bg-black border border-white/10 px-3 py-2.5 text-[10px] text-white placeholder:text-white/30 outline-none focus:border-[#1B9AAA]'
                />
              </div>
              <div>
                <label className='text-[9px] text-white'>Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder='Enter your message'
                  rows={5}
                  className='mt-1 w-full bg-black border border-white/10 px-3 py-2.5 text-[10px] text-white placeholder:text-white/30 outline-none focus:border-[#1B9AAA] resize-none'
                />
              </div>

              <button className='w-full bg-white text-black text-[10px] font-bold py-3 flex items-center justify-center gap-2 hover:bg-white/90 transition'>
                ✉ Send Message
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className='relative flex flex-col justify-between min-h-[480px]'>
            <div className='space-y-8'>
              <div>
                <h4 className='text-[11px] font-bold text-white'>Address</h4>
                <p className='mt-1 text-[10px] text-white/60'>
                  Jakarta, Indonesia
                </p>
                <div className='mt-4 h-[1px] bg-white/10' />
              </div>
              <div>
                <h4 className='text-[11px] font-bold text-white'>Contact</h4>
                <p className='mt-1 text-[10px] text-white/60'>
                  (+62) 1234567890
                </p>
                <div className='mt-4 h-[1px] bg-white/10' />
              </div>
              <div>
                <h4 className='text-[11px] font-bold text-white'>
                  Social Media
                </h4>
                <div className='mt-3 flex gap-2'>
                  <a
                    href='#'
                    className='w-[26px] h-[26px] bg-white/10 rounded-full flex items-center justify-center text-[10px] text-white hover:bg-white/20'
                  >
                    f
                  </a>
                  <a
                    href='#'
                    className='w-[26px] h-[26px] bg-white/10 rounded-full flex items-center justify-center text-[10px] text-white hover:bg-white/20'
                  >
                    ◎
                  </a>
                  <a
                    href='#'
                    className='w-[26px] h-[26px] bg-white/10 rounded-full flex items-center justify-center text-[10px] text-white hover:bg-white/20'
                  >
                    in
                  </a>
                  <a
                    href='#'
                    className='w-[26px] h-[26px] bg-white/10 rounded-full flex items-center justify-center text-[10px] text-white hover:bg-white/20'
                  >
                    ♪
                  </a>
                </div>
              </div>
            </div>

            {/* FIX - PUTIH TEbal */}
            <h3 className='mt-16 lg:mt-0 text-[36px] lg:text-[54px] font-black tracking-tighter text-white leading-none'>
              GET IN TOUCH
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
