import React from 'react';
import styled from 'styled-components';
import AppNavbar from './AppNavbar';
import BoxShadowMixin from '../../../Styles/mixins';

export default class AppHeader extends React.Component {

    render() {
        return (
            <Header>
                <Div>
                    SPA
                </Div>
                <AppNavbar></AppNavbar>
            </Header>
        )
    }
}

const Div = styled.div`
    text-align: right;
    ${BoxShadowMixin(2)};
    background: ${(props) => props.theme.primaryVariant};
    font-size: 1.2rem;
    padding-right: 5px;
    font-weight: 600;
`

const Header = styled.header`
    height: 60px;
    background: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.onPrimary};
    ${BoxShadowMixin(2)};
`