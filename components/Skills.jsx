import Image from "next/image"
import { skills } from "@/constants"

import styles from "@/styles/Skills.module.css"

const Skills = () => {
  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.skillsContainer}>
        <h1 className={styles.head}>
          Excellence is not a <span>Skill</span> It's an
          <span> Attitude</span>
        </h1>

        <h2 className={styles.title}>🚀 Skills</h2>

        <div className={styles.skills}>
          {skills?.map(({ name, bgColor, image }, i) => (
            <div key={i + name} className={styles.skill}>
              <div title={name} className={styles.skillCircle} style={{ background: bgColor }}>
                <Image src={image} alt={name} fill className={styles.skillImg} />
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
