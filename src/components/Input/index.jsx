import React, { useCallback, useState, useEffect, useRef } from "react";
import { mask as masker, unMask } from "remask";
import styles from "./styles.module.scss";

//Libis
import { useField } from "@unform/core";

const Input = ({ name, label, defaultValue, mask, ...rest }) => {
  //states
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState();

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

  const onChange = (ev) => {
    const originalValue = unMask(ev.target.value);

    if (mask === "cartao") {
      const maskedValue = masker(originalValue, ["9999 9999 9999 9999"]);
      setValue(maskedValue);
      return;
    } else if (mask === "ano") {
      const maskedValue = masker(originalValue, ["9999"]);
      setValue(maskedValue);
      return;
    } else if (mask === "mes") {
      const maskedValue = masker(originalValue, ["99"]);
      setValue(maskedValue);
      return;
    } else if (mask === "cvv") {
      const maskedValue = masker(originalValue, ["9999"]);
      setValue(maskedValue);
    } else {
      setValue(ev.target.value);
    }
  };

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
        onChange={mask && onChange}
        value={mask && value}
        {...rest}
      />

      {error && <small className="text-danger">{error}</small>}
    </div>
  );
};

export default Input;
