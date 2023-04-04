import Link from "next/link"
import { BsGithub, BsLinkedin } from "react-icons/bs"
import { MdDownload } from "react-icons/md"

export default function Navbar() {
  return (
    <>
      <header className="absolute z-50 w-full text-gray-400 bg-transparent">
        <div className="container mx-auto px-8 md:px-10 flex flex-wrap gap-5 py-3 items-center justify-between">
          <Link href="/">
            <span className="ml-3 font-logo text-white text-4xl">Tehseen</span>
          </Link>
          <div className="flex flex-wrap gap-5 items-center justify-center ml-5">
            <a href="https://github.com/MdTehseenKhan" target="_blank" title="GitHub Profile">
              <BsGithub className="h-5 w-5 hover:text-white" />
            </a>
            <a href="https://linkedin.com/in/md-tehseen-khan" target="_blank" title="LinkedIn Profile">
              <BsLinkedin className="h-5 w-5 hover:text-white" />
            </a>
            <a
              href="/(Resume)-MdTehseenKhan-MERN.pdf"
              title="Download CV"
              target="_blank"
              className="md:hidden"
              download
            >
              <MdDownload className="h-5 w-5 hover:text-white" />
            </a>
            <a
              href="/(Resume)-MdTehseenKhan-MERN.pdf"
              title="Download CV"
              target="_blank"
              className="brand-btn hidden md:inline-flex"
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
