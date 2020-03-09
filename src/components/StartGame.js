import React, { Component } from 'react';
import Question from './Question';
import '../assets/scss/start_game.scss';
import { GameQuestions, users } from '../data/data';
// import  { GameQuestions, users }   from './data/QuestionAndAnswers';
import store from 'store';
// import { db } from './constants/playerDB';
import { createNewPlayer, restartGame } from '../redux/actions/playerActions';
import { connect } from 'react-redux';

class StartGame extends Component {
	constructor(props) {
		super(props);
		this.handleChangeOnAnswer = this.handleChangeOnAnswer.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.setQuestions = this.setQuestions.bind(this);
		this.state = {
			index: 0,
			question: {},
			answer: '',
			newQuestion: {},
			time: 15,
			players: [],
			started: false,
		};
	}

	handleChangeOnAnswer(e) {
		this.setState({
			answer: e.target.value,
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		// let answer = {
		//   answer: this.state.answer
		// };
		// this.props.createProduct(answer);
	}

	setQuestions = async e => {
		if (users.length < 5) {
			console.log('5 PLAYERS OR MORE ARE ALLOWED TO PLAY!!!');
		} else {
			const random = GameQuestions.sort(() => 0.5 - Math.random()).slice(0, 5);

			// store.clearAll();
			store.remove('setQuestions', true);
			store.remove('questions', random);
			store.set('setQuestions', true);
			store.set('questions', random);
			await this.props.createPlayer({
				id: this.props.user.id,
				name: this.props.user.username,
			});
			console.log(this.props.players);

			this.setState(prevState => ({
				started: true,
			}));
		}
	};

	restartQuestions = async e => {
		if (users.length < 5) {
			console.log('5 PLAYERS OR MORE ARE ALLOWED TO PLAY!!!');
		} else {
			const random = GameQuestions.sort(() => 0.5 - Math.random()).slice(0, 5);

			// store.clearAll();
			store.remove('setQuestions', true);
			store.remove('questions', random);
			store.set('setQuestions', true);
			store.set('questions', random);
			await this.props.restartGame();
			console.log({ players: this.props.players });

			this.setState(prevState => ({
				started: true,
			}));
		}
	};

	render() {
		const { users } = this.props;
		return !this.state.started ? (
			<div className="startDiv">
				{users.length < 5 ? (
					<>
						<h1 className="welcome">
							Welcome !!!<p> Please wait for other {5 - users.length} users to join the game</p>
						</h1>
						<button onClick={this.setQuestions} className="startButton">
							Start
						</button>
					</>
				) : (
					<>
						<h1 className="welcome">
							Welcome !!!<p> Click the start button to start playing</p>
						</h1>
						<button onClick={this.setQuestions} className="startButton">
							Start
						</button>
					</>
				)}
			</div>
		) : (
			<div className="container">
				<Question />
				{/* <div>
          <nav>
            <ul>
              <li>
                <button onClick={this.restartQuestions}>Restart</button>
              </li>
            </ul>
          </nav>
        </div> */}
			</div>
		);
	}
}

const mapStateToProps = ({ player, question, usersReducer, auth }) => ({
	players: player,
	questions: question,
	users: usersReducer.users,
	user: auth.user,
});
const mapDispatchToProps = dispatch => ({
	createPlayer: data => dispatch(createNewPlayer(data)),
	restartGame: () => dispatch(restartGame()),
});

export default connect(mapStateToProps, mapDispatchToProps)(StartGame);
