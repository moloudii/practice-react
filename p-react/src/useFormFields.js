import React, { useState, useDebugValue } from "react";

export default function useFormFields(init) {
  const [fields, setFields] = useState(init);

  const handleChange = (event) => {
    const { target } = event;
    setFields({
      ...fields,
      [target.name]: target.value,
    });
  };

  //   useDebugValue(`${Object.keys(fields).length} fields`);

  //   when you see Hook in Component
  useDebugValue(fields, (fields) => `${Object.keys(fields).length} fields`);

  return { fields, handleChange };
}
