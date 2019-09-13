import React from 'react';
import styled from 'styled-components';
import AppNavbar from './AppNavbar';
import BoxShadowMixin from '../../../Styles/mixins';


export default class AppHeader extends React.Component {

    render() {
        return (
            <Header>
                <div style={headerTitle}>Todo List</div>
                <AppNavbar></AppNavbar>
            </Header>
        )
    }
}

const headerTitle = {
    textAlign: 'right',
}

const Header = styled.header`
    height: 60px;
    background: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.onPrimary};
    ${BoxShadowMixin(2)};
`