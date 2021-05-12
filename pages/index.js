import Head from "next/head";
import React, { useEffect, useState, useMemo } from "react";
// import { Cloudinary } from "cloudinary-core";
// import "cloudinary-video-player/dist/cld-video-player";
import { API_PROD_PREFIX, API_DEV_PREFIX } from "../services/api";
// import styles from "../styles/Home.module.css";

import Header from "../components/Header/Header";
import MemeCardList from "../components/MemeCard/MemeCardList";
import Button from "../components/Button/Button";

export default function Home() {
  const [memes, setMemes] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [isDisable, setDisable] = useState(true);
  const incrementPage = () => {
    setPageNo((prevState) => prevState + 1);
    setDisable(true);
  };

  useEffect(() => {
    fetch(`/api/memes?page=${pageNo}&type=images`)
      .then((res) => res.json())
      .then((data) => {
        const shuffle = (arr) => arr.sort(() => 0.5 - Math.random());
        setMemes((prevState) => [...prevState, ...shuffle(data.data)]);
        setDisable(false);
      });
  }, [pageNo]);

  return (
    <>
      <Head>
        <title>Memes</title>
        <meta
          name="description"
          content="100+ Meme ideas in 2021 | make me laugh, bones funny, the funny"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <MemeCardList memes={memes} />
      <Button isDisable={isDisable} loadMore={incrementPage} />
    </>
  );
}
