import styled from 'styled-components';

import LanguagePicker from './Menu/LanguagePicker';
import { AddSection } from './Menu/AddSection';
import { CardSidePicker } from './Menu/CardSidePicker';

const StyledMenu = styled.div`
  display: flex;
  justify-content: flex-start;

  @media (max-width: 776px) {
    flex-direction: column;

    & > :nth-child(2) {
      order: 1;
    }
  }

  @media (min-width: 777px) {
    & > *:nth-child(n + 2) {
      margin-left: 1em;
    }
  }
`;

export const Menu = ({ className }: { className?: string }) => {
  return (
    <StyledMenu className={className}>
      <LanguagePicker />
      <CardSidePicker />
      <AddSection />
    </StyledMenu>
  );
};
