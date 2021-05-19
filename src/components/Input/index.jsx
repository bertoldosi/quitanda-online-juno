import React, { useCallback, useState, useEffect, useRef } from "react";
import styles from "./styles.module.scss";

//Libis
import { useField } from "@unform/core";

const Input = ({ name, label, defaultValue, ...rest }) => {
  //states
  const [isFocused, setIsFocused] = useState(false);

  //Variaveis
  const inputRef = useRef(null);
  const { fieldName, error, registerField } = useField(name);

  //Fuctions
  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <div className={`${styles.Container}`} isFocused={isFocused}>
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        id={name}
        name={name}
        ref={inputRef}
        className="form-control"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        {...rest}
      />

      {error && <small className="text-danger">{error}</small>}
    </div>
  );
};

export default Input;
