import React, { Component } from 'react'
import Header from './header'
import Sidebar from './Sidebar'

class MainPage extends Component {
    render() {
        return (
            <div className="wrapper">
            <Header />
            <Sidebar />
            </div>
        )
    }
}

export default MainPage
