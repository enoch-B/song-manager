/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createSong } from '../redux/Songs/songSlice';
import { css, useTheme } from '@emotion/react';

const AddSongForm = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [form, setForm] = useState({
    title: '',
    artist: '',
    album: '',
    year: '',
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createSong({ id: Date.now(), ...form, year: parseInt(form.year) }));
    setForm({ title: '', artist: '', album: '', year: '' });
  };

 const formStyle = css`
  max-width: 500px;
  margin-bottom: ${theme.spacing(3)};
  margin-inline: auto; /* center the form horizontally */
  display: flex;
  transition: all 0.2s ease-in-out;
  flex-direction: column;
  gap: ${theme.spacing(1)};
  
  input {
    padding: ${theme.spacing(1)};
    border: 1px solid ${theme.colors.border};
    border-radius: 4px;
    font-size: 1rem;
    transition: all 0.2s ease-in-out;

  }

  button {
    background: ${theme.colors.button};
    color: ${theme.colors.buttonText};
    padding: ${theme.spacing(1)};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.2s ease-in-out;

  }
`;


  return (
    <form onSubmit={handleSubmit} css={formStyle}>
      <h3>Add New Song</h3>
      <input type="text" name="title" value={form.title} placeholder="Title" onChange={handleChange} required />
      <input type="text" name="artist" value={form.artist} placeholder="Artist" onChange={handleChange} required />
      <input type="text" name="album" value={form.album} placeholder="Album" onChange={handleChange} required />
      <input type="number" name="year" value={form.year} placeholder="Year" onChange={handleChange} required />
      <button type="submit">Add Song</button>
    </form>
  );
};

export default AddSongForm;
