import { useRef, useCallback } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { Form } from './Form';
import { useTopWindowOffset } from '../../hooks';

const StyleFormField = styled.div`
  overflow-y: auto;
  box-sizing: border-box;
  padding: 0 0.3em 0.6em 0;

  &::-webkit-scrollbar {
    width: 0.5rem;
    background: hsl(170, 20%, 70%);
  }

  &::-webkit-scrollbar-button {
    height: 0;
  }

  &::-webkit-scrollbar-thumb {
    background: hsl(170, 20%, 50%);
  }
`;

export const FormField = ({ className }: { className?: string }) => {
  const inputFields = useSelector<any>((state) => state.inputFields) as any[];
  const currentCardSide = useSelector<any>((state) => state.cardSide);

  const formFieldRef = useRef(null);
  const fieldOffset = useTopWindowOffset('20vh', formFieldRef);

  const processInputFields = useCallback(() => {
    return inputFields
      .filter((field) => field.side === currentCardSide)
      .map((field) => <Form key={field.id} {...field} />);
  }, [inputFields, currentCardSide]);

  return (
    <StyleFormField ref={formFieldRef} className={className} style={{ height: `calc(100vh - ${fieldOffset})` }}>
      {processInputFields()}
    </StyleFormField>
  );
};
