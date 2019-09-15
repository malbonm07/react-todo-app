import React from 'react';
import styled from 'styled-components';
import AppNewTodoBtn from '../AppNewTodoBtn';

export default class AppFooter extends React.Component {

    render() {
        return(
            <Footer>
                <AppNewTodoBtn handleNewTask={this.props.handleNewTask}></AppNewTodoBtn>
            </Footer>
        )
    }
}

const Footer = styled.footer`
    width: 100%;
    position: fixed;
    min-height: 50px;
    background: ${(props) => props.theme.primary};
    bottom: 0;
    left: 0;
    @media screen and (min-width: 600px){
        min-height: 100px;
    }
`