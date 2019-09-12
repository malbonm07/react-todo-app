import React from 'react';
import AppHeader from './components/Layout/Header/AppHeader';
import AppMain from './components/Layout/AppMain';
import AppFooter from './components/Layout/AppFooter';
import './App.scss';
import styled, { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Div className="App">
        <AppHeader></AppHeader>
        <AppMain></AppMain>
        <AppFooter></AppFooter>
      </Div>
    </ThemeProvider>
  );
}

export default App;

const theme = {
  primary: "#6200ee",
  primaryVariant: "#3700b3",
  secondary: "#03dac6",
  secondaryVariant: "#018786",
  background: "#E5E5E5",
  surface: "#ffffff",
  error: "#b00020",
  onPrimary: "#ffffff",
  onSecondary: "#000000",
  onBackground: "#000000",
  onSurface: "#000000",
  onError: "#ffffff",
}

const Div = styled.div`
  background: ${(props) => props.theme.background}
`
