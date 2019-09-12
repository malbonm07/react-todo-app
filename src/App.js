import React from 'react';
import AppHeader from './components/Layout/AppHeader';
import './App.scss';
import styled, { ThemeProvider } from 'styled-components';

const theme = {
  primary: "red"
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AppHeader></AppHeader>
      </div>
    </ThemeProvider>
  );
}

export default App;
