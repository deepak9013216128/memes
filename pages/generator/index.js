import Head from "next/head";
import React, { useEffect, useState } from "react";

import Meme from "./meme/Meme";
import MemeGenerator from "./meme-generator/MemeGenerator";
import styles from "./Memes.module.scss";

/* global jQuery */
import Header from "../../components/Header/Header";

export default function Generate() {
  const [memes, setMemes] = useState([]);
  const [selectedMeme, setSelectedMeme] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((res) => setMemes(res.data.memes));
  }, []);

  const selectMeme = (meme) => {
    // Clear selected image
    setSelectedMeme(null);

    // Fetch image from API
    fetch(meme.url)
      .then((response) => response.blob())
      .then((blob) => {
        var reader = new FileReader();
        reader.onload = (res) => {
          setSelectedMeme({
            ...meme,
            memeDataUrl: res.srcElement.result,
          });
        };
        handleShow();
        reader.readAsDataURL(blob);
      });

    // jQuery(".ui.modal").modal("show");
  };

  return (
    <>
      <Head>
        <title>Generate Meme</title>
        <meta
          name="description"
          content="Generate 100+ Meme ideas in 2021 | make me laugh, bones funny, the funny"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
        />
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-3.3.1.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.js"
        ></script>
      </Head>
      <Header />
      <div className={`ui container ${styles.memeContainer}`}>
        <div className="ui stackable grid centered">
          {memes.map((meme) => (
            <div key={meme.id} className="four wide column">
              <Meme meme={meme} onClick={selectMeme} />
            </div>
          ))}
        </div>
      </div>
      <MemeGenerator
        show={show}
        handleClose={handleClose}
        selectedMeme={selectedMeme}
      />
    </>
  );
}
