import {
    EMPLOYEE_LIST_REQUEST,
    EMPLOYEE_LIST_SUCCESS,
    EMPLOYEE_LIST_FAIL,
    EMPLOYEE_DETAILS_REQUEST,
    EMPLOYEE_DETAILS_SUCCESS,
    EMPLOYEE_DETAILS_FAIL,
   } from "../constants/employee.constants";
   
   export const employeeListReducer = (state = { employees: [] }, action) => {
     switch (action.type) {
       case EMPLOYEE_LIST_REQUEST:
         return { loading: true, employees: [] };
       case EMPLOYEE_LIST_SUCCESS:
         return { loading: false, employees: action.payload };
       case EMPLOYEE_LIST_FAIL:
         return { loading: false, error: action.payload };
       default:
         return state;
     }
   };
   
   export const employeeDetailsReducer = (state = {employee: {} }, action) => {
     switch (action.type) {
       case EMPLOYEE_DETAILS_REQUEST:
         return { loading: true, ...state };
       case EMPLOYEE_DETAILS_SUCCESS:
         return { loading: false, employee: action.payload };
       case EMPLOYEE_DETAILS_FAIL:
         return { loading: false, error: action.payload };
       default:
         return state;
     }
   };