import {createSlice, nanoid} from '@reduxjs/toolkit';

import * as highlightSyntax from '../../modules/anki/highlight';

const formFieldSlice = createSlice({
  name: 'inputFields',
  initialState: [],
  reducers: {
    addField: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: ({type, language, highlightedMarkup}) => {
        return {payload: {type, language, value: '', highlightedMarkup, id: nanoid()}};
      }
    },
    modifyField: (state, action) => state.map(field => {
      if (field.id !== action.payload.id) return field;
      return { ...field, value: action.payload.value, highlightedMarkup: action.payload.highlightedMarkup }
    }),
    removeField: (state, action) => state.filter(field => {
      return field.id !== action.payload
    }),
    wipeFields: (state, action) => action.payload
  }
})

const {
  addField: addFieldAction,
  modifyField: modifyFieldAction,
  wipeFields: wipeFieldsAction
} = formFieldSlice.actions;
export const { removeField } = formFieldSlice.actions;
export default formFieldSlice.reducer;

/* addField-thunk consuming highlightSyntax Promise API */
export function addField({type, language = null}) {
  return async function(dispatch) {
    if (type === 'comment') language = 'comment';
    let highlightedMarkup = await highlightSyntax[language]('');
    return dispatch(addFieldAction({ type, language, highlightedMarkup }));
  }
}
/* modifyField-thunk consuming highlightSyntax Promise API */
export function modifyField({id, value}) {
  return async function(dispatch, getState) {
    let fieldLanguage = getState().inputFields.find(field => field.id === id).language;
    let highlightedMarkup = await highlightSyntax[fieldLanguage](value);
    return dispatch(modifyFieldAction({ id, value, highlightedMarkup }));
  }
}
/* wipeFields-thunk consuming highlightSyntax Promise API */
export function wipeFields() {
  return async function(dispatch, getState) {
    let commentField = {type: 'comment', language: 'comment', value: '', highlightedMarkup: await highlightSyntax['comment'](''), id: nanoid()};
    
    /* disabled feature */
    // let language = getState().language;
    // if (language !== '') {
    //   let codeField = {type: 'code', language, value: '', highlightedMarkup: '', id: nanoid()}
    //   return dispatch(wipeFieldsAction([commentField, codeField]));
    // }
    return dispatch(wipeFieldsAction([commentField]));

  }
}