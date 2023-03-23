import React, { useEffect, useRef, useState } from "react";

import classes from "./AddMovie.module.css";

function AddMovie(props) {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [buttonText, setButtonText] = useState("Add Movie");
  const titleRef = useRef("");
  const openingTextRef = useRef("");
  const releaseDateRef = useRef("");

  function submitHandler(event) {
      event.preventDefault();

      // could add validation here...

      const movie = {
        title: titleRef.current.value,
        openingText: openingTextRef.current.value,
        releaseDate: releaseDateRef.current.value,
      };

      props.onAddMovie(movie);
      setIsButtonClicked(true);
    return;
  }

  useEffect(() => {
    if (isButtonClicked) {
      setButtonText("Movie Added");
    }
    if (!isButtonClicked) {
      setButtonText("Add Movie");
    }

    const timer = setTimeout(() => {
      setIsButtonClicked(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [isButtonClicked]);

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={titleRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="opening-text">Opening Text</label>
        <textarea rows="5" id="opening-text" ref={openingTextRef}></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor="date">Release Date</label>
        <input type="text" id="date" ref={releaseDateRef} />
      </div>
      <button>{buttonText}</button>
    </form>
  );
}

export default AddMovie;
