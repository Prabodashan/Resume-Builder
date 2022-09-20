import React from "react";

import styles from "./InputControl.module.css";

function InputControl({ inputType, label, ...props }) {
  return (
    <div className={styles.container}>
      {label && <label>{label}</label>}
      {inputType === "textArea" ? (
        <textarea type="text" {...props} />
      ) : (
        <input type="text" {...props} />
      )}
    </div>
  );
}

export default InputControl;
