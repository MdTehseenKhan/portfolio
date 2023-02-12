import Image from "next/image"

const About = () => {
  return (
    <>
      <section
        id="about"
        className="about__section text-white bg-[#151315] bg-[url('/color-sharp.png')] bg-cover bg-no-repeat"
      >
        <div className="container w-full relative pb-20 px-5 sm:px-10 sm:mx-auto l:px-0">
          <div className="about__box w-full flex flex-col lg:flex-row justify-center items-center">
            <div className="details -mt-10 w-full lg:w-4/6 py-20 px-10 pb-44 lg:pb-10 lg:pr-32 bg-black shadow-lg bg-[url('/color-sharp2.png')] bg-cover bg-no-repeat bg-right rounded-lg">
              <h1 className="after-line uppercase mb-8 text-2xl font-bold relative">💫 About Me</h1>
              <ul className="list-disc list-inside my-2">
                <li>Enthusiastic Junior Web Developer. 🚀</li>
                <li>
                  Eager to contribute to team success through hard work, attention to detail and excellent
                  organizational skills. 🔮
                </li>
                <li>Clear understanding of Task and training in Skill. 💡</li>
                <li>Motivated to learn, grow and excel in Industry. 📝</li>
                <li>
                  To seek and maintain part-time position that offers professional challenges utilizing interpersonal
                  skills, excellent time management and problem-solving skills. 🔎
                </li>
                <li>Hardworking and passionate job seeker with strong organizational skills. 💻</li>
                <li>Eager to secure an entry-level Junior Web Developer position. 📢</li>
                <li>Ready to help team achieve company goals. 🦄</li>
              </ul>
            </div>
            <div className="profile-pic w-full lg:w-2/6 -mt-40 lg:mt-0 lg:-translate-x-20 flex justify-center items-center">
              <div className="relative w-72 h-72">
                <Image
                  src="/profile-pic.png"
                  alt="profile pic"
                  className="rounded-full pointer-events-none shadow-lg border-8 border-white"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default About
