import Link from "next/link";
import BackBtn from "../components/ui/BackBtn";
import SocialCard from "../components/ui/SocialCard";

export default function page() {
  return (
  <>
      <Link href="/"><BackBtn />
      </Link>
       <section className="max-w-3xl mx-auto mt-[15vh] my-10 p-6 bg-white shadow-lg border-4 border-[#990011] rounded-2xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
        <p className="text-gray-600 leading-relaxed">
            I am a passionate developer who enjoys building user-friendly and efficient applications.
            With experience in web development, open-source contributions, and problem-solving, I strive to
            create impactful digital solutions. My focus is on writing clean, maintainable code and
            continuously learning new technologies.
        </p>
    </section>
        <div className=" mt-[28vh]">
        <SocialCard />
      </div>
  </>

  )
}
