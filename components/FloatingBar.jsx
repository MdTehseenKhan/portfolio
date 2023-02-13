import { useState } from "react"
import { useRouter } from "next/router"
import { HiHome, HiUserCircle, HiBriefcase, HiOutlineViewGridAdd, HiMail } from "react-icons/hi"

const navItems = [
  {
    item: "/",
    Icon: HiHome,
    title: "home",
  },
  {
    item: "#about",
    Icon: HiUserCircle,
    title: "about",
  },
  {
    item: "#work",
    Icon: HiBriefcase,
    title: "work",
  },
  {
    item: "#skills",
    Icon: HiOutlineViewGridAdd,
    title: "skills",
  },
  {
    item: "#contact",
    Icon: HiMail,
    title: "contact",
  },
]

export default function FloatingBar() {
  const [active, setActive] = useState("/")
  const router = useRouter()

  return (
    <>
      <div className="z-[999] fixed left-1/2 -translate-x-1/2 bottom-10 bg-gray-900/50 backdrop-blur-sm rounded-full shadow-lg">
        <nav className="md:ml-auto p-2 text-gray-400 flex gap-2 items-center justify-center">
          {navItems?.map(({ item, Icon, title }, i) => (
            <a
              key={`nav-${i}`}
              href={item}
              title={title}
              onClick={() => setActive(window.location.hash)}
              className={`p-3 hover:text-white hover:bg-gray-800 rounded-full ${
                item === active ? "text-white bg-pink-700" : ""
              }`}
            >
              <Icon className="w-6 h-6" />
            </a>
          ))}
        </nav>
      </div>
    </>
  )
}
