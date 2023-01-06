import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TokenExp from "./TokenExpired.png";

const TokenExpired = () => {
  const { userToken } = useSelector((state) => state.user);
  const [modal, setModal] = useState(true);
  if (userToken === false) {
    return (
      <AnimatePresence>
        {modal && (
          <div
            className={`fixed ${
              modal ? "block" : "hidden"
            } top-0 left-0 z-50 right-0 h-screen grid md:place-items-center place-items-end bg-black/30`}
          >
            <motion.div
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white text-blue-600 md:w-[40rem] w-full h-[16rem] p-1"
            >
              <div className="font-semibold border-b-2 border-blue-600">
                Token Expired
              </div>
              <div className="grid place-items-center gap-3">
                <img
                  className="md:w-[8rem] w-[5rem] h-[5rem] md:h-[8rem]"
                  src={TokenExp}
                  alt=""
                />
                <p>
                  Sorry, your session has expired. Please log in again to
                  continue.
                </p>
                <Link to="/login">
                  <motion.button
                    whileTap={{ scale: 0.8 }}
                    onClick={() => {
                      setModal(!modal);
                    }}
                    className="bg-blue-600 px-5 py-1 text-lg font-semibold text-white rounded"
                  >
                    LogIn
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    );
  }
};

export default TokenExpired;
