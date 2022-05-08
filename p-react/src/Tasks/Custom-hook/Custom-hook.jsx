import React, { useState } from "react";
import "./custom-hook.css";
import useFormFields from "../../useFormFields";

export default function CustomHook() {
  const { fields, handleChange } = useFormFields({
    email: "",
    password: "",
  });

  return (
    <form>
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          className="form-control"
          value={fields.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          value={fields.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-info">
        Submit
      </button>
    </form>
  );
}
