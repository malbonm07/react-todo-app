import React from 'react';
import styled from 'styled-components';
import AppNavbar from './AppNavbar';


export default class AppHeader extends React.Component {

    render() {
        return (
            <Header className="header">
                <h1>Hola mundo!</h1>
            </Header>
        )
    }
}


const Header = styled.header`
    background: ${(props) => props.theme.primary}; 
`