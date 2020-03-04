import React, { Component } from 'react'
import Header from './header'
import Question from './Question';
import Sidebar from './Sidebar'

class MainPage extends Component {
    render() {
        return (
            <div className="wrapper">
            <Header />
            <Sidebar />
            <Question />
            </div>
        )
    }
}

export default MainPage
