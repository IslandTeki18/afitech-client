import {
  TESTIMONIAL_LIST_REQUEST,
  TESTIMONIAL_LIST_SUCCESS,
  TESTIMONIAL_LIST_FAIL,
  TESTIMONIAL_DETAILS_REQUEST,
  TESTIMONIAL_DETAILS_SUCCESS,
  TESTIMONIAL_DETAILS_FAIL,
} from "../constants/testimonial.constants";
import axios from "axios";
const serverUrl =
  process.env.NODE_ENV === "production"
    ? `${process.env.REACT_APP_HEROKU_URL}api/testimonials`
    : "api/testimonials";

export const listTestimonials = () => async (dispatch) => {
  try {
    dispatch({ type: TESTIMONIAL_LIST_REQUEST });
    const { data } = await axios.get(`${serverUrl}`);
    dispatch({ type: TESTIMONIAL_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: TESTIMONIAL_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const detailTestimonial = (id) => async (dispatch) => {
  try {
    dispatch({ type: TESTIMONIAL_DETAILS_REQUEST });
    const { data } = await axios.get(`${serverUrl}/${id}`);
    dispatch({ type: TESTIMONIAL_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: TESTIMONIAL_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
