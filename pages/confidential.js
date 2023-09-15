import Head from "next/head";

export default function Confidential() {
  return (
    <>
      <Head>
        <title>Tehseen | MERN Stack Dev - Confidential</title>
      </Head>

      <div
        className="
        bg-[url('/banner-bg.png')] 
        bg-cover 
        bg-no-repeat 
        bg-center  
        h-screen 
        w-full 
        grid 
        place-items-center
      "
      >
        <div
          className="
          max-w-sm  
          bg-[#121212] 
          rounded-md 
          shadow-[0_0_8px_#fff2]
          p-7 
        "
        >
          <h1 className="pb-3 uppercase text-white text-2xl font-bold">
            📝 Note
          </h1>
          <p className="text-sm text-gray-400 text-justify">
            I'm pleased to inform you that I've successfully completed this project for a client.
            However, due to client confidentiality and contractual obligations, I'm unable to share
            the project's source code with external viewers. I'm more than happy to discuss the project's
            scope, methodologies, and outcomes, and can provide a high-level overview of its functionality if
            that would be helpful to you.
          </p>
        </div>
      </div>
    </>
  )
}