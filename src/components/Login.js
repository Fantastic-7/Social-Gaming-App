import React, { Component } from 'react';
import { connect } from 'react-redux';
import jwt from 'jsonwebtoken';
import qs from 'qs';
import { successLogin } from '../redux/actions/authActions'
import fb from '../assets/images/facebookLogo.png';
import '../assets/scss/login.scss';


class Login extends Component {
    handleLogin = () => {
        window.location.href = 'https://brainygame.herokuapp.com/api/auth/facebook';
    }
    componentDidMount() {
        const isLogged = localStorage.getItem('token')
        if (isLogged) window.location.href = '/playgame';
        const token = qs.parse(window.location.search, { ignoreQueryPrefix: true }).token
        if (token) {            
            const data = jwt.verify(token, 'ScreteGoesHere');
            this.props.successLogUser(data);
            localStorage.setItem('token', token)
            window.location.href = '/playgame';
        }
        
    }
    render() {
        return (            
            <div className="mainBackground"> 
                <h2 className=""> A BRAINY GAME</h2>
                <p>
                You get to answer 5 multiple choice questions. Each question takes a maximum of 10 seconds with in a team of 5 players.
               <br/> Do you want to win? How fast can you answer?
                </p>
                <h4>SIGN IN WITH FACEBOOK</h4>
                <div className="loginBtn">
                    <button onClick={this.handleLogin}><img src={fb} alt="facebook"/> CONNECT</button>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        successLogUser: (data) => {dispatch (successLogin(data))}
    }
}
export default connect(null, mapDispatchToProps)(Login);
