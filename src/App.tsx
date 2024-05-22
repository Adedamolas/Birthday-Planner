import Page from "./page";
import Birthday from "./components/Birthday";
import Form from "..//src/Form/Form";
import Loader from "./Loader";
// import { PersonScore } from './components/PersonScore'
import { AppContext } from "./helpers/Context";
import CakeFillIcon from "remixicon-react/CakeFillIcon";
import "./App.css";
import { useState, useContext, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
function App() {
  // const {
  //   isVisible,
  // } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [hasContentBeenChosen, sethasContentBeenChosen] = useState(false);
  const [showform, setShowForm] = useState(false);
  const [contentIndex, setContentIndex] = useState(1);
  const [isCardVisible, setIsCardVisible] = useState(true)
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  const handleContentShown = () => {
    sethasContentBeenChosen(!hasContentBeenChosen);
  };
  const showTheForm = () => {
    setShowForm(!showform);
  };
  const contentComponents = [<Birthday />, <Page />];
  const buttonData = [
    // 'Valentine',
    "Birthday",
  ];
  const handleButtonClick = (index: any) => {
    setContentIndex(index);
  };
  const jointOnclickFunctions = () => {
    handleContentShown;
    showTheForm;
  };
  const ContentLink = buttonData.map((text, index) => (
    <section>
      <div key={index} onClick={handleContentShown}>
        <h2 onClick={() => handleButtonClick(index)}>
          <h2>
            <CakeFillIcon />
          </h2>
          {text}
        </h2>
      </div>
    </section>
  ));
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <AppContext.Provider
          value={{
            hasContentBeenChosen,
            sethasContentBeenChosen,
            handleButtonClick,
            handleContentShown,
            buttonData,
            contentComponents,
            isCardVisible,
            setIsCardVisible
          }}
        >
          <div className="app">
            {hasContentBeenChosen ? (
              contentComponents[contentIndex]
            ) : (
              <section>
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="starting_page"
                  >
                    <section>
                      <h1>Choose your Event</h1>
                    </section>
                    {ContentLink}
                  </motion.div>
                </AnimatePresence>
              </section>
            )}
          </div>
          {hasContentBeenChosen ? <Form /> : ""}
        </AppContext.Provider>
      )}
    </>
  );
}

export default App;
