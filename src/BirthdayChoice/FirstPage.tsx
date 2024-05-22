import { motion, AnimatePresence } from "framer-motion";
import { AppContext } from "../helpers/Context";
import { useContext } from "react";
import "../App.css";

export default function FirstPage() {
  const {
    isVisible,
    setYesButtonPressed,
    handleNoButtonClick,
    yesButtonSize,
    noCount,
    getNoButtonText,
  } = useContext(AppContext);

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <section className="birthday">
              <img
                src="https://tenor.com/view/sponge-bob-happy-birthday-squidward-patrick-star-sleep-over-gif-8675542.gif"
                alt=""
              />
              <h1>Today's my birthday</h1>
              <h2>You gonna give me presents for my birthday???????</h2>
              <div className="btn_ctn">
                <button
                  style={{ fontSize: yesButtonSize }}
                  onClick={() => setYesButtonPressed(true)}
                >
                  Yes
                </button>
                <button onClick={handleNoButtonClick} aria-label="No">
                  {noCount === 0 ? "No" : getNoButtonText()}
                </button>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
