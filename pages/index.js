import { PageTitle, Navbar, Banner, About, Work, Skills, Testimonial, Footer, FloatingBar } from "@/components"

export default function Home() {
  return (
    <>
      <PageTitle>Tehseen | MERN Stack Dev - Portfolio</PageTitle>
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
