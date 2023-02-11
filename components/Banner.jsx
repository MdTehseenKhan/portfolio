import Image from "next/image"
import { Typewriter } from "react-simple-typewriter"
import { HiOutlineArrowCircleRight } from "react-icons/hi"

const words = ["ReactJS Developer", "NextJS Developer", "MERN Stack Dev", "Express APIs Dev"]

const Banner = () => {
  return (
    <>
      <section className="banner w-full bg-[url('/banner-bg.png')] bg-cover pt-40 md:pt-48 pb-24">
        <div className="container relative flex mx-auto">
          <div className="absolute hidden lg:block top-[20%] lg:right-[5%] xl:right-[10%] animate-movefreely">
            <Image src="/banner-img.svg" alt="Banner Image" width={400} height={400} className="pointer-events-none" />
          </div>

          <div className="lg:w-8/12 px-10">
            <div className="text-center md:text-left mb-5">
              <span className="tagline font-bold tracking-wide py-2 px-2.5 bg-gradient-to-r from-pink-700 to-purple-700 text-white text-lg md:text-xl border text-center rounded">
                Welcome to my Portfolio
              </span>
            </div>

            <div className="text-6xl text-center md:text-left font-brand font-extrabold tracking-wide mb-5 text-white">
              Hi, I am Tehseen
              <br />
              <div className="text-purple-600 drop-shadow-lg md:text-6xl h-28 md:h-16">
                <Typewriter words={words} loop={0} cursor />
              </div>
            </div>

            <p className="text-gray-400 md:text-lg text-justify leading-normal md:mr-16">
              A Hardworking and passionate developer who loves to build challenging apps • Undergraduate student of
              Software Engineering at Department of Computer Science (UBIT), University of Karachi • Born and raised in
              the "City of Lights", Karachi (Pakistan) • Have been learning Web Technologies from past 3+ years • Eager
              to contribute in a team.
            </p>

            <button
              onClick={() => console.log("")}
              className="text-white font-bold text-xl mt-12 flex items-center group"
            >
              Let's Connect
              <HiOutlineArrowCircleRight className="h-6 w-6 ml-2 group-hover:ml-5" />
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
export default Banner
