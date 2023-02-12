import Link from "next/link"
import Image from "next/image"
import { BsGithub } from "react-icons/bs"

const works = [1, 2, 3, 4, 5]

const Work = () => {
  return (
    <section
      id="work"
      className="w-full text-white bg-[#151315] bg-[url('/color-sharp2.png')] bg-cover bg-no-repeat bg-right"
    >
      <div className="container mx-auto p-5 md:p-10 pt-20">
        <h1 className="text-3xl font-brand font-bold text-center">
          I Know that <span className="text-purple-700">Good Apps</span> Means
          <span className="text-purple-700"> Good Business</span>
        </h1>

        <h2 className="uppercase my-20 text-center font-brand font-extrabold text-2xl relative after-line">Projects</h2>

        <div className="projects my-20 flex flex-wrap gap-5 justify-center items-center">
          {works?.map((w, i) => (
            <>
              <div
                key={`work-${i}`}
                className="project-card bg-[#151315] w-72 rounded-lg p-3 shadow-md hover:shadow-xl"
              >
                <div className="cover-image relative h-44 w-full overflow-hidden pointer-events-none mb-5 rounded-tr rounded-tl">
                  <Image src="/about04.png" alt="project-name" fill />
                </div>
                <div className="project-description">
                  <h1 className="text-xl font-brand font-bold mb-3 tracking-wide">Fitness Freak</h1>
                  <div className="tags flex gap-3 mb-5">
                    <span className="tag text-xs border px-2 rounded-full cursor-pointer hover:bg-black/70">html</span>
                  </div>
                  <div className="visit flex justify-between items-center">
                    <Link href="/" className="brand-btn" title="View Demo">
                      View Demo
                    </Link>
                    <Link href="/" title="Code">
                      <BsGithub className="w-7 h-7 text-gray-300 hover:text-white" />
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Work
