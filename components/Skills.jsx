import { urlFor } from "@/client"

const Skills = ({ skills }) => {
  return (
    <section
      id="skills"
      className="relative w-full text-white bg-[#151315] bg-[url('/color-sharp2.png')] bg-cover bg-no-repeat"
    >
      <div className="container mx-auto flex flex-col gap-10 px-5 md:px-20 py-20">
        <h1 className="text-3xl font-brand font-bold text-center">
          Excellence is not a <span className="text-purple-700">Skill</span> It's an
          <span className="text-purple-700"> Attitude</span>
        </h1>

        <h2 className="uppercase my-10 -ml-20 text-center font-brand font-extrabold text-2xl relative after-line">
          🚀 Skills
        </h2>

        <div className="skills my-10 flex flex-wrap gap-5 justify-center items-center">
          {skills?.map(({ _id, name, bgColor, icon }) => (
            <div key={_id} className="flex flex-col gap-3 items-center">
              <div className={`relative w-32 h-32 rounded-full bg-[${bgColor}]`} title={name}>
                <img src={urlFor(icon)} alt={name} className="rounded-full p-3" />
              </div>
              <h3 className="font-brand text-gray-300">{name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Skills
