import './AddSection.scss';
import {addField} from "../FormField.slice";
import {useSelector, useDispatch} from "react-redux";

export default function AddSection() {
  const language = useSelector(state => state.language);
  const dispatch = useDispatch();

  function handleAddComment() {
    dispatch(addField('comment'))
  }

  function handleAddSnippet() {
    if (language !== '') dispatch(addField('code', language));
  }

  return <div className="addSection">
      <button onClick={handleAddComment}>Добавить Комментарий</button>
      <button onClick={handleAddSnippet} disabled={language === ''}>Добавить Фрагмент Кода</button>
  </div>
}