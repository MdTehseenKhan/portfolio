import Image from "next/image"
import { BsGithub, BsLinkedin } from "react-icons/bs"

export default function Navbar() {
  return (
    <>
      <header className="absolute z-50 w-full text-gray-400 bg-transparent">
        <div className="container mx-auto px-10 flex flex-wrap gap-5 p-3 flex-row items-center justify-center md:justify-between">
          <a className="flex title-font font-medium items-center text-white">
            {/* <Image src="/favicon.png" width={30} height={30} /> */}
            <span className="ml-3 font-brand font-extrabold text-4xl">TEHSEEN</span>
          </a>
          <div className="flex flex-wrap gap-5 items-center justify-center">
            <a href="https://github.com/MdTehseenKhan" target="_blank" title="GitHub Profile">
              <BsGithub className="h-5 w-5 hover:text-white" />
            </a>
            <a href="https://linkedin.com/in/md-tehseen-khan" target="_blank" title="LinkedIn Profile">
              <BsLinkedin className="h-5 w-5 hover:text-white" />
            </a>
            <a
              href="/MdTehseenKhanCV.pdf"
              title="Download CV"
              target="_blank"
              className="inline-flex items-center bg-gray-800 border-0 py-2 px-3 hover:text-gray-200 hover:bg-gray-700 rounded-lg"
              download
            >
              Download CV
            </a>
          </div>
        </div>
      </header>
    </>
  )
}
