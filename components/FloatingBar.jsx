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

export default function FloatingBar({ active, setActive }) {
  return (
    <>
      <div className="z-[999] fixed left-1/2 -translate-x-1/2 bottom-10 bg-gray-900/50 backdrop-blur-sm rounded-full shadow-lg">
        <nav className="md:ml-auto p-2 text-gray-400 flex gap-2 items-center justify-center">
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
                item === active ? "text-white bg-pink-700" : ""
              }`}
            >
              <Icon className="w-7 h-7" />
            </a>
          ))}
        </nav>
      </div>
    </>
  )
}
