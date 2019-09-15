import React from 'react';
import styled from 'styled-components';
import BoxShadowMixin from '../../Styles/mixins';

import AppTask from '../AppTask';
import { faFileExcel } from '@fortawesome/free-solid-svg-icons';

export default function AppMain(props) {
        return(
            <Main>
                <Ul data={props.data}>
                    {props.data.length < 1 ? <li className="text-h5 text-medium" style={alert}>Your tasks list is empty</li> : null}
                    {props.data.map(task => {
                        return <AppTask 
                        handleDeleteTask={props.handleDeleteTask}
                        handleDoneTask={props.handleDoneTask}
                        task={task} key={task.id}>
                        </AppTask>
                    })}
                </Ul>
            </Main>
        )
}

const Main = styled.main`
    width: calc(100% - 10px);
    min-height: calc(100vh - 120px);
    margin: 5px 5px 65px 5px;
    ${BoxShadowMixin(2)};
    @media screen and (min-width: 600px){
        min-height: calc(100vh - 170px);
        margin-bottom: 105px
    }
`

const Ul = styled.ul`
    width: 100%;
    min-height: calc(100vh - 120px);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    grid-auto-rows: minmax(250px, auto);
    grid-gap: 5px;
    align-items: center;
    padding: 5px;
    background: ${(props) => props.data.length > 0 ? props.theme.surface : props.theme.error};
    @media screen and (min-width: 600px){
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-auto-rows: minmax(250px, auto);
    }
    @media screen and (min-width: 1200px){
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        grid-auto-rows: minmax(350px, auto);
    }
`

const alert = {
    width: "100%",
    height: "100%",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}