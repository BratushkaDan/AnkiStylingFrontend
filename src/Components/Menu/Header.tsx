import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import AnkiIcon from '../../assets/anki.png';
import { Themes, useThemeSwitcher } from '../../hooks/useThemeLoader';
import { red } from '@mui/material/colors';

const StyledHeader = styled.header`
  display: flex;

  width: 100%;
  justify-content: flex-end;
  align-items: center;

  & > .icon-container {
    margin-right: auto;

    width: 46px;
    height: 46px;
    background-image: url('${AnkiIcon}') 46px 46px center no-repeat;
  }

  & > :first-child {
    margin-left: 20px;
    cursor: pointer;
  }

  & > :last-child {
    margin-right: 20px;
  }

  background: var(--main-background-color-2);

  & svg {
    cursor: pointer;
  }
  svg.light-mode-icon:hover {
    animation: light-mode-glow 0.2s linear forwards;
  }
  svg.dark-mode-icon:hover {
    animation: dark-mode-glow 0.2s linear forwards;
  }

  @keyframes light-mode-glow {
    from {
      fill: #000;
    }

    to {
      fill: orange;
      transform: scale(1.01);
    }
  }
  @keyframes dark-mode-glow {
    from {
      fill: #fff;
    }

    to {
      fill: purple;
      transform: scale(1.01);
    }
  }

  nav {
    margin-right: auto;
  }

  nav > ul {
    min-width: 400px;
    width: 60vw;
    display: flex;
    justify-content: space-evenly;
  }

  nav a {
    color: inherit;
    text-decoration: inherit;
  }

  nav ul li {
    list-style-type: none;

    cursor: pointer;
    transition: transform 0.3s linear, color 0.3s linear;
  }

  nav ul li:hover {
    transform: scale(1.2);
    color: salmon;
  }

  @media (max-width: 650px) {
    .wide-screen-navigation {
      display: none;
    }
    nav.narrow-screen-navigation {
      margin-right: 30px !important;
    }
  }
  @media (min-width: 650px) {
    nav.narrow-screen-navigation {
      display: none;
    }
  }
`;

const LightModeIcon = ({ width = '46', height = '46', fill = '#000' }) => {
  return (
    <svg className="light-mode-icon" viewBox="0 0 512 512" width={width} height={height} fill={fill}>
      <g>
        <g>
          <path d="m256,105.5c-83.9,0-152.2,68.3-152.2,152.2 0,83.9 68.3,152.2 152.2,152.2 83.9,0 152.2-68.3 152.2-152.2 0-84-68.3-152.2-152.2-152.2zm0,263.5c-61.4,0-111.4-50-111.4-111.4 0-61.4 50-111.4 111.4-111.4 61.4,0 111.4,50 111.4,111.4 0,61.4-50,111.4-111.4,111.4z" />
          <path d="m256,74.8c11.3,0 20.4-9.1 20.4-20.4v-23c0-11.3-9.1-20.4-20.4-20.4-11.3,0-20.4,9.1-20.4,20.4v23c2.84217e-14,11.3 9.1,20.4 20.4,20.4z" />
          <path d="m256,437.2c-11.3,0-20.4,9.1-20.4,20.4v22.9c0,11.3 9.1,20.4 20.4,20.4 11.3,0 20.4-9.1 20.4-20.4v-22.9c0-11.2-9.1-20.4-20.4-20.4z" />
          <path d="m480.6,235.6h-23c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4h23c11.3,0 20.4-9.1 20.4-20.4 0-11.3-9.1-20.4-20.4-20.4z" />
          <path d="m54.4,235.6h-23c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4h22.9c11.3,0 20.4-9.1 20.4-20.4 0.1-11.3-9.1-20.4-20.3-20.4z" />
          <path d="M400.4,82.8L384.1,99c-8,8-8,20.9,0,28.9s20.9,8,28.9,0l16.2-16.2c8-8,8-20.9,0-28.9S408.3,74.8,400.4,82.8z" />
          <path d="m99,384.1l-16.2,16.2c-8,8-8,20.9 0,28.9 8,8 20.9,8 28.9,0l16.2-16.2c8-8 8-20.9 0-28.9s-20.9-7.9-28.9,0z" />
          <path d="m413,384.1c-8-8-20.9-8-28.9,0-8,8-8,20.9 0,28.9l16.2,16.2c8,8 20.9,8 28.9,0 8-8 8-20.9 0-28.9l-16.2-16.2z" />
          <path d="m99,127.9c8,8 20.9,8 28.9,0 8-8 8-20.9 0-28.9l-16.2-16.2c-8-8-20.9-8-28.9,0-8,8-8,20.9 0,28.9l16.2,16.2z" />
        </g>
      </g>
    </svg>
  );
};
const DarkModeIcon = ({ width = '46', height = '46', fill = '#fff' }) => {
  return (
    <>
      <svg
        className="dark-mode-icon"
        width={width}
        height={height}
        fill={fill}
        viewBox="0 0 35 35"
        data-name="Layer 2"
        id="Layer_2"
      >
        <path d="M18.44,34.68a18.22,18.22,0,0,1-2.94-.24,18.18,18.18,0,0,1-15-20.86A18.06,18.06,0,0,1,9.59.63,2.42,2.42,0,0,1,12.2.79a2.39,2.39,0,0,1,1,2.41L11.9,3.1l1.23.22A15.66,15.66,0,0,0,23.34,21h0a15.82,15.82,0,0,0,8.47.53A2.44,2.44,0,0,1,34.47,25,18.18,18.18,0,0,1,18.44,34.68ZM10.67,2.89a15.67,15.67,0,0,0-5,22.77A15.66,15.66,0,0,0,32.18,24a18.49,18.49,0,0,1-9.65-.64A18.18,18.18,0,0,1,10.67,2.89Z" />
      </svg>
    </>
  );
};

export const Header = () => {
  const [theme, switchTheme] = useThemeSwitcher();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <StyledHeader>
      <div className="icon-container">
        <Link to="/">
          <img src={AnkiIcon} />
        </Link>
      </div>
      <nav className="narrow-screen-navigation">
        <div>
          <ul>
            <li onClick={handleClick}>Меню</li>
          </ul>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <Link to="/" style={{textDecoration: 'inherit', color: 'inherit'}}>
              <MenuItem
                onClick={handleClose}
                style={{ color: 'var(--main-text-color)', backgroundColor: 'var(--main-background-color-2)' }}
              >
                <li>Главная</li>
              </MenuItem>
            </Link>
            <Link to="/anki-docs" style={{textDecoration: 'inherit', color: 'inherit'}}>
              <MenuItem
                onClick={handleClose}
                style={{ color: 'var(--main-text-color)', backgroundColor: 'var(--main-background-color-2)' }}
              >
                <li>Anki</li>
              </MenuItem>
            </Link>
            <Link to="/demo" style={{textDecoration: 'inherit', color: 'inherit'}}>
              <MenuItem
                onClick={handleClose}
                style={{ color: 'var(--main-text-color)', backgroundColor: 'var(--main-background-color-2)' }}
              >
                <li>Демо</li>
              </MenuItem>
            </Link>
            <Link to="/md-docs" style={{textDecoration: 'inherit', color: 'inherit'}}>
              <MenuItem
                onClick={handleClose}
                style={{ color: 'var(--main-text-color)', backgroundColor: 'var(--main-background-color-2)' }}
              >
                <li>Markdown</li>
              </MenuItem>
            </Link>
            <Link to="/app" style={{textDecoration: 'inherit', color: 'inherit'}}>
              <MenuItem
                onClick={handleClose}
                style={{ color: 'var(--main-text-color)', backgroundColor: 'var(--main-background-color-2)' }}
              >
                <li>Приложение</li>
              </MenuItem>
            </Link>
          </Menu>
        </div>
      </nav>
      <nav className="wide-screen-navigation">
        <ul>
          <Link to="/">
            <li>Главная</li>
          </Link>
          <Link to="/anki-docs">
            <li>Anki</li>
          </Link>
          <Link to="/demo">
            <li>Демо</li>
          </Link>
          <Link to="/md-docs">
            <li>Markdown</li>
          </Link>
          <Link to="/app">
            <li>Приложение</li>
          </Link>
        </ul>
      </nav>
      <div onClick={switchTheme}>
        {theme === Themes.LIGHT ? <LightModeIcon width="44" height="44" /> : <DarkModeIcon width="42" height="42" />}
      </div>
    </StyledHeader>
  );
};
