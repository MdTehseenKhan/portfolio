import { useRouter } from "next/router"
import { useForm, ValidationError } from "@formspree/react"
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs"
import { MdDownload } from "react-icons/md"

const Footer = () => {
  const router = useRouter()
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM_SECRET_ID)

  if (state.succeeded) {
    return router.push("/thank-you")
  }

  return (
    <>
      <section
        id="contact"
        className="w-full text-white bg-[#151315] bg-[url('/color-sharp.png')] bg-cover bg-no-repeat bg-bottom"
      >
        <div className="container mx-auto px-5 md:p-10 py-20">
          <h1 className="text-3xl font-brand font-bold text-center">
            Let's <span className="text-purple-700">Build</span> Something
            <span className="text-purple-700"> Awesome</span>
          </h1>

          <h2 className="uppercase my-20 -ml-20 text-center font-brand font-extrabold text-2xl relative after-line">
            📞Get in Touch
          </h2>

          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-wrap -m-2">
              <label className="text-sm p-2 w-full md:w-1/2">
                Name
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-gray-800/30 mt-2 rounded border border-gray-700 focus:border-purple-500 focus:bg-gray-900 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8"
                />
              </label>
              <label className="text-sm p-2 w-full md:w-1/2">
                Email
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-gray-800/30 mt-2 rounded border border-gray-700 focus:border-purple-500 focus:bg-gray-900 focus:ring-2 focus:ring-purple-900 outline-none text-gray-100 py-1 px-3 leading-8"
                />
              </label>
              <div className="ml-2 p-2 text-red-600 flex">
                <ValidationError prefix="Provided mail" field="email" errors={state.errors} />
              </div>
              <label className="p-2 w-full text-sm">
                Message
                <textarea
                  required
                  className="w-full bg-gray-800/30 mt-2 rounded border border-gray-700 focus:border-purple-500 focus:bg-gray-900 focus:ring-2 focus:ring-purple-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6"
                ></textarea>
              </label>
              <div className="ml-2 p-2 text-red-600 flex">
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
              <button
                type="submit"
                className="flex mx-auto m-2 text-white bg-gradient-to-r from-pink-700 to-purple-800 py-2 px-8 hover:bg-gradient-to-l rounded-lg text-lg"
              >
                Send Message
              </button>
            </form>
            <div className="flex flex-col gap-5 items-center text-gray-400 p-2 w-full pt-5 mt-5 border-t border-gray-800 text-center">
              <a
                href="mailto:connect.tehseenkhan@gmail.com?subject=Hello%20Tehseen&body=Hire%20me"
                className="text-purple-500 hover:text-purple-600"
              >
                connect.tehseenkhan@gmail.com
              </a>
              <p>Copyright &copy; 2023</p>
              <span className="mb-10 md:mb-20 inline-flex">
                <div className="flex flex-wrap gap-5 items-center">
                  <a href="https://github.com/MdTehseenKhan" target="_blank" title="GitHub Profile">
                    <BsGithub className="h-5 w-5 hover:text-white" />
                  </a>
                  <a href="https://linkedin.com/in/md-tehseen-khan" target="_blank" title="LinkedIn Profile">
                    <BsLinkedin className="h-5 w-5 hover:text-white" />
                  </a>
                  <a href="https://wa.me/+923171169594" target="_blank" title="WhatsApp">
                    <BsWhatsapp className="h-5 w-5 hover:text-white" />
                  </a>
                  <a href="/MdTehseenKhanCV.pdf" title="Download CV" target="_blank" download>
                    <MdDownload className="h-5 w-5 hover:text-white" />
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
