import React from "react";
import { motion } from "framer-motion";
import "./option.styles.scss";

const Option = (props) => {
  return (
    <motion.div
      className="option"
      initial={{
        x: 100,
      }}
      animate={{
        x: 0,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      <p className="option__text">
        {props.count}. {props.optionText}
      </p>
      <motion.button
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        className="button button--link"
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        Remove
      </motion.button>
    </motion.div>
  );
};

export default Option;
