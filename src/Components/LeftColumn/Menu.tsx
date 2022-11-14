import styled from 'styled-components';

import LanguagePicker from './Menu/LanguagePicker';
import { AddSection } from './Menu/AddSection';
import { CardSidePicker } from './Menu/CardSidePicker';

const StyledMenu = styled.div`
  display: flex;
  justify-content: flex-start;
  
  margin-top: 12px;
  
  @media (max-width: 1190px) {
    flex-direction: column;

    & > :nth-child(2) {
      order: 1;
    }

    & > * {
      margin-left: 0!important;
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
