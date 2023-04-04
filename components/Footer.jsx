import { useRouter } from "next/router"
import Image from "next/image"

import { useForm, ValidationError } from "@formspree/react"
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs"
import { MdDownload } from "react-icons/md"

import styles from "@/styles/Footer.module.css"

const Footer = () => {
  const router = useRouter()
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM_SECRET_ID)

  if (state.succeeded) {
    return router.push("/thank-you")
  }

  return (
    <>
      <section id="contact" className={styles.footerSection}>
        <div className={styles.footerContainer}>
          <h1 className={styles.head}>
            Let's <span>Build</span> Something
            <span> Awesome</span>
          </h1>

          <h2 className={styles.title}>📞Get in Touch</h2>

          <div className={styles.formContainer}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <label className={styles.inputLabel}>
                Name
                <input type="text" name="name" required className={styles.inputField} />
              </label>
              <label className={styles.inputLabel}>
                Email
                <input type="email" name="email" required className={styles.inputField} />
              </label>
              <div className={styles.invalidText}>
                <ValidationError prefix="Provided mail" field="email" errors={state.errors} />
              </div>
              <label className={styles.messageField}>
                Message
                <textarea required></textarea>
              </label>
              <div className={styles.invalidText}>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
              <button type="submit" className={styles.contactBtn}>
                Send Message
              </button>
            </form>

            <div className={styles.footer}>
              <a
                href="mailto:connect.tehseenkhan@gmail.com?subject=Hello%20Tehseen&body=Hire%20me"
                className={styles.mailLink}
              >
                <div className={styles.mailImg}>
                  <Image src="/email.png" alt="Email me" fill />
                </div>
                <span>connect.tehseenkhan@gmail.com</span>
              </a>

              <p>Copyright &copy; 2023</p>

              <span className={styles.links}>
                <div className={styles.icons}>
                  <a href="https://github.com/MdTehseenKhan" target="_blank" title="GitHub Profile">
                    <BsGithub className={styles.icon} />
                  </a>
                  <a href="https://linkedin.com/in/md-tehseen-khan" target="_blank" title="LinkedIn Profile">
                    <BsLinkedin className={styles.icon} />
                  </a>
                  <a href="https://wa.me/+923171169594" target="_blank" title="WhatsApp">
                    <BsWhatsapp className={styles.icon} />
                  </a>
                  <a href="/(Resume)-MdTehseenKhan-MERN.pdf" title="Download CV" target="_blank" download>
                    <MdDownload className={styles.icon} />
                  </a>
                </div>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Footer
