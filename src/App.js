import React from 'react';
import AppHeader from './components/Layout/Header/AppHeader';
import AppMain from './components/Layout/AppMain';
import AppFooter from './components/Layout/AppFooter';
import styled, { ThemeProvider } from 'styled-components';
import tasks from './data/tasks.json';

class App extends React.Component {

  state = {
    tasks: tasks
  }

  handleNewTask = (task) => {
    this.setState((state) => state.tasks.push(task))
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Div className="App">
          <AppHeader></AppHeader>
          <AppMain data={tasks}></AppMain>
          <AppFooter handleNewTask={this.handleNewTask} id={this.state.tasks.length}></AppFooter>
        </Div>
      </ThemeProvider>
    )
  };
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
  width: 100%;
  min-height: 100vh;
  background: ${(props) => props.theme.background};
  position: relative;
  text-align: center;
`
