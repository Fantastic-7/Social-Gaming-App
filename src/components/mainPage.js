import React, { Component } from 'react'
import Header from './header'
import StartGame from './StartGame';
import Sidebar from './Sidebar'

class MainPage extends Component {
    render() {
        return (
            <div className="wrapper">
            <Header />
            <Sidebar />
            <StartGame />
            </div>
        )
    }
}

export default MainPage
