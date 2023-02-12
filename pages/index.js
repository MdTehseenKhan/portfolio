import Head from "next/head"
import { client } from "@/client"
import { Navbar, Banner, About, Work, Skills, Testimonial, Footer, FloatingBar } from "@/components"

export default function Home({ works }) {
  console.log(works)
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="description" content="Description" />

        <link rel="icon" href="/favicon.png" />
        <title>Tehseen | MERN Stack Dev - Portfolio</title>
      </Head>

      <div className="app relative w-full overflow-x-hidden">
        <Navbar />
        <FloatingBar />
        <Banner />
        <About />
        <Work />
        <Skills />
        <Testimonial />
        <Footer />
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const query = "*[_type == 'works']"
  const works = await client.fetch(query)

  return {
    props: {
      works,
    },
  }
}
