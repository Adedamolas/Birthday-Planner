import { AppContext } from "..//./helpers/Context";
import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../App.css";

export default function Notification(props: any) {
  const { isVisible } = useContext(AppContext);
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, x: -100 }}
        >
          <article className="gift_notification">
            <div>
              <img height={"200px"} src={props.img} alt="" />
            </div>
            <p>{props.children}</p>
            <p>
              You can get the presents here: <br /> {props.link}
            </p>
          </article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
