import { useState } from "react"
import Head from "next/head"

import { Toaster } from "react-hot-toast"
import { Navbar, FloatingBar, Banner, About, Work, Skills, Footer } from "@/components"

export default function Home() {
  const [active, setActive] = useState((typeof window !== "undefined" && window.location.hash) || "home")

  return (
    <>
      <Head>
        <title>Tehseen | MERN Stack Dev - Portfolio</title>
      </Head>

      <main className="relative w-full overflow-x-hidden bg-[#151315]">
        <Toaster />
        <Navbar />
        <FloatingBar active={active} setActive={setActive} />
        <Banner setActive={setActive} />
        <About />
        <Work />
        <Skills />
        <Footer />
      </main>
    </>
  )
}