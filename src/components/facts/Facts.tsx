// import { facts } from "../../facts"
import "../../components/facts/Facts.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import "../../App.css";

function Facts() {
  const facts = [
    {
      id: 1,
      fact: "I sleep with my eyes open",
    },
    {
      id: 2,
      fact: "I'm Batman",
    },
    {
      id: 3,
      fact: "I don't like children",
    },
    {
      id: 4,
      fact: "I'm depressed 80% of the time",
    },
    {
      id: 5,
      fact: "I need a job",
    },
    {
      id: 6,
      fact: "I actually like Honour than Rex",
    },
    {
      id: 7,
      fact: "I don't have girlfriend",
    },
    {
      id: 8,
      fact: "I stalk Dayo's portfolio and Daniel's projects",
    },
    {
      id: 7,
      fact: "I'm trying my best to be the best",
    },
    {
      id: 10,
      fact: "I lowkey want a Macbook",
    },
    {
      id: 1,
      fact: "I hate my department sooo much",
    },
  ];
  const [randomFact, setRandomFact] = useState(0);
  const handleButtonClick = () => {
    setRandomFact(Math.floor(Math.random() * facts.length));
  };
  return (
    <section className="facts_ctn">
      <article>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            style={{ transitionDuration: "1s", overflow: "hidden" }}
          >
            <div>
              <h2>
                <span>"</span> {facts[randomFact].fact} <span>"</span>
              </h2>
            </div>
          </motion.div>
        </AnimatePresence>
        <button onClick={handleButtonClick}>Roll</button>
      </article>
    </section>
  );
}

export default Facts;
