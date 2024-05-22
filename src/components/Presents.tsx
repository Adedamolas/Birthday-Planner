import "../App.css";
import MemoryLane from "./MemoryLane";
import Facts from "./facts/Facts";
import Present from "./PresentCard/Present";
import Notification from "../PopupNotifications'/Notification";
import Data from "../options.json";
import ArrowRightLineIcon from "remixicon-react/ArrowRightLineIcon";
import { useState } from "react";
import { AppContext } from "../helpers/Context";
function Presents() {
  const isVisible = true;
  const [modalNumber, setModalNumber] = useState(0);
  const changeModalNumber = (num: number) => {
    setModalNumber(num);
  };
  const [giftPicked, setGiftPicked] = useState(false);
  return (
    <AppContext.Provider
      value={{
        isVisible,
        modalNumber,
        setModalNumber,
        changeModalNumber,
        giftPicked,
        setGiftPicked,
      }}
    >
      <section className="presents">
        <h1 className="scroll_message">
          WHILE YOU'RE HERE <ArrowRightLineIcon className="arrow" />
        </h1>
        <img
          height={"250px"}
          src="https://tenor.com/view/gifts-spongebob-shopping-christmas-gifts-presents-gif-19664825.gif"
          alt=""
        />
        <section style={{ display: "flex", flexDirection: "column" }}>
          <section>
            <Present />
          </section>
          <article style={{ padding: "20px", border: "1px soild #2f2f2f" }}>
            <h2>Add present</h2>
          </article>
        </section>
        {giftPicked ? (
          <Notification
            img={Data[modalNumber].img}
            children={Data[modalNumber].title}
          />
        ) : (
          ""
        )}
        <section>
          <MemoryLane />
        </section>
        <section>
          <Facts />
        </section>
      </section>
    </AppContext.Provider>
  );
}

export default Presents;
