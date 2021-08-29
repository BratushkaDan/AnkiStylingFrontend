import './AddSection.scss';
import {addField} from "../../../slices/Field.slice";
import {useSelector, useDispatch} from "react-redux";

import {useShortcut} from "../../../hooks/hooks";

export default function AddSection() {
  const cardSide = useSelector(state => state.cardSide);
  const language = useSelector(state => state.language);
  const dispatch = useDispatch();

  useShortcut(handleAddComment, ['alt', 'r']);
  useShortcut(handleAddSnippet, ['alt', 't'], [language]);

  function handleAddComment() {
    dispatch(addField({type: 'comment', side: cardSide}))
  }

  function handleAddSnippet() {
    if (language !== '') dispatch(addField({type: 'code', language, side: cardSide}));
  }

  return <div className="addSection">
      <span onClick={handleAddComment}>💬</span>
      <span onClick={handleAddSnippet}>👨‍💻</span>
  </div>
}