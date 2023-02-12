import Head from "next/head"
import { client } from "@/client"
import { Navbar, FloatingBar, Banner, About, Work, Skills, Footer } from "@/components"

export default function Home({ works, skills }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="description" content="Description" />

        <link rel="icon" href="/favicon.png" />
        <title>Tehseen | MERN Stack Dev - Portfolio</title>
      </Head>

      <main className="app relative w-full overflow-x-hidden">
        <Navbar />
        <FloatingBar />
        <Banner />
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
