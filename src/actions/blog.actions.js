import {
    BLOG_LIST_REQUEST,
    BLOG_LIST_SUCCESS,
    BLOG_LIST_FAIL,
    BLOG_DETAILS_REQUEST,
    BLOG_DETAILS_SUCCESS,
    BLOG_DETAILS_FAIL,
  } from "../constants/blog.constants";
  import axios from "axios";
  const serverUrl = "https://protected-oasis-46723.herokuapp.com/api/blogs";
  
  export const listBlogs = () => async (dispatch) => {
    try {
      dispatch({ type: BLOG_LIST_REQUEST });
      const { data } = await axios.get(`${serverUrl}`);
      dispatch({ type: BLOG_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: BLOG_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  
  export const detailBlog = (id) => async (dispatch) => {
    try {
      dispatch({ type: BLOG_DETAILS_REQUEST });
      const { data } = await axios.get(`${serverUrl}/${id}`);
      dispatch({ type: BLOG_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: BLOG_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };