export const lightTheme = {
  mode: 'light',
  colors: {
    primary: '#4a90e2',
    background: '#f9f9f9',
    text: '#333',
    border: '#ccc',
    button: '#0070f3',
    buttonText: '#fff',
    error: '#e74c3c',
  },
  spacing: (f) => `${f * 8}px`,
};

export const darkTheme = {
  mode: 'dark',
  colors: {
    primary: '#90caf9',
    background: '#121212',
    text: '#e0e0e0',
    border: '#333',
    button: '#2196f3',
    buttonText: '#fff',
    error: '#ef5350',
  },
  spacing: (f) => `${f * 8}px`,
};
