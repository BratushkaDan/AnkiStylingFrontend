import { Link } from 'react-router-dom';
import styled from 'styled-components';
import type { FC } from 'react';

import MarkdownDemoImg from '../assets/markdown-demo.png';
import MarkdownDemoImg2 from '../assets/markdown-2.png';
import MarkdownDemoImg3 from '../assets/markdown-3.png';

export const StyledMarkdownDocumentation = styled.div`
  max-width: clamp(400px, 90%, 1444px);
  margin: 0 auto 20px;

  & a {
    color: var(--link-color);
    text-decoration: inherit;
  }

  & h1 {
    font-size: 2.5rem;
  }

  & h2 {
    font-size: 2rem;
  }

  & h2.overview {
    margin-top: 50px;
    text-align: center;
  }

  & .basic-syntax-container,
  & .extended-syntax-container {
    margin-top: 50px;
    
    width: 100%;

    display: grid;
    grid-template-columns: 5fr 5fr;
    align-items: center;
    column-gap: 30px;

    @media (max-width: 992px) {
      grid-template-columns: 1fr;
      row-gap: 25px;

      img {
        order: 1;
      }
    }

    & > img {
      width: 100%;
    }

    & h2 {
      margin-top: 0;
    }
  }

  & .extended-syntax-container {
    & h2 {
      margin-top: 25px;
    }
  }

  & tr > td:nth-child(n + 2) {
    padding-left: 30px;
  }
`;

export const MarkdownDocumentation: FC<{}> = () => {
  return (
    <StyledMarkdownDocumentation>
      <h1>Markdown</h1>
      <p>
        Markdown - язык разметки, позволяющий быстро придавать стили тексту, используя только печать (не обращаться к
        пользовательскому интерфейсу).
      </p>
      <p>
        <Link to="/app">В приложении</Link> Markdown используется в секции "комментарии" — позволяет различным образом
        оформлять текст при создании карточек
      </p>
      <p>
        Markdown работает примерно следующим образом: (слева - разметка, вводимая пользователем; справа - внешний вид
        комментария в карточке)
      </p>
      <div>
        <img src={MarkdownDemoImg} />
      </div>
      <div>
        <h2 className="overview">Обзор</h2>
        <p>
          Эта шпаргалка по Markdown предоставляет краткий обзор синтаксиса элементов разметки Markdown.
          Она не покрывает каждый граничный случай, поэтому для изучения профессиональной разметки с Markdown Вам стоит обратиться к более подробному источнику.
        </p>
        <p>Эта же шпаргалка покрывает нужды большой части пользователей: <a href="#basic-syntax">базовый синтаксис</a> и <a href="#extended-syntax">продвинутый синтаксис</a>.</p>
        <div className="basic-syntax-container">
          <div>
            <h2 id="basic-syntax">Базовые возможности</h2>
            <p>
              В таблице представлены самые базовые элементы, предоставляющие возможность создания незамысловатой, но полезной и структурированной разметки текста.
            </p>
            <table className="table table-bordered">
              <thead className="thead-light">
                <tr>
                  <th>Элемент</th>
                  <th>Синтаксис Markdown</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Заголовок</td>
                  <td>
                    <code>
                      # H1
                      <br />
                      ## H2
                      <br />
                      ### H3
                    </code>
                  </td>
                </tr>
                <tr>
                  <td>Полужирный</td>
                  <td>
                    <code>**bold text**</code>
                  </td>
                </tr>
                <tr>
                  <td>Наклонный</td>
                  <td>
                    <code>*italicized text*</code>
                  </td>
                </tr>
                <tr>
                  <td>Цитата</td>
                  <td>
                    <code>&gt; blockquote</code>
                  </td>
                </tr>
                <tr>
                  <td>Нумерованный список</td>
                  <td>
                    <code>
                      1. First item
                      <br />
                      2. Second item
                      <br />
                      3. Third item
                      <br />
                    </code>
                  </td>
                </tr>
                <tr>
                  <td>Ненумерованный список</td>
                  <td>
                    <code>
                      - First item
                      <br />
                      - Second item
                      <br />
                      - Third item
                      <br />
                    </code>
                  </td>
                </tr>
                <tr>
                  <td>Код</td>
                  <td>
                    <code>`code`</code>
                  </td>
                </tr>
                <tr>
                  <td>Горизонтальная линия</td>
                  <td>
                    <code>---</code>
                  </td>
                </tr>
                <tr>
                  <td>Ссылка</td>
                  <td>
                    <code>[title](https://www.example.com)</code>
                  </td>
                </tr>
                <tr>
                  <td>Изображение</td>
                  <td>
                    <code>![alt text](image.jpg)</code>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <img src={MarkdownDemoImg2} />
        </div>
        <div className="extended-syntax-container">
          <img src={MarkdownDemoImg3} />
          <div>
            <h2 id="extended-syntax">Продвинутые возможности</h2>
            <p>
              В этом разделе можно ознакомиться с продвинутыми возможностями Markdown — опциями,
              позволяющими в полной мере ощутить мощь языка разметки Markdown при редактировании текста.
            </p>
            <table className="table table-bordered">
              <thead className="thead-light">
                <tr>
                  <th>Элемент</th>
                  <th>Синтаксис Markdown</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Таблица</td>
                  <td>
                    <code>
                      | Синтаксис | Описание |<br />
                      | ----------- | ----------- |<br />
                      | Заголовок | Шапка |<br />| Параграф | Текст |
                    </code>
                  </td>
                </tr>
                <tr>
                  <td>Многострочный блок кода</td>
                  <td>
                    <code>
                      ```
                      <br />
                      {'{'}
                      <br />
                      &nbsp;&nbsp;"firstName": "John",
                      <br />
                      &nbsp;&nbsp;"lastName": "Smith",
                      <br />
                      &nbsp;&nbsp;"age": 25
                      <br />
                      {'}'}
                      <br />
                      ```
                    </code>
                  </td>
                </tr>
                <tr>
                  <td>Сноска</td>
                  <td>
                    <code>
                      Предложение со сноской. [^1]
                      <br />
                      <br />
                      [^1]: Это сноска.
                    </code>
                  </td>
                </tr>
                <tr>
                  <td>Идентификатор заголовка</td>
                  <td>
                    <code>
                      ### My Great Heading {'{'}#custom-id{'}'}
                    </code>
                  </td>
                </tr>
                <tr>
                  <td>Список определений</td>
                  <td>
                    <code>
                      термин
                      <br />: определение
                    </code>
                  </td>
                </tr>
                <tr>
                  <td>Перечеркивание</td>
                  <td>
                    <code>~~The world is flat.~~</code>
                  </td>
                </tr>
                <tr>
                  <td>Список задач</td>
                  <td>
                    <code>
                      - [x] Write the press release
                      <br />
                      - [ ] Update the website
                      <br />- [ ] Contact the media
                    </code>
                  </td>
                </tr>
                <tr>
                  <td>Эмоджи</td>
                  <td>
                    <code>That is so funny! :joy:</code>
                  </td>
                </tr>
                <tr>
                  <td>Подсветка фрагмента</td>
                  <td>
                    <code>I need to highlight these ==very important words==.</code>
                  </td>
                </tr>
                <tr>
                  <td>Нижний индекс</td>
                  <td>
                    <code>H~2~O</code>
                  </td>
                </tr>
                <tr>
                  <td>Верхний индекс</td>
                  <td>
                    <code>X^2^</code>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </StyledMarkdownDocumentation>
  );
};
