import Head from "next/head"

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="description" content="Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div>{children}</div>
    </>
  )
}
export default Layout
