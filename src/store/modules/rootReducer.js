import { combineReducers } from "redux";

import auth from "./auth/reducer";
import user from "./user/reducer";
import enrollment from "./enrollment/reducer";
import courses from './courses/reducer';

export default combineReducers({ auth, user, enrollment, courses });