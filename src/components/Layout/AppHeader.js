import React from 'react';
import styled from 'styled-components';


export default class AppHeader extends React.Component {

    render() {
        return (
            <Header>
                <h1>Hola mundo!</h1>
            </Header>
        )
    }
}


const Header = styled.header`
    background: red;
`