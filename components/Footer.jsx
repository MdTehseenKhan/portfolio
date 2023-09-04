import { useRef } from "react"
import Image from "next/image"
import { toast } from "react-hot-toast"

import emailjs from "@emailjs/browser"
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs"
import { MdDownload } from "react-icons/md"

import styles from "@/styles/Footer.module.css"

const Footer = () => {
  const formRef = useRef()

  function handleSubmit(e) {
    e.preventDefault()

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          formRef.current[0].value = ""
          formRef.current[1].value = ""
          formRef.current[2].value = ""

          toast.success("Operation Successfull")
        },
        (error) => {
          toast.error("Something went wrong!")
        }
      )
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
            <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
              <label className={styles.inputLabel}>
                Name
                <input
                  type="text"
                  name="from_name"
                  required
                  minLength={3}
                  maxLength={24}
                  className={styles.inputField}
                />
              </label>

              <label className={styles.inputLabel}>
                Email
                <input type="email" name="email_id" required className={styles.inputField} />
              </label>

              <label className={styles.messageField}>
                Message
                <textarea required minLength={5} name="message"></textarea>
              </label>

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
