import {combineReducers} from "@reduxjs/toolkit";

import formFieldReducer from '../slices/Field.slice';
import pickLanguageReducer from "../slices/Language.slice";

export default combineReducers({
  inputFields: formFieldReducer,
  language: pickLanguageReducer
})