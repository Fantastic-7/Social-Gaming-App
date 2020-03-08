import React, { Component } from 'react'
class Avatar extends Component {
    render() {
        const { src } = this.props;
        return (
            <img alt="profile pic" src={src} className="Profile" />  
        )
    }
}

export default Avatar
