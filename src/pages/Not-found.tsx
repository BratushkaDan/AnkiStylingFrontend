import type { FC } from 'react';
import styled from 'styled-components';

import NotFoundIllustration from '../assets/404.png';

const StyledNotFoundPage = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

export const NotFoundPage: FC<{}> = () => {
  return (
    <StyledNotFoundPage>
      <h1>Страница не найдена!</h1>
      <p>Каталог страниц можно найти в меню выше</p>
      <img src={NotFoundIllustration} />
    </StyledNotFoundPage>
  );
};
