import "./App.css";

import { motion, AnimatePresence } from "framer-motion";

export default function () {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="loader"
      >
        <h2>LOADING....</h2>
      </motion.div>
    </AnimatePresence>
  );
}
