import Link from 'next/link'
import '../custom.css'
import ChangeText from './ui/ChangeText'
import '../globals.css'

const Hero = () => {
  return (
    <>
    <div className="font-extrabold text-[12vh] md:text-[16vh] lg:text-[24vh] mt-[20vh] flex justify-center items-start underline ">
      Postl<span className="text-[#990011]">y</span></div>
    <div className="text-2xl text-center tracking-widest 
        font-bold ">
        <ChangeText />
          <div className="flex  mt-5 mb-2 space-x-4 justify-center">
          <Link href="/api/auth/login?returnTo=/dashboard">
            <div className="login-btn">Signup/ Login</div>
          </Link>
          </div>
    </div>
    
    </>
  )
}

export default Hero
