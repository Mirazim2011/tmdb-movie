import React, { useState } from "react";
import "./FieldInput.css";
export default function FieldInput({
  id,
  errorMessage,
  label,
  htmlFor,
  ...inputValues
}) {
  const [focused, setFocused] = useState(false);
  return (
    <>
      <label
        className="label text-gray-400 inline-block mt-2.5 mb-1.5"
        htmlFor={htmlFor}
      >
        {label}
      </label>
      <input
        focused={focused.toString()}
        onFocus={(evt) =>
          inputValues.name == "confirmPassword" && setFocused(true)
        }
        onBlur={(evt) => setFocused(true)}
        id={htmlFor}
        className="border rounded input"
        {...inputValues}
      />
      <p className="text-red-500 mt-2 hidden">{errorMessage}</p>
    </>
  );
}
