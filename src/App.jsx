/** @jsxImportSource @emotion/react */
import React from 'react';
import SongList from './components/SongList';
import AddSongForm from './components/AddSongForm';
import { css, useTheme } from '@emotion/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = ({ toggleTheme, isDark }) => {
  const theme = useTheme();

  const backgroundStyle = css`
    min-height: 100vh;
    padding: ${theme.spacing(4)};
    font-family: 'Segoe UI', sans-serif;
    background: ${theme.mode === 'dark'
      ? '#121212'
      : `linear-gradient(to right, rgba(255,255,255,0.95), rgba(255,255,255,0.95)),
         url('https://www.transparenttextures.com/patterns/cubes.png')`};
    background-color: ${theme.colors.background};
    background-repeat: repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${theme.colors.text};
    transition: all 0.3s ease;
  `;

  const buttonStyle = css`
    position: absolute;
    top: 20px;
    right: 20px;
    background: ${theme.colors.button};
    color: ${theme.colors.buttonText};
    border: none;
    border-radius: 4px;
    padding: 8px 12px;
    cursor: pointer;
  `;

  return (
  <div css={backgroundStyle}>
    <ToastContainer position="top-right" autoClose={2000} />
    <button css={buttonStyle} onClick={toggleTheme}>
      {isDark ? '☀ Light Mode' : '🌙 Dark Mode'}
    </button>
    <h1>🎵 Song Manager</h1>
    <AddSongForm />
    <SongList />
  </div>
);
};


export default App;
