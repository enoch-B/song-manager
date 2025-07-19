/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateSong } from '../redux/Songs/songSlice';
import { css, useTheme } from '@emotion/react';

const EditSongForm = ({ song, closeForm }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [form, setForm] = useState({ ...song });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSong({ ...form, year: parseInt(form.year) }));
    closeForm();
  };

  const formStyle = css`
    max-width: 500px;
    margin: ${theme.spacing(2)} auto;
    padding: ${theme.spacing(2)};
    border: 1px solid ${theme.colors.border};
    border-radius: 6px;
    background: #fff;
    transition: all 0.2s ease-in-out;
    display: flex;
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
      padding: ${theme.spacing(1)};
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      &:hover {
  background-color: #005bb5; // slightly darker
  transform: scale(1.02);
}


    }

    .submit-btn {
      background: ${theme.colors.primary};
      color: white;
      transition: all 0.2s ease-in-out;
       &:hover {
  background-color: #005bb5; // slightly darker
  transform: scale(1.02);
}

    }

    .cancel-btn {
      background: ${theme.colors.error};
      color: white;
      transition: all 0.2s ease-in-out;
      &:hover {
  background-color: #005bb5; // slightly darker
  transform: scale(1.02);
}

    }
  `;

  return (
    <form onSubmit={handleSubmit} css={formStyle}>
      <h3>Edit Song</h3>
      <input name="title" value={form.title} onChange={handleChange} required />
      <input name="artist" value={form.artist} onChange={handleChange} required />
      <input name="album" value={form.album} onChange={handleChange} required />
      <input name="year" value={form.year} onChange={handleChange} type="number" required />
      <button type="submit" className="submit-btn">Update</button>
      <button type="button" className="cancel-btn" onClick={closeForm}>Cancel</button>
    </form>
  );
};

export default EditSongForm;
