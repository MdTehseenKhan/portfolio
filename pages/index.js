import { PageTitle, Navbar, Banner, About, Work, Skills, Testimonial, Footer, FloatingBar } from "@/components"

export default function Home() {
  return (
    <>
      <PageTitle>Md Tehseen Khan | Portfolio</PageTitle>
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
