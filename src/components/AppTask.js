import React from 'react';
import styled from 'styled-components';

// CSS (JS) MIXINS
import BoxShadowMixin from '../Styles/mixins';

// DAY JS
import DayJS from 'react-dayjs';

// FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons'


export default class AppTask extends React.Component {

    deleteTask = (e) => {
        let id = this.props.task.id;
        this.props.handleDeleteTask(id);
    }
    markDoneTask = (e) => {
        let id = this.props.task.id;
        this.props.handleDoneTask(id)
    }

    render() {

        const task = this.props.task;
        const d = task.date.toISOString;

        return(
            <AppCard done={task.done}>
                <h1 className="text-h6 capitalize" style={{width: "100%"}}>{task.title}<br/>
                {task.done ? <span className="text-overline positive">complete</span> : null}
                </h1>
                <br/>
                <p className="text-body1">{task.description}</p>
                <br/>
                <p className="text-body1"><span className="text-medium">Date:&nbsp;</span>
                <span className="text-light text-caption"><DayJS>{d}</DayJS></span>
                </p>
                <br/>
                <Done type="button" done={task.done} 
                style={btn}
                onClick={this.markDoneTask}>
                    <FontAwesomeIcon icon={faCheck} />
                </Done>
                <Delete style={btn} onClick={this.deleteTask}>
                    <FontAwesomeIcon icon={faTrash} />
                </Delete>
            </AppCard>
        )
    }
}

const AppCard = styled.li`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    background: ${(props) => props.done ? props.theme.positive : props.theme.surface};
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

const btn = {
    width: "40px",
    height: "40px",
    border: "none",
    borderRadius: "50%",
    fontSize: "20px",
    cursor: "pointer",
    position: "absolute",
    right: "10px",
    bottom: "10px",
    transition: "0.25s",
}

const Done = styled.button`
    color: ${(props) => props.done ? props.theme.onPrimary : props.theme.grey};
    background: ${(props) => props.done ? props.theme.secondary : props.theme.surface};
    ${BoxShadowMixin(1)};
    cursor: pointer;
    right: 60px !important;
    :hover {
        background: ${(props) => props.done ? props.theme.surface : props.theme.secondary};
        color: ${(props) => props.done ? props.theme.grey : props.theme.onPrimary};
    }
    @media screen and (min-width: 600px){
        right: 15px;
        bottom: 20px;
    }
`

const Delete = styled.button`
    color: ${(props) => props.theme.surface};
    ${BoxShadowMixin(1)};
    cursor: pointer;
    background: ${(props) => props.theme.error};
    :hover {
        background: #C62828;
    }
    @media screen and (min-width: 600px){
        right: 15px;
        bottom: 20px;
    }
`
