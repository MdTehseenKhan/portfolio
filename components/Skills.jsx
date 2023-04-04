import Image from "next/image"
import { client } from "@/client"
import { useNextSanityImage } from "next-sanity-image"

import styles from "@/styles/Skills.module.css"

const Skills = ({ skills }) => {
  skills.sort((a, b) => parseInt(a.serial_no) - parseInt(b.serial_no))

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.skillsContainer}>
        <h1 className={styles.head}>
          Excellence is not a <span>Skill</span> It's an
          <span> Attitude</span>
        </h1>

        <h2 className={styles.title}>🚀 Skills</h2>

        <div className={styles.skills}>
          {skills?.map(({ _id, name, bgColor, icon }) => (
            <div key={_id} className={styles.skill}>
              <div title={name} className={styles.skillCircle} style={{ background: bgColor + "20" }}>
                <Image {...useNextSanityImage(client, icon)} alt={name} className={styles.skillImg} />
              </div>
              <h3 className={styles.skillName}>{name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Skills
