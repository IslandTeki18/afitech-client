import {
    PROJECT_LIST_REQUEST,
    PROJECT_LIST_SUCCESS,
    PROJECT_LIST_FAIL,
    PROJECT_DETAILS_REQUEST,
    PROJECT_DETAILS_SUCCESS,
    PROJECT_DETAILS_FAIL,
  } from "../constants/project.constants";
  import axios from "axios";
  const serverUrl = process.env.NODE_ENV === "production" ? "https://protected-oasis-46723.herokuapp.com/api/projects" : "api/projects";
  
  export const listProjects = () => async (dispatch) => {
    try {
      dispatch({ type: PROJECT_LIST_REQUEST });
      const { data } = await axios.get(`${serverUrl}`);
      dispatch({ type: PROJECT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: PROJECT_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  
  export const detailProject = (id) => async (dispatch) => {
    try {
      dispatch({ type: PROJECT_DETAILS_REQUEST });
      const { data } = await axios.get(`${serverUrl}/${id}`);
      dispatch({ type: PROJECT_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: PROJECT_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };