import Image from "next/image"
import { Typewriter } from "react-simple-typewriter"
import { HiOutlineArrowCircleRight } from "react-icons/hi"

const words = ["ReactJS Developer", "NextJS Developer", "MERN Stack Dev", "Express APIs Dev"]

const Banner = ({ setActive }) => {
  return (
    <>
      <section id="home" className="banner w-full bg-black bg-[url('/banner-bg.png')] bg-cover pt-44 md:pt-48 pb-24">
        <div className="container relative flex mx-auto">
          <div className="absolute hidden pointer-events-none lg:block top-[20%] right-[5%] animate-movefreely">
            <Image
              src="/banner-img.svg"
              alt="Banner Image"
              width={400}
              height={400}
              className="pointer-events-none"
              priority
            />
          </div>

          <div className="lg:w-8/12 px-10">
            <div className="text-center md:text-left mb-5">
              <span className="tagline font-bold tracking-wide py-2 px-2.5 bg-gradient-to-r from-pink-700 to-purple-700 text-white text-lg md:text-xl border text-center rounded">
                Assalam-o-alaikum
              </span>
            </div>

            <div className="text-5xl text-center drop-shadow-lg md:text-left font-brand font-extrabold tracking-wide mb-5 text-white">
              I am Tehseen
              <br />
              <div className="text-purple-600 drop-shadow-lg lg:text-6xl h-28 md:h-16">
                <Typewriter words={words} loop={0} cursor />
              </div>
            </div>

            <p className="text-gray-400 md:text-lg text-justify leading-normal md:mr-16">
              A Hardworking and passionate developer who loves to build challenging apps • Undergraduate student of
              Software Engineering at Department of Computer Science (UBIT), University of Karachi • Born and raised in
              the "City of Lights", Karachi (Pakistan) • Have been learning Web Technologies from past 3+ years • Eager
              to contribute in a team.
            </p>

            <a
              href="#contact"
              onClick={() => {
                document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
                setActive("contact")
              }}
              className="text-white font-bold text-xl mt-12 flex items-center group"
            >
              Let's Connect
              <HiOutlineArrowCircleRight className="h-6 w-6 ml-2 group-hover:ml-5 transition" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
export default Banner
