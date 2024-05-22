import "../App.css";
import { useState, useRef } from "react";
import FirstPage from "../BirthdayChoice/FirstPage";
import { AppContext } from "../helpers/Context";
import Presents from "./Presents";
// import Timer from './Timer'
import ArrowLeftLineIcon from "remixicon-react/ArrowLeftLineIcon";

export default function Birthday() {
  const [noCount, setNoCount] = useState(0);
  const [yesButtonPressed, setYesButtonPressed] = useState(false);
  let isVisible = true;
  // const [yesButtonClicked, setYesButtonClicked] = useState(false)
  const yesButtonSize = noCount * 10 + 16;
  const handleNoButtonClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure???",
      "Really sure?",
      "Sapa don almost kill me na!",
      "Abeg!",
      "Please na?",
      "Na because say I dey follow you dey shine teeth",
      "Oya please na!",
      "Shanu mi na",
      "I hate you",
      "Have a heart!",
      "For the love of God!!!!",
      "Change of heart?",
      "I'll drink sniper ooooooo!!!",
      "I'm desending into the rabbit-hole of depression :(",
      "Wouldn't you reconsider?",
      "Na so e dey be abi???",
      "You're breaking my heart :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };
  const inputRef = useRef<HTMLInputElement>(null);
  console.log("aLL THE PROPS & METHODS OF THE INPUT", inputRef.current);

  return (
    <AppContext.Provider
      value={{
        isVisible,
        setYesButtonPressed,
        handleNoButtonClick,
        yesButtonSize,
        noCount,
        getNoButtonText,
      }}
    >
      {yesButtonPressed ? <Presents /> : <FirstPage />}
      {yesButtonPressed ? (
        <button
          onClick={() => setYesButtonPressed(!yesButtonPressed)}
          className="back_button"
        >
          <ArrowLeftLineIcon />
        </button>
      ) : (
        ""
      )}
    </AppContext.Provider>
  );
}
