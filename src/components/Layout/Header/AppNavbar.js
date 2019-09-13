import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV, faSearch } from '@fortawesome/free-solid-svg-icons'

export default class AppNavbar extends React.Component {
    state = {

    }

    render() {
        return (
            <Navbar>
                <h1 className="text-h5">Todo React</h1>
                <div>
                    <Button style={{marginRight: '10px'}}><FontAwesomeIcon icon={faSearch} /></Button>
                    <Button><FontAwesomeIcon icon={faEllipsisV} /></Button>
                </div>
            </Navbar> 
        )
    }
}

const Button = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: transparent;
    border: none;
    font-size: 2rem;
    padding: 0;
    cursor: pointer;
    color: ${(props) => props.theme.onPrimary};
`
const Navbar = styled.nav`
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
`