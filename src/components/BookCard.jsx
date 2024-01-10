import { useState } from "react";
import { PiHeartFill } from "react-icons/pi";

import styles from "./BookCard.module.css";

function BookCard({ data, handleLikedList }) {
  const { title, author, image, language, pages } = data;

  const [like, setLike] = useState(false);

  const likeHandler = () => {
    handleLikedList(data, like);
    setLike((like) => !like);
  };

  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <div className={styles.info}>
        <h3>{title}</h3>
        <p>{author}</p>
        <div>
          <span>{language}</span>
          <span>{pages} pages📜 </span>
        </div>
      </div>
      <button onClick={likeHandler}>
        <PiHeartFill color={like ? "#e74c3c" : "#e67e22"} fontSize="1.8rem" />
      </button>
    </div>
  );
}

export default BookCard;
