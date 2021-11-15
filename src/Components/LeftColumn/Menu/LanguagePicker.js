import { useEffect, useLayoutEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Select, MenuItem } from '@mui/material';
import './LanguagePicker.scss';
import { languageSelectOptions } from '../../../common/languageSelectOptions.ts';
import { pickLanguage } from "../../../slices/Language.slice";

export default function LanguagePicker() {
  const language = useSelector(state => state.language);
  const dispatch = useDispatch();

  const mapSelectOptions = useCallback(() => {
    return Object.keys(languageSelectOptions).map(key => <MenuItem value={key} key={key}>{languageSelectOptions[key]}</MenuItem>)
  }, []);

  /* preload prism modules to prevent freeze for the first time */
  useEffect(() => {
    import('../../../modules/anki/highlight');
  }, [])

  useLayoutEffect(() => {
    let pl = window.localStorage.getItem('language');
    if (pl) dispatch(pickLanguage(pl));
  }, [])

  function handleLanguagePick(e) {
    dispatch(pickLanguage(e.target.value))
    window.localStorage.setItem('language', e.target.value);
  }

  return <div className="languagePicker">
    <Select
      id="programming-language-select"
      value={language}
      onChange={handleLanguagePick}
      style={{
        color: '#fff',
        border: '1px solid #fff',
        width: '150px',
        height: '2em'
      }}
    >
      {mapSelectOptions()}
    </Select>
  </div>
}