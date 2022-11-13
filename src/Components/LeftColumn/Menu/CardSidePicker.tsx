import { useCallback } from 'react';
import type React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Switch } from '@mui/material';

import { switchCardSide } from '../../../slices/CardSide.slice';

const StyledCardSidePicker = styled.div`
  min-width: 205px;
`;

export function CardSidePicker() {
  const cardSide = useSelector((state: any) => state.cardSide);
  const dispatch = useDispatch();

  const check = useCallback(
    function (e: React.ChangeEvent<HTMLInputElement>) {
      if (cardSide !== e.currentTarget.value) dispatch(switchCardSide());
    },
    [cardSide]
  );

  return (
    <StyledCardSidePicker className="cardSidePickerContainer">
      <label>
        Front:
        <Switch value="front" checked={cardSide === 'front'} onChange={check} />
      </label>
      <label>
        Back:
        <Switch value="back" checked={cardSide === 'back'} onChange={check} />
      </label>
    </StyledCardSidePicker>
  );
}
