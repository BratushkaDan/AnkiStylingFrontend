import styled from 'styled-components';

import { LeftColumn } from '../Components/LeftColumn/LeftColumn';
import { RightColumn } from '../Components/RightColumn/RightColumn';
import { RendererField } from '../Components/RightColumn/RendererField';
import { Menu } from '../Components/LeftColumn/Menu';
import { FormField } from '../Components/LeftColumn/FormField';

const StyledApplication = styled.div`
  width: 100%;

  margin: 0 auto;
  display: grid;
  grid-template-columns: 40% 60%;
  grid-column-gap: 2px;

  & > div {
    margin: 0 1vw;
  }
`;

export const Application = () => {
  return (
    <StyledApplication>
      <LeftColumn>
        <Menu />
        <FormField />
      </LeftColumn>
      <RightColumn>
        <RendererField />
      </RightColumn>
    </StyledApplication>
  );
};
