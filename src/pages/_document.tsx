import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { FB_PIXEL_ID } from "../../lib/fpixel";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="br">
        <Head>
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            />
          </noscript>
          <meta
            name="facebook-domain-verification"
            content="o4bg71nqndzr3j8m6z7bcmi3uc7dzp"
          />
        </Head>
        <title>Maxine Lobato - Organização Barreto e Lobato</title>
        <meta
          name="Maxine Lobato - Developer FullStack"
          content="Tenha a melhor experiência em sua Landing Page"
        />
        <link rel="icon" href="favicon.ico" />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
