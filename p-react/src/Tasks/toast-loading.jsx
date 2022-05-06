import React, { useEffect, useReducer, useState } from "react";
import Loading from "../components/loading";
import Toast from "../components/Toast";

const initState = {
  toast: { type: "info", message: "" },
  title: "",
  postId: 1,
  loading: true,
};
const actionTypes = {
  GET_POST_SUCCESS: "get-post-success",
  GET_POST_REQUEST: "get-post-request",
};
const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.GET_POST_SUCCESS:
      return {
        ...state,
        toast: { type: "success", message: action.message },
        title: action.title,
        loading: false,
      };
    case actionTypes.GET_POST_REQUEST:
      return {
        ...state,
        postId: action.postId,
        loading: true,
      };
    default:
      return state;
  }
};

function ToastLoading() {
  const [{ toast, postId, title, loading }, dispatch] = useReducer(
    reducer,
    initState
  );

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((post) => {
        dispatch({
          type: actionTypes.GET_POST_SUCCESS,
          title: post.title,
          message: `Post with Id ${postId} loaded`,
        });
      });
  }, [postId]);

  const handlePost = (event) => {
    dispatch({
      type: actionTypes.GET_POST_REQUEST,
      postId: event.target.value,
    });
  };
  return (
    <div className="container">
      <div>
        <label>post Id</label>
        <input
          type="number"
          value={postId}
          onChange={(event) => handlePost(event)}
        />
      </div>
      <Toast type={toast.type} message={toast.message} />
      <div>{loading ? <Loading /> : <h1>{title}</h1>}</div>
    </div>
  );
}

export default ToastLoading;
