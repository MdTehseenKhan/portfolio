import Image from "next/image"
import { BsGithub } from "react-icons/bs"
import { client } from "@/client"
import { useNextSanityImage } from "next-sanity-image"

import styles from "@/styles/Work.module.css"

const Work = ({ works }) => {
  works.sort((a, b) => parseInt(a.serial_no) - parseInt(b.serial_no))

  return (
    <section id="work" className={styles.workSection}>
      <div className={styles.workContainer}>
        <h1 className={styles.head}>
          I Know that <span>Good Apps</span> Means
          <span> Good Business</span>
        </h1>

        <h2 className={styles.title}>✨Projects</h2>

        <div className={styles.projects}>
          {works?.map(({ _id, title, projectLink, codeLink, imgUrl, tags }) => (
            <div key={_id} className={styles.projectCard}>
              <div className={styles.coverImg}>
                <Image {...useNextSanityImage(client, imgUrl)} alt={title} />
              </div>

              <div>
                <h1 className={styles.projectTitle}>{title}</h1>
                <div className={styles.tags}>
                  {tags?.map((tag, i) => (
                    <span key={`${i}-${tag}`}>{tag}</span>
                  ))}
                </div>
                <div className={styles.links}>
                  <a href={projectLink} target="_blank" className={styles.demoLink} title="View Demo">
                    View Demo
                  </a>
                  <a href={codeLink} target="_blank" title="Code">
                    <BsGithub className={styles.github} />
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
