import {
  TESTIMONIAL_LIST_REQUEST,
  TESTIMONIAL_LIST_SUCCESS,
  TESTIMONIAL_LIST_FAIL,
  TESTIMONIAL_DETAILS_REQUEST,
  TESTIMONIAL_DETAILS_SUCCESS,
  TESTIMONIAL_DETAILS_FAIL,
} from "../constants/testimonial.constants";

export const testimonialListReducer = (
  state = { testimonials: [] },
  action
) => {
  switch (action.type) {
    case TESTIMONIAL_LIST_REQUEST:
      return { loading: true, testimonials: [] };
    case TESTIMONIAL_LIST_SUCCESS:
      return { loading: false, testimonials: action.payload };
    case TESTIMONIAL_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const testimonialDetailsReducer = (
  state = { testimonial: {} },
  action
) => {
  switch (action.type) {
    case TESTIMONIAL_DETAILS_REQUEST:
      return { loading: true, ...state };
    case TESTIMONIAL_DETAILS_SUCCESS:
      return { loading: false, testimonial: action.payload };
    case TESTIMONIAL_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
