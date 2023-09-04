import { Html, Head, Main, NextScript } from "next/document"
import { Toaster } from "react-hot-toast"

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Raleway:wght@400;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Toaster />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
