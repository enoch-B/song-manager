/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSongs, deleteSong } from '../redux/Songs/songSlice';
import EditSongForm from './EditSongForm';
import { css, useTheme } from '@emotion/react';

const SongList = () => {
  const dispatch = useDispatch();
  const { items: songs, loading, error } = useSelector((state) => state.songs);

  const [currentPage, setCurrentPage] = useState(1);
  const [editingSong, setEditingSong] = useState(null);
  const songsPerPage = 5;
  const theme = useTheme();

  useEffect(() => {
    dispatch(fetchSongs());
  }, [dispatch]);

  const indexOfLast = currentPage * songsPerPage;
  const indexOfFirst = indexOfLast - songsPerPage;
  const currentSongs = songs.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(songs.length / songsPerPage);

  const handleNext = () => currentPage < totalPages && setCurrentPage((prev) => prev + 1);
  const handlePrev = () => currentPage > 1 && setCurrentPage((prev) => prev - 1);

const tableStyle = css`
  width: 100%;
  max-width: 800px;
  margin-inline: auto;
  border-collapse: collapse;
  margin-bottom: ${theme.spacing(3)};
  
  th, td {
    border: 1px solid ${theme.colors.border};
    padding: ${theme.spacing(1)};
    text-align: left;
  }

  th {
    background: ${theme.colors.primary};
    color: white;
  }

  td {
    background: white;
    font-size: 1rem;
  }

  button {
    margin-right: ${theme.spacing(1)};
    padding: 6px 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.9rem;
    &:hover {
  background-color: #005bb5; // slightly darker
  transform: scale(1.02);
}

  }

  .edit-btn {
    background: #f39c12;
    color: white;
    &:hover {
  background-color: #005bb5; // slightly darker
  transform: scale(1.02);
}

  }

  .delete-btn {
    background: #e74c3c;
    color: white;
    &:hover {
  background-color: #005bb5; // slightly darker
  transform: scale(1.02);
}

  }

  /*  Responsive tweaks */
  @media (max-width: 600px) {
    th, td {
      padding: 6px;
      font-size: 0.8rem;
    }
    button {
      font-size: 0.75rem;
      padding: 4px 8px;
    }
  }
`;

const paginationStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing(2)};
  flex-wrap: wrap;
  margin-top: ${theme.spacing(2)};
  
  button {
  padding: 8px 16px;
  font-size: 1rem;
  border-radius: 6px;
  background-color: ${theme.colors.primary};
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #357ab9;
  }

  &:disabled {
    background-color: #aaa;
    cursor: not-allowed;
  }
}

  @media (max-width: 600px) {
    button {
      font-size: 0.85rem;
      padding: 6px 12px;
    }
  }
`;

  if (loading) return <p>Loading songs...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Song List</h2>
      <table css={tableStyle}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Year</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentSongs.map((song) => (
            <tr key={song.id}>
              <td>{song.title}</td>
              <td>{song.artist}</td>
              <td>{song.album}</td>
              <td>{song.year}</td>
              <td>
                <button className="edit-btn" onClick={() => setEditingSong(song)}>Edit</button>
                <button className="delete-btn" onClick={() => dispatch(deleteSong(song.id))}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingSong && (
        <EditSongForm song={editingSong} closeForm={() => setEditingSong(null)} />
      )}

      <div css={paginationStyle}>
        <button onClick={handlePrev} disabled={currentPage === 1}>Previous</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
};

export default SongList;
