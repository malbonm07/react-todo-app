import React from 'react';
import styled from 'styled-components';
import BoxShadowMixin from '../Styles/mixins';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus} from '@fortawesome/free-solid-svg-icons'

export default class AppButton extends React.Component {

    render() {
        return(
            <Button>
                <FontAwesomeIcon icon={faPlus} />
            </Button>
        )
    }
}

const Button = styled.button`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    position: absolute;
    font-size: 20px;
    top: calc(-50px/2);
    right: 15px;
    border-radius: 50%;
    border: none;
    outline: none;
    cursor: pointer;
    ${BoxShadowMixin(3)};
    background: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.onSecondary};
`