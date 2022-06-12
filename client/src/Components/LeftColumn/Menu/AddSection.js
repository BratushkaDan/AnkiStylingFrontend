import './AddSection.scss';
import {addField} from "../../../slices/Field.slice";
import {useSelector, useDispatch} from "react-redux";
import CodeIcon from '@mui/icons-material/Code';
import CommentIcon from '@mui/icons-material/Comment';

import {useShortcut} from "../../../hooks";

const addIconStyle = { width: 24, height: 24 };

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
      <span title="Add comment">
        <CommentIcon style={addIconStyle} onClick={handleAddComment} />
      </span>
      <span title="Add code snippet">
        <CodeIcon style={addIconStyle} onClick={handleAddSnippet} />  
      </span>
  </div>
}