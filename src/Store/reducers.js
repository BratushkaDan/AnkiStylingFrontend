import {combineReducers} from "@reduxjs/toolkit";

import formFieldReducer from '../Components/LeftColumn/FormField.slice.js';
import pickLanguageReducer from "../Components/LeftColumn/Menu/LanguagePicker.slice";

export default combineReducers({
  inputFields: formFieldReducer,
  language: pickLanguageReducer
})