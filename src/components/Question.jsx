import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../assets/scss/style.scss';
import { loadQuestion, nextQuestion } from '../redux/actions/questionActions';
import { updateScore, restartGame, gameOver } from '../redux/actions/playerActions';
import { questions } from '../redux/actions/questionActions';
import { GameQuestions, users } from '../data/data';
// import  { GameQuestions, users }   from './data/QuestionAndAnswers';
import store from 'store';

class Question extends Component {
	constructor(props) {
		super(props);
		this.state = {
			gameAnswer: null,
			currentQuestion: 0,
			count: 25,
			options: [],
			done: false,
			scoreBoard: false,
		};
	}

	componentDidMount() {
		this.props.loadQuestion();
		this.myInterval = setInterval(() => {
			this.setState(prevState => ({
				count: prevState.count - 1,
			}));
			if (this.state.count === 0) {
				clearInterval(this.myInterval);
			}
		}, 1000);
	}

	nextQuestionHandler = async (e, index) => {
		const score = (await this.props.questions.answer) === index ? true : false;
		if (this.state.count === 0 || this.state.done === true) {
			await clearInterval(this.myInterval);
			this.props.gameOver(this.props.players);
			this.setState({
				scoreBoard: true,
			});
		} else {
			return (await this.props.updateScore({
				id: this.props.user.id,
				name: this.props.user.username,
				score: score,
			})) && this.props.questions.currentQuestion === 4
				? this.setState({
						done: true,
				  })
				: this.props.nextQuestion();
		}
	};

	restartQuestions = async e => {
		if (users.length < 5) {
			console.log('5 PLAYERS OR MORE ARE ALLOWED TO PLAY!!!');
		} else {
			const random = GameQuestions.sort(() => 0.5 - Math.random()).slice(0, 5);

			store.clearAll();
			store.set('setQuestions', true);
			store.set('questions', random);
			await this.props.restartGame();
			this.myInterval();
			console.log({ players: this.props.players }, { QUESTIONS: this.props.questions });

			this.setState(prevState => ({
				started: true,
			}));
		}
	};

	componentDidUpdate(prevProps, prevState) {
		if (this.state.time === 0) {
			console.log('GAMEOVER !!!!!!!', this.props.players);
			// this.props.gameOver(this.props.players)
		} else {
			if (this.props.questions.currentQuestion !== prevProps.questions.currentQuestion) {
				this.props.loadQuestion();
			}
		}
	}
	RenderlistView(index) {
		return (
			<p key={index} className="answers_choice" onClick={e => this.nextQuestionHandler(e, index)}>
				{index} <br />
			</p>
		);
	}

	RenderScoreBoard(i, score) {
		return <div className="score" key={i}>{score}</div>;
	}

	render() {
		const { question, options, currentQuestion } = this.props.questions;
		const { players } = this.props;
    const { count } = this.state;
    console.log(players);
    
		return (
			<div>
				<center>
					<div className="question">
						<p className="question_number">
							Question {currentQuestion + 1} out of {questions.length - 0}
						</p>
						<h2 className="question_indeed">{question}</h2>
						<p className="question_timer">Remaing time: {count} Sec</p>
					</div>
					{
						<div className="answers">
							<div className="score">
								Score: {this.props.players[0].score} out of {this.props.players[0].questionCount}
							</div>
							{/* {!this.state.scoreBoard
								? options.map(i => this.RenderlistView(i))
								: players.map((i, score) => this.RenderScoreBoard(score))} */
                options.map(i => this.RenderlistView(i))
              }
						</div>
					}
				</center>
			</div>
		);
	}
}

const mapStateToProps = ({ question, player, auth }) => {
	return {
		questions: question,
		players: player,
		user: auth.user,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		loadQuestion: () => dispatch(loadQuestion()),
		nextQuestion: () => dispatch(nextQuestion()),
		updateScore: data => dispatch(updateScore(data)),
		restartGame: () => dispatch(restartGame()),
		gameOver(player) {
			dispatch(gameOver(player));
		},
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Question);
