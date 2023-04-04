import { useState } from "react"
import Head from "next/head"
import { client } from "@/client"
import { Navbar, FloatingBar, Banner, About, Work, Skills, Footer } from "@/components"

export default function Home({ works, skills }) {
  const [active, setActive] = useState((typeof window !== "undefined" && window.location.hash) || "home")

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="description" content="Description" />

        <link rel="icon" href="/banner-img.svg" />
        <title>Tehseen | MERN Stack Dev - Portfolio</title>
      </Head>

      <main className="app relative w-full overflow-x-hidden bg-[#151315]">
        <Navbar />
        <FloatingBar active={active} setActive={setActive} />
        <Banner setActive={setActive} />
        <About />
        <Work works={works} />
        <Skills skills={skills} />
        <Footer />
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const works = await client.fetch("*[_type == 'works']")
  const skills = await client.fetch("*[_type == 'skills']")

  return {
    props: {
      works,
      skills,
    },
  }
}
