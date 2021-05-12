import Head from "next/head";

import Header from "../../components/Header/Header";

export default function Upload() {
  return (
    <>
      <Head>
        <title>Upload Memes</title>
        <meta
          name="description"
          content="Upload Memes to make me laugh, bones funny, the funny"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </>
  );
}
