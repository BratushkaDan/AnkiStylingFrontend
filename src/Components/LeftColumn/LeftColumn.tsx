import styled from 'styled-components';

const StyledLeftColumn = styled.div`
  overflow-y: hidden;
`;

export const LeftColumn = (props: any) => {
  return <StyledLeftColumn className={props.className}>{props.children}</StyledLeftColumn>;
};
