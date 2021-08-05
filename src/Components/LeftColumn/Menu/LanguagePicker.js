import { useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './LanguagePicker.scss';

import { pickLanguage } from "../../../slices/Language.slice";

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
      <option value="react">ReactJS</option>
      <option value="less">Less</option>
      <option value="javascript">JavaScript</option>
      <option value="typescript">TypeScript</option>
      <option value="json">JSON</option>
      <option value="graphql">GraphQL</option>
      <option value="python">Python</option>
      <option value="rust">Rust</option>
      <option value="c">C</option>
      <option value="cpp">C++</option>
      <option value="cmake">CMake</option>
      <option value="cs">C#</option>
      <option value="mongo">MongoDB</option>
      <option value="sql">SQL</option>
      <option value="dart">Dart</option>
      <option value="bash">Bash (Terminal)</option>
      <option value="java">Java</option>
      <option value="kotlin">Kotlin</option>
    </select>
  </div>
}