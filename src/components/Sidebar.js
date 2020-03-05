import React, { Component } from 'react'
import { connect } from 'react-redux'

class Sidebar extends Component {

    render() {
        return (
            <div className="sidebar">
                <h1>Side bar</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
