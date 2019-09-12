import React from 'react';
import styled from 'styled-components';

export default class AppFooter extends React.Component {

    render() {
        return(
            <Footer>

            </Footer>
        )
    }
}

const Footer = styled.footer`
    width: 100%;
    min-height: 200px;
    background: ${(props) => props.theme.primary};
    position: absolute;
    left: 0;
    bottom: 0;
`