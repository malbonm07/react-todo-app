import React from 'react';
import styled from 'styled-components';
import AppNewTodoBtn from '../AppNewTodoBtn';

export default class AppFooter extends React.Component {

    render() {
        return(
            <Footer>
                <AppNewTodoBtn></AppNewTodoBtn>
            </Footer>
        )
    }
}

const Footer = styled.footer`
    width: 100%;
    position: relative;
    min-height: 100px;
    background: ${(props) => props.theme.primary};
`