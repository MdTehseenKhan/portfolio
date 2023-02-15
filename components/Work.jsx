import Image from "next/image"
import { BsGithub } from "react-icons/bs"
import { client } from "@/client"
import { useNextSanityImage } from "next-sanity-image"

const Work = ({ works }) => {
  return (
    <section
      id="work"
      className="w-full text-white bg-[#151315] bg-[url('/color-sharp.png')] bg-cover bg-no-repeat bg-left-bottom"
    >
      <div className="container mx-auto px-5 md:p-10 py-10 md:py-20">
        <h1 className="text-3xl font-brand font-bold text-center">
          I Know that <span className="text-purple-700">Good Apps</span> Means
          <span className="text-purple-700"> Good Business</span>
        </h1>

        <h2 className="uppercase my-10 sm:mb-20 -ml-20 text-center font-brand font-extrabold text-2xl relative after-line">
          ✨Projects
        </h2>

        <div className="projects my-10 flex flex-wrap gap-5 md:gap-10 justify-center items-center">
          {works?.map(({ _id, title, projectLink, codeLink, imgUrl, tags }) => (
            <div
              key={_id}
              className="project-card bg-[#151315] w-72 rounded-lg p-3 hover:scale-105 shadow-[0_2px_8px_0_#fff2] hover:shadow-[0_0_12px_#fff5]"
            >
              <div className="cover-image relative pointer-events-none mb-5">
                <Image
                  {...useNextSanityImage(client, imgUrl)}
                  alt={title}
                  className="h-44 w-full object-cover rounded-lg"
                />
              </div>
              <div className="project-description">
                <h1 className="text-xl font-brand font-bold mb-3 tracking-wide">{title}</h1>
                <div className="tags flex gap-3 mb-5 overflow-x-scroll">
                  {tags?.map((tag, i) => (
                    <span
                      key={`${i}-${tag}`}
                      className="tag text-xs py-1 px-2 rounded-full cursor-pointer hover:bg-black/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="visit flex justify-between items-center">
                  <a href={projectLink} target="_blank" className="brand-btn rounded-lg" title="View Demo">
                    View Demo
                  </a>
                  <a href={codeLink} target="_blank" title="Code">
                    <BsGithub className="w-7 h-7 text-gray-300 hover:text-white" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Work
