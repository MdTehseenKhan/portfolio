import Image from "next/image"
import { Typewriter } from "react-simple-typewriter"
import { HiOutlineArrowCircleRight } from "react-icons/hi"

const words = ["ReactJS Developer", "NextJS Developer", "MERN Stack Dev", "Express APIs Dev"]

const Banner = () => {
  return (
    <>
      <section className="banner relative w-full h-screen bg-[url('/banner-bg.png')] bg-cover bg-no-repeat bg-top pt-40 lg:pt-52 pb-24">
        <div className="container mx-auto">
          <div className="flex items-center">
            <div className="mx-auto lg:mx-0 w-10/12 xl:w-7/12 flex flex-col">
              <div className="tagline inline-block mb-5 font-bold tracking-wide py-2 px-2.5 bg-gradient-to-r from-pink-700 to-purple-700 text-white text-lg md:text-xl border text-center md:text-left">
                Welcome to my Portfolio
              </div>

              <div className="text-3xl md:text-6xl text-center md:text-left font-bold tracking-wide mb-5 text-white">
                Hi I'm Tehseen
                <br />
                <span className="text-purple-600 drop-shadow-lg text-2xl md:text-6xl">
                  <Typewriter words={words} loop={0} cursor />
                </span>
              </div>

              <p className="text-gray-400 text-sm sm:text-base md:text-lg text-justify leading-normal md:mr-10">
                A Hardworking and passionate developer who loves to build challenging apps • Undergraduate student of
                Software Engineering at Department of Computer Science(UBIT), University of Karachi • Born and raised in
                the "City of Lights", Karachi (Pakistan) • Learning Web Technologies for past 3+ years • Eager to
                contribute in a team.
              </p>

              <button
                onClick={() => console.log("")}
                className="text-white font-bold text-xl mt-16 flex items-center group"
              >
                Let's Connect
                <HiOutlineArrowCircleRight className="h-6 w-6 ml-2 group-hover:ml-5" />
              </button>
            </div>
            {/* 
            <div className="w-full md:w-1/2 xl:w-5/12">
              <Image
                src="/banner-img.svg"
                alt="Banner Image"
                width={400}
                height={400}
                className="pointer-events-none absolute -bottom-6 right-[10%] animate-movefreely"
              />
            </div> */}
          </div>
        </div>
      </section>
    </>
  )
}
export default Banner
