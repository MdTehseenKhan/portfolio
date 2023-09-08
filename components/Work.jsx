import Image from "next/image"
import { BsGithub } from "react-icons/bs"
import { works } from "@/constants"

import styles from "@/styles/Work.module.css"

const Work = () => {
  return (
    <section id="work" className={styles.workSection}>
      <div className={styles.workContainer}>
        <h1 className={styles.head}>
          I Know that <span>Good Apps</span> Means
          <span> Good Business</span>
        </h1>

        <h2 className={styles.title}>✨Projects</h2>

        <div className={styles.projects}>
          {works?.map(({ title, link, codeLink, image }, i) => (
            <div key={i + title} className={styles.projectCard}>
              <div className={styles.coverImg}>
                <Image src={image} fill alt={title} />
              </div>

              <div>
                <h1 className={styles.projectTitle}>{title}</h1>

                <div className={styles.links}>
                  <a href={link} target="_blank" className={styles.demoLink} title="View Demo">
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
