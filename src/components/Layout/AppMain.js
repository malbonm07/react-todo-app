import React from 'react';
import styled from 'styled-components';
import BoxShadowMixin from '../../Styles/mixins';

export default function AppMain(props) {
        return(
            <Main>
                <Ul>
                    {props.data.map(task => <Li key={task.id}>{task.title}</Li>)}
                </Ul>
            </Main>
        )
}

const Main = styled.main`
    width: calc(100% - 10px);
    min-height: calc(100vh - 170px);
    margin: 5px 5px;
    background: blue;
    ${BoxShadowMixin(2)};
`
const Ul = styled.ul`
    width: 100%;
    min-height: calc(100vh - 170px);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    grid-auto-rows: minmax(140px, auto);
    grid-gap: 5px;
    align-items: center;
    padding: 5px;
    background: ${(props) => props.theme.surface};
    @media screen and (min-width: 600px){
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-auto-rows: minmax(250px, auto);
    }
    @media screen and (min-width: 1200px){
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        grid-auto-rows: minmax(350px, auto);
    }
`
const Li = styled.li`
    width: 100%;
    height: 100%;
    padding: 10px;
    background: ${(props) => props.theme.surface};
    ${BoxShadowMixin(2)};
    border-radius: 3px;
`