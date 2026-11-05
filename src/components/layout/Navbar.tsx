export default function Navbar() {
  return (
    <header className='fixed top-6 left-0 right-0 z-50 flex justify-center px-4'>
      <nav className='flex items-center gap-5 bg-[#141414]/90 backdrop-blur-md border border-white/[0.06] rounded-full px-5 py-2'>
        <a href='#' className='text-white text-[12px] font-bold'>
          Edwin
        </a>
        <a
          href='#'
          className='text-white/60 text-[11px] hover:text-white transition'
        >
          About
        </a>
        <a
          href='#'
          className='text-white/60 text-[11px] hover:text-white transition'
        >
          Skill
        </a>
        <a
          href='#'
          className='text-white/60 text-[11px] hover:text-white transition'
        >
          Projects
        </a>
        <a
          href='#'
          className='text-white/60 text-[11px] hover:text-white transition'
        >
          FAQ
        </a>
        <a
          href='#'
          className='text-white/60 text-[11px] hover:text-white transition'
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
