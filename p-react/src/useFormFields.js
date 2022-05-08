import React, { useState } from "react";

export default function useFormFields(init) {
  const [fields, setFields] = useState(init);
  const handleChange = (event) => {
    const { target } = event;
    setFields({
      ...fields,
      [target.name]: target.value,
    });
  };

  return { fields, handleChange };
}
