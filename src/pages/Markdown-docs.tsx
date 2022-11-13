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
          This Markdown cheat sheet provides a quick overview of all the Markdown syntax elements. It can’t cover every
          edge case, so if you need more information about any of these elements, refer to the reference guides for{' '}
          <a href="#basic-syntax">basic syntax</a> and <a href="#extended-syntax">extended syntax</a>.
        </p>
        <div className="basic-syntax-container">
          <div>
            <h2 id="basic-syntax">Базовые возможности</h2>
            <p>
              These are the elements outlined in John Gruber’s original design document. All Markdown applications
              support these elements.
            </p>
            <table className="table table-bordered">
              <thead className="thead-light">
                <tr>
                  <th>Element</th>
                  <th>Markdown Syntax</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Heading</td>
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
                  <td>Bold</td>
                  <td>
                    <code>**bold text**</code>
                  </td>
                </tr>
                <tr>
                  <td>Italic</td>
                  <td>
                    <code>*italicized text*</code>
                  </td>
                </tr>
                <tr>
                  <td>Blockquote</td>
                  <td>
                    <code>&gt; blockquote</code>
                  </td>
                </tr>
                <tr>
                  <td>Ordered List</td>
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
                  <td>Unordered List</td>
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
                  <td>Code</td>
                  <td>
                    <code>`code`</code>
                  </td>
                </tr>
                <tr>
                  <td>Horizontal Rule</td>
                  <td>
                    <code>---</code>
                  </td>
                </tr>
                <tr>
                  <td>Link</td>
                  <td>
                    <code>[title](https://www.example.com)</code>
                  </td>
                </tr>
                <tr>
                  <td>Image</td>
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
              These elements extend the basic syntax by adding additional features. Not all Markdown applications
              support these elements.
            </p>
            <table className="table table-bordered">
              <thead className="thead-light">
                <tr>
                  <th>Element</th>
                  <th>Markdown Syntax</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Table</td>
                  <td>
                    <code>
                      | Syntax | Description |<br />
                      | ----------- | ----------- |<br />
                      | Header | Title |<br />| Paragraph | Text |
                    </code>
                  </td>
                </tr>
                <tr>
                  <td>Fenced Code Block</td>
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
                  <td>Footnote</td>
                  <td>
                    <code>
                      Here's a sentence with a footnote. [^1]
                      <br />
                      <br />
                      [^1]: This is the footnote.
                    </code>
                  </td>
                </tr>
                <tr>
                  <td>Heading ID</td>
                  <td>
                    <code>
                      ### My Great Heading {'{'}#custom-id{'}'}
                    </code>
                  </td>
                </tr>
                <tr>
                  <td>Definition List</td>
                  <td>
                    <code>
                      term
                      <br />: definition
                    </code>
                  </td>
                </tr>
                <tr>
                  <td>Strikethrough</td>
                  <td>
                    <code>~~The world is flat.~~</code>
                  </td>
                </tr>
                <tr>
                  <td>Task List</td>
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
                  <td>Emoji</td>
                  <td>
                    <code>That is so funny! :joy:</code>
                  </td>
                </tr>
                <tr>
                  <td>Highlight</td>
                  <td>
                    <code>I need to highlight these ==very important words==.</code>
                  </td>
                </tr>
                <tr>
                  <td>Subscript</td>
                  <td>
                    <code>H~2~O</code>
                  </td>
                </tr>
                <tr>
                  <td>Superscript</td>
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
