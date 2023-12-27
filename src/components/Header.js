import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
    return(
        <header className=' bg-white flex justify-between items-center py-3 px-4 lg:py-6 lg:px-8'>
        <div className=' flex gap-10 lg:gap-20'>
          <Link className=' flex items-center gap-1 border-b-2 border-[#952626] border-dashed font-semibold' href="/"><Image src="/hyperlink.png" alt='Logo' width={25} height={10} />Connect</Link>
          <nav className=' hidden lg:flex gap-6 text-sm items-center text-gray-400'>
          <Link href="/About" className=' hover:text-[#952626]'>About</Link>
          <Link href="/Pricing" className=' hover:text-[#952626]'>Pricing</Link>
          <Link href="/Contact" className=' hover:text-[#952626]'>Contact</Link>
          </nav>
        </div>
        <div className=' flex items-center gap-5'>
          <Link href="/register" className=' hover:text-[#952626] text-gray-500'>Create Account</Link>
          <Link href="/login" className='sm:text-base px-1 lg:px-3 py-1 border-[1px] rounded-lg bg-[#952626] text-white hover:bg-white hover:text-black hover:border-[#952626]'>SignIn</Link>
        </div>
      </header>
    )
}