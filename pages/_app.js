import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://unpkg.com/cloudinary-video-player@1.5.3/dist/cld-video-player.min.css"
          rel="stylesheet"
        />
        <script
          src="https://unpkg.com/cloudinary-core@latest/cloudinary-core-shrinkwrap.min.js"
          type="text/javascript"
        ></script>
        <script
          src="https://unpkg.com/cloudinary-video-player@1.5.3/dist/cld-video-player.min.js"
          type="text/javascript"
        ></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
