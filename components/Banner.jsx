import Image from "next/image"
import { Typewriter } from "react-simple-typewriter"
import { HiOutlineArrowCircleRight } from "react-icons/hi"

const words = ["ReactJS Developer", "NextJS Developer", "MERN Stack Dev", "Express APIs Dev"]

import styles from "@/styles/Banner.module.css"

const Banner = ({ setActive }) => {
  return (
    <>
      <section id="home" className={styles.bannerSection}>
        <div className={styles.bannerContainer}>
          <div className={styles.bannerImg}>
            <Image src="/banner-img.svg" alt="Banner Image" width={400} height={400} priority />
          </div>

          <div className={styles.content}>
            <div>
              <span className={styles.tagline}>Assalam-o-alaikum</span>
            </div>

            <div className={styles.title}>
              I am Tehseen
              <br />
              <div className={styles.typewriter}>
                <Typewriter words={words} loop={0} cursor />
              </div>
            </div>

            <p className={styles.details}>
              A Hardworking and passionate developer who loves to build challenging apps • Undergraduate student of
              Software Engineering at Department of Computer Science (UBIT), University of Karachi • Born and raised in
              the "City of Lights", Karachi (Pakistan) • Have been learning Web Technologies from past 3+ years • Eager
              to contribute in a team.
            </p>

            <div className={styles.connect}>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
                  setActive("contact")
                }}
                className={styles.connectBtn}
              >
                Let's Connect
                <span>
                  <HiOutlineArrowCircleRight />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Banner
