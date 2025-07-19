import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import AddSongForm from '../components/AddSongForm';
import store from '../redux/store';

test('renders add song form and submits data', () => {
  render(
    <Provider store={store}>
      <AddSongForm />
    </Provider>
  );

  fireEvent.change(screen.getByPlaceholderText(/title/i), { target: { value: 'Test Song' } });
  fireEvent.change(screen.getByPlaceholderText(/artist/i), { target: { value: 'Test Artist' } });
  fireEvent.change(screen.getByPlaceholderText(/album/i), { target: { value: 'Test Album' } });
  fireEvent.change(screen.getByPlaceholderText(/year/i), { target: { value: '2023' } });

  fireEvent.click(screen.getByText(/add song/i));

  // You can extend this with mocks to verify dispatch
});
