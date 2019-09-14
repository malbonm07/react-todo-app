import React from 'react';
import styled from 'styled-components';
import BoxShadowMixin from '../Styles/mixins';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faFileExcel } from '@fortawesome/free-solid-svg-icons';

export default class AppButton extends React.Component {
    state = {
        show: false
    }
    showDialog = () => {
        this.setState({show: true})
    }

    render() {
        return(
            <div>
                <Button onClick={this.showDialog}>
                    <FontAwesomeIcon icon={faPlus} />
                </Button>
                {this.state.show ? 
                <Dialog onClick={(e) => {
                    let outer = e.target.classList[0];
                    if(outer === 'sc-dnqmqq') {
                        this.setState({show: false})
                    }
                }}>
                    <Content>  
                        <div className="text-body1 text-center text-medium" style={title}>
                            Add a new task
                        </div>
                        <form style={form}>
                            <input name="title" type="text"/>
                            <textarea name="description" id="" cols="30" rows="5"></textarea>
                        </form>
                    </Content>
                </Dialog> : 
                null}
            </div>
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

const Dialog = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    background: rgba(0,0,0,0.7);
    z-index: 10;
`

const Content = styled.div`
    width: 95%;
    height: 50%;
    background: ${(props) => props.theme.surface};
    margin: auto;
    @media screen and (min-width: 600px){
        width: 500px;
        height: 400px;
    }
`

const title = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "50px",
    background: "#6200ee",
    color: "#fff",
}

const form = {
    widht: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
}