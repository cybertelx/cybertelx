import React, { useState, useEffect, useRef } from "react";
import useInterval from "./useInterval";

export default function useTyping(str = "", timeBetweenKeys = 50) {
  const [started, setStarted] = useState(false);
  const [typed, setTyped] = useState("");
  const [letterIndex, setLetterIndex] = useState(0);

  useInterval(
    () => {
      if (str[letterIndex] == " ") {
        setLetterIndex(letterIndex + 2);
        setTyped(
          typed
            .concat(str.charAt(letterIndex))
            .concat(str.charAt(letterIndex + 1))
        );
      } else {
        setLetterIndex(letterIndex + 1);
        setTyped(typed.concat(str.charAt(letterIndex)));
      }
    },
    typed !== str && started ? timeBetweenKeys : null
  );

  function start() {
    setStarted(true);
  }

  const finished = typed == str && started;

  return [typed, finished, start];
}
