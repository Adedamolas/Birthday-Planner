import Data from "../../options.json";
import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AppContext } from "..//../helpers/Context";
import "../../App.css";

export default function Present() {
  const {
    isVisible,
    // modalNumber,
    // setModalNumber,
    changeModalNumber,
    giftPicked,
    setGiftPicked,
  } = useContext(AppContext);

  return Data.map((options) => {
    return (
      <>
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ opacity: 0, y: 300 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              style={{ display: "flex", flexDirection: "row" }}
              onClick={() => {
                setGiftPicked(!giftPicked);
                changeModalNumber(options.id);
              }}
            >
              <article className="card" key={options.id}>
                <h3>{options.title}</h3>
                <img
                  height={"200px"}
                  width={"250px"}
                  src={options.img}
                  alt=""
                />
                <p>Price: {options.price}</p>
              </article>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  });
}
