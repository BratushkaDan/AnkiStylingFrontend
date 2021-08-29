import * as React from 'react';
import { useSelector, useDispatch } from "react-redux";

import {switchCardSide} from "../../../slices/CardSide.slice";

export default function CardSidePicker() {
  const cardSide = useSelector(state => state.cardSide);
  const dispatch = useDispatch();

  function handleCheck(e) {
    cardSide !== e.currentTarget.value && dispatch(switchCardSide())
  }

  return (<div className="cardSidePickerContainer">

      <label>
        Front:
        <input type="checkbox" value="front" checked={cardSide === 'front'} onChange={handleCheck}/>
      </label>
      <label>
        Back:
        <input type="checkbox" value="back" checked={cardSide === 'back'} onChange={handleCheck}/>
      </label>
  </div>);
}