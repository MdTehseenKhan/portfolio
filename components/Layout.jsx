import Head from "next/head"

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="description" content="Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />

        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Raleway:wght@400;700;800&display=swap"
          rel="stylesheet"
        />
        {/* <link href="https://fonts.googleapis.com/css2?family=Great+Vibes:wght@400;700&display=swap" rel="stylesheet" /> */}
      </Head>
      <div>{children}</div>
    </>
  )
}
export default Layout
