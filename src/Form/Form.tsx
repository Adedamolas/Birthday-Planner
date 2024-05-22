import { useState } from "react";
// import { useFormAction } from "react-router-dom"
import CloseLineIcon from "remixicon-react/CloseLineIcon";
import { FormEvent } from "react";
import { AppContext } from "../helpers/Context";
import "../App.css";
import { AnimatePresence, motion } from "framer-motion";

export default function Form() {
  type Contact = {
    name: string;
    // email: string;
    // reason: string;
    // notes: string;
  };
  const [data, setData] = useState<Contact>({
    name: "",
  });
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault;
    const formData = new FormData(e.currentTarget);
    const contact = {
      name: formData.get("name"),
    } as Contact;
    console.log("Submitted Details: ", contact);
  }
  const [isFormVisible, setIsFormVisible] = useState(true);
  const toggleVisiblility = () => {
    setIsFormVisible(!isFormVisible);
  };
  return (
    <AppContext.Provider
      value={{ data, setData, isFormVisible, setIsFormVisible }}
    >
      {isFormVisible ? (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="parent_form_div"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="form_div"
            >
              <form action="submit" onSubmit={handleSubmit} className="form">
                <div>
                  <span onClick={toggleVisiblility}>
                    <CloseLineIcon />
                  </span>
                  <label htmlFor="name">What's your name sef??</label>
                  <input type="text" id="name" name="name" />
                  <div>
                    <button type="submit">Submit</button>
                  </div>
                </div>
              </form>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      ) : (
        ""
      )}
    </AppContext.Provider>
  );
}
