import React from "react";
import styles from "../Memes.module.scss";
const Meme = (props) => {
  const onMemeClick = () => {
    props.onClick(props.meme);
  };

  let style = {
    backgroundImage: `url(${props.meme.url})`,
  };
  return (
    <div
      className={`ui centered card ${styles.memeCard}`}
      onClick={onMemeClick}
    >
      <div className={styles.memeImage} style={style} />
      <div className="content">
        <div className="description">{props.meme.name}</div>
      </div>
    </div>
  );
};
export default Meme;
