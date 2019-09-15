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
  handleDeleteTask = (id) => {
    let index = this.state.tasks.findIndex(task => task.id === id);
    let currentTasks = this.state.tasks
    currentTasks.splice(index, 1);

    this.setState({tasks: currentTasks})
  }
  handleDoneTask = (id) => {
    let index = this.state.tasks.findIndex(task => task.id === id);
    let currentTasks = this.state.tasks

    currentTasks[index].done === false ? currentTasks[index].done = true : currentTasks[index].done = false

    this.setState({tasks: currentTasks})
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Div className="App">
          <AppHeader></AppHeader>
          <AppMain data={tasks} 
          handleDeleteTask={this.handleDeleteTask}
          handleDoneTask={this.handleDoneTask}
          ></AppMain>
          <AppFooter handleNewTask={this.handleNewTask}></AppFooter>
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
  positive: "#CCFF90",
  error: "#b00020",
  onPrimary: "#ffffff",
  onSecondary: "#000000",
  onBackground: "#000000",
  onSurface: "#000000",
  onError: "#ffffff",
  grey: "#BDBDBD",
}

const Div = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${(props) => props.theme.background};
  position: relative;
  text-align: center;
`
