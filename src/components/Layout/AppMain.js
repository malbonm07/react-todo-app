import React from 'react';
import styled from 'styled-components';
import BoxShadowMixin from '../../Styles/mixins';
import DayJS from 'react-dayjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default function AppMain(props) {
        return(
            <Main>
                <Ul>
                    {props.data.map(task => {
                        const d = task.date.toISOString
                        return <Li key={task.id}>
                        <h1 className="text-h6 capitalize">{task.title}</h1>
                        <br/>
                        <p className="text-body1">{task.description}</p>
                        <br/>
                        <p className="text-body1"><span className="text-medium">Date:&nbsp;</span>
                        <span className="text-light"><DayJS>{d}</DayJS></span>
                        </p>
                        <br/>
                        <Button><FontAwesomeIcon icon={faTrash} /></Button>
                        </Li>
                    })}
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
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    background: ${(props) => props.theme.surface};
    ${BoxShadowMixin(2)};
    border-radius: 3px;
    border: 1px solid transparent;
    position: relative;
    :hover {
        border-color: #BDBDBD;
    }
    @media screen and (min-width: 600px){
        justify-content: center;
    }
`
const Button = styled.button`
    width: 40px;
    height: 40px;
    background: transparent;
    border: none;
    border-radius: 50%;
    font-size: 20px;
    color: ${(props) => props.theme.error};
    ${BoxShadowMixin(1)};
    cursor: pointer;
    position: absolute;
    right: 20px;
    bottom: 20px;
    :hover {
        background: #EEEEEE;
    }
`