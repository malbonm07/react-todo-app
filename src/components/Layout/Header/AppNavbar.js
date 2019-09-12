import React from 'react';
import styled from 'styled-components';

export default class AppNavbar extends React.Component {
    state = {

    }

    render() {
        return (
            <div>
                <h1>Hola mundo!</h1>
                <Button>Add 1</Button>
            </div> 
        )
    }
}

const Button = styled.button`
`