import { useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './LanguagePicker.scss';

import { pickLanguage } from "./LanguagePicker.slice";

export default function LanguagePicker() {
  const language = useSelector(state => state.language);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    let pl = window.localStorage.getItem('language');
    if (pl) dispatch(pickLanguage(pl));
  }, [])

  function handleLanguagePick(e) {
    dispatch(pickLanguage(e.currentTarget.value))
    window.localStorage.setItem('language', e.currentTarget.value);
  }

  return <div className="languagePicker">
    <select value={language} onChange={handleLanguagePick}>
      <option value=""/>
      <option value="html">HTML</option>
      <option value="css">CSS</option>
      <option value="scss">SCSS</option>
      <option value="javascript">JavaScript</option>
      <option value="typescript">TypeScript</option>
      <option value="react">ReactJS</option>
      <option value="json">JSON</option>
    </select>
  </div>
}