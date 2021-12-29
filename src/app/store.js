import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  projectDetailsReducer,
  projectListReducer,
} from "../reducers/project.reducers";
import { blogDetailsReducer, blogListReducer } from "../reducers/blog.reducers";
import {
  testimonialDetailsReducer,
  testimonialListReducer,
} from "../reducers/testimonial.reducers";
import {
  serviceDetailsReducer,
  serviceListReducer,
} from "../reducers/service.reducers";
import {
    employeeDetailsReducer,
    employeeListReducer,
  } from "../reducers/employee.reducers";

const reducer = combineReducers({
  projectList: projectListReducer,
  projectDetails: projectDetailsReducer,
  blogList: blogListReducer,
  blogDetails: blogDetailsReducer,
  testimonialList: testimonialListReducer,
  testimonialDetails: testimonialDetailsReducer,
  serviceList: serviceListReducer,
  serviceDetails: serviceDetailsReducer,
  employeeList: employeeListReducer,
  employeeDetails: employeeDetailsReducer,
});

const initialState = {};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
