import { useState, useEffect } from "react"
import { useScroll } from "framer-motion"
import { HiHome, HiUserCircle, HiBriefcase, HiOutlineViewGridAdd, HiMail } from "react-icons/hi"

const navItems = [
  {
    item: "home",
    Icon: HiHome,
  },
  {
    item: "about",
    Icon: HiUserCircle,
  },
  {
    item: "work",
    Icon: HiBriefcase,
  },
  {
    item: "skills",
    Icon: HiOutlineViewGridAdd,
  },
  {
    item: "contact",
    Icon: HiMail,
  },
]

import styles from "@/styles/FloatingBar.module.css"

export default function FloatingBar({ active, setActive }) {
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    console.log(scrollYProgress.current)
  }, [])

  return (
    <>
      <div className={styles.floatingBar}>
        <nav className={styles.nav}>
          {navItems?.map(({ item, Icon }, i) => (
            <a
              key={`nav-${i}`}
              href={`#${item}`}
              title={item}
              onClick={() => {
                document.getElementById(item).scrollIntoView({ behavior: "smooth" })
                setActive(item)
              }}
              className={`p-3 hover:text-white hover:bg-gray-800 rounded-full ${
                item === active ? "text-white bg-pink-700 hover:bg-pink-800" : ""
              }`}
            >
              <Icon className={styles.icon} />
            </a>
          ))}
        </nav>
      </div>
    </>
  )
}
