import { createSlice } from '@reduxjs/toolkit';

const languagePickerSlice = createSlice({
  name: 'language',
  initialState: '',
  reducers: {
    pickLanguage: (state, action) => action.payload
  }
})

export const { pickLanguage } = languagePickerSlice.actions;
export default languagePickerSlice.reducer;