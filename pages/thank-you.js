import Link from "next/link"

export default function ThankYou() {
  return (
    <>
      <main className="bg-[url('/banner-bg.png')] bg-cover bg-left-top bg-no-repeat text-white">
        <section className="container mx-auto min-h-screen px-10 flex justify-center items-center">
          <div className="flex flex-col items-center gap-10 py-20 p-10 bg-[#131513] bg-[url('/color-sharp.png')] bg-cover bg-no-repeat bg-right-bottom rounded-xl shadow-[0_0_8px_#fff2]">
            <div className="text-6xl rounded-full">✅</div>
            <div className="text-lg sm:text-3xl">Thanks for joining!</div>
            <Link href="/" className="p-2 hover:underline underline-offset-4 transition">
              &larr; Go Back
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
