import React, { useEffect } from "react";
import { get, HttpClient } from "./services/HttpClient";

const httpClient = new HttpClient();

export default function AppAxios() {
  useEffect(() => {
    httpClient
      .get("posts", {
        params: {
          id: 2,
        },
      })
      .then((response) => console.log(response));
  }, []);
  return <div></div>;
}
