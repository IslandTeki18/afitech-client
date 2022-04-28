import {
    EMPLOYEE_LIST_REQUEST,
    EMPLOYEE_LIST_SUCCESS,
    EMPLOYEE_LIST_FAIL,
    EMPLOYEE_DETAILS_REQUEST,
    EMPLOYEE_DETAILS_SUCCESS,
    EMPLOYEE_DETAILS_FAIL,
  } from "../constants/employee.constants";
  import axios from "axios";
  const serverUrl = process.env.NODE_ENV === "production" ? "https://protected-oasis-46723.herokuapp.com/api/employees" : "api/employees";
  
  export const listEmployees = () => async (dispatch) => {
    try {
      dispatch({ type: EMPLOYEE_LIST_REQUEST });
      const { data } = await axios.get(`${serverUrl}`);
      dispatch({ type: EMPLOYEE_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: EMPLOYEE_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  
  export const detailEmployee = (id) => async (dispatch) => {
    try {
      dispatch({ type: EMPLOYEE_DETAILS_REQUEST });
      const { data } = await axios.get(`${serverUrl}/${id}`);
      dispatch({ type: EMPLOYEE_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: EMPLOYEE_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };