import styled from 'styled-components'

const StyledFooter = styled.div`
  min-height: 50px;
  background: var(--main-background-color-2);

  display: flex;
  justify-content: center;
  align-items: center;


  & > .text {
    text-align: center;
  }

  @media (min-width: 992px) {
    & > .text {
      font-size: 1.5rem;
    }
  }
  
`

export const Footer = () => {
  return <StyledFooter>
    <div className="text">&copy; Братушка Данила 2020-2022. ❤️</div>
  </StyledFooter>;
};
