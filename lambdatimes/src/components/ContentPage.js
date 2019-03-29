import React, { Component } from 'react';
import Header from './Header';
import Content from './Content/Content';
import TopBar from './TopBar';
import '../CSS/index.css';

export default class ContentPage extends Component {
    render() {
        return (
            <div className="App">
                <TopBar />
                <Header />
                <Content />
            </div>
        )
    }
}
