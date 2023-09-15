import Image from "next/image"

import styles from "@/styles/About.module.css"

const About = () => {
  return (
    <>
      <section id="about" className={styles.aboutSection}>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutBox}>
            <div className={styles.details}>
              <h1 className={styles.afterLine}>👩‍💻 About Me</h1>
              <ul className={styles.list}>
                <li>🚀 Enthusiastic Junior Web Developer.</li>
                <li>
                  🔮 Eager to contribute to team success through hard work, attention to detail and excellent
                  organizational skills.
                </li>
                <li>💡 Clear understanding of Task and training in Skill.</li>
                <li>📝 Motivated to learn, grow and excel in Industry.</li>
                <li>
                  🔎 To seek and maintain part-time position for now that offers professional challenges utilizing
                  interpersonal skills, excellent time management and problem-solving skills.
                </li>
                <li>💻 Hardworking and passionate job seeker with strong organizational skills.</li>
                <li>📢 Eager to secure an entry-level Junior Web Developer position.</li>
                <li>🦄 Ready to help team achieve company goals.</li>
              </ul>
            </div>
            <div className={styles.profilePic}>
              <div>
                <Image src="/profile-pic.jpg" alt="profile pic" fill />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default About
