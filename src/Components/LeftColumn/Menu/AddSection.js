import './AddSection.scss';
import {addField} from "../../../slices/Field.slice";
import {useSelector, useDispatch} from "react-redux";

import {useShortcut} from "../../../hooks/hooks";

export default function AddSection() {
  const language = useSelector(state => state.language);
  const dispatch = useDispatch();

  useShortcut(handleAddComment, ['alt', 'r']);
  useShortcut(handleAddSnippet, ['alt', 't'], [language]);

  function handleAddComment() {
    dispatch(addField({type: 'comment'}))
  }

  function handleAddSnippet() {
    if (language !== '') dispatch(addField({type: 'code', language}));
  }

  return <div className="addSection">
      <span onClick={handleAddComment}>💬</span>
      <span onClick={handleAddSnippet}>👨‍💻</span>
  </div>
}