import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

import { MenuIcon, CancelIcon } from "../assets/icons"
import { motion } from "framer-motion"

const navItems = ["home", "about", "work", "skills", "contact"]

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className="navbar">
      <Link href="/">
        <div className="navbar-logo">
          <Image src="/logo.png" alt="logo" width={250} height={50} />
        </div>
      </Link>

      <ul className="hidden md:flex">
        {navItems.map((navText, i) => (
          <li key={`${i}-${navText}`} className="group flex flex-col items-center">
            <div className="w-1 h-1 bg-transparent group-hover:bg-brand-secondary rounded-full mb-1" />
            <a className="navbar-link" href={`#${navText}`}>
              {navText}
            </a>
          </li>
        ))}
      </ul>

      <div className="navbar-menu">
        <div className="p-2 rounded-full bg-brand-secondary" onClick={() => setToggleMenu(true)}>
          <MenuIcon className="w-10 h-10 text-white" />
        </div>

        {toggleMenu && (
          <motion.div
            className="fixed w-4/5 top-0 right-0 flex flex-col bg-gray-200 py-2 md:py-5"
            whileInView={{
              x: [300, 0],
            }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <div className="flex justify-end p-2">
              <CancelIcon className="w-10 h-10" onClick={() => setToggleMenu(false)} />
            </div>

            <ul className="">
              {navItems.map((navText, i) => (
                <li key={`${i}--${navText}`} className="group flex flex-col items-center">
                  <div className="w-1 h-1 bg-transparent group-hover:bg-brand-secondary rounded-full mb-1" />
                  <a className="navbar-link block w-full text-center" href={`#${navText}`}>
                    {navText}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
export default Navbar
