import React from 'react';
import styled from 'styled-components';
import BoxShadowMixin from '../Styles/mixins';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default class AppButton extends React.Component {
    state = {
        show: false,
        title: '',
        description: '',
        date: `${Date.now()}`,
        done: false
    }
    showDialog = () => {
        this.setState({show: true})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let letter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        let number = String(Date.now());
        let id = `${letter + number}`
        const {title, description, date, done} = this.state;
        this.props.handleNewTask({id, title, description, date, done});
        this.setState({
            title: '',
            description: ''
        })
        this.setState({show: false})
    }

    handleChange = (e) => {
        let target = e.target
        let value = target.value
        let name = target.name
        this.setState({
            [name]: value
        })
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
                        <form style={form} onSubmit={this.handleSubmit}>
                            <label style={label}>
                                <h5 className="text-h6 mt-2">Title:</h5>
                                <input 
                                style={input} name="title" type="text"
                                onChange={this.handleChange}
                                value={this.state.title}
                                required
                                maxLength="20"
                                />
                            </label>
                            <label style={label}>
                                <h5 className="text-h6">Description:</h5>
                                <textarea 
                                style={textarea} 
                                name="description" id="" cols="30" rows="5"
                                onChange={this.handleChange}
                                value={this.state.description}
                                required
                                maxLength="70"
                                ></textarea>
                            </label>
                            <div style={formButtonsBox}>
                                <button style={btn} type="button" onClick={() => this.setState({show: false})}>Cancel</button>
                                <button style={btn} type="submit">Create</button>
                            </div>
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
    height: 55%;
    background: ${(props) => props.theme.surface};
    margin: auto;
    border-radius: 5px;
    border: 1px solid ${(props) => props.theme.surface};
    animation: openModal .3s forwards;
    @media screen and (min-width: 600px){
        width: 500px;
        height: 335px;
    }
    @keyframes openModal {
        0% {
            transform: scale(0)
        }
        100% {
            transform: scale(1)
        }
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
    borderRadius: "5px",
}

const form = {
    widht: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
}

const label = {
    width: "95%",
    margin: "0 auto",
    textAlign: "left",
}

const input = {
    width: "100%",
    height: "32px",
    marginBottom: "1rem",
    marginTop: "1rem",
    padding: "5px",
    fontSize: "1.4rem",
    border: "1px solid #3700b3",
    borderRadius: "5px",
}

const textarea = {
    width: "100%",
    height: "100px",
    marginBottom: "1rem",
    marginTop: "1rem",
    padding: "5px",
    fontSize: "1.4rem",
    resize: "none",
    border: "1px solid #3700b3",
    borderRadius: "5px",
}

const formButtonsBox = {
    width: "95%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    // paddingRight: "15px",
}

const btn = {
    width: "30%",
    height: "30px",
    borderRadius: "5px",
    boxShadow: "0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12), 0 1px 3px 0 rgba(0, 0, 0, .20)",
    fontSize: "1.4rem",
    marginRight: "10px",
    background: "#03dac6",
    cursor: "pointer",
    border: "none",
}