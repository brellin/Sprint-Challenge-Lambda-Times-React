import React, { Component } from 'react';

const authorize = Login => ContentPage =>
    class extends Component {
        constructor() {
            super();
            this.state = {
                loggedIn: localStorage.getItem('user') === null ? false : true
            }
        }
        login = () => {
            this.setState({
                loggedIn: true
            })
        }

        render() {
            return (
                this.state.loggedIn === false ?
                    <Login
                        loggedIn={this.state.loggedIn}
                        login={this.login}
                    />
                    :
                    <ContentPage />
            )
        }
    }

export default authorize;
