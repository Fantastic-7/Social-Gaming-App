import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../assets/scss/style.scss';
import { loadQuestion, nextQuestion } from '../redux/actions/questionActions';
import { updateScore, restartGame } from '../redux/actions/playerActions';
import { questions } from '../redux/actions/questionActions'
import { GameQuestions, users } from '../data/data';
// import  { GameQuestions, users }   from './data/QuestionAndAnswers';
import store from 'store';


class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameAnswer: null,
      currentQuestion: 0,
      count: 10,
      options: [],
      done: false
    };
  }

  componentDidMount() {
    this.props.loadQuestion();
    this.myInterval = setInterval(() => {
      this.setState(prevState => ({
        count: prevState.count - 1
      }));
      if (this.state.count === 0) {
        clearInterval(this.myInterval);
      }
    }, 1000);
  }

  nextQuestionHandler = async (e, index) => {
    const score = (await this.props.questions.answer) === index ? true : false;
    // console.log();
    if (this.state.count === 0 || this.state.done === true) {
      await clearInterval(this.myInterval);
      console.log('game over!!');
    } else {
      return (await this.props.updateScore({
        id: '56477',
        name: 'boris',
        score: score
      })) && this.props.questions.currentQuestion === 4
        ? this.setState({
            done: true
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
      console.log(
        { players: this.props.players },
        { QUESTIONS: this.props.questions }
      );

      this.setState(prevState => ({
        started: true
      }));
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count === 0) {
      console.log('GAMEOVER !!!!!!!');
    } else {
      if (
        this.props.questions.currentQuestion !==
        prevProps.questions.currentQuestion
      ) {
        this.props.loadQuestion();
      }
    }
  }
  RenderlistView(index) {
    return (
      <p
        key={index}
        className="answers_choice"
        onClick={e => this.nextQuestionHandler(e, index)}
      >
        {index} <br />
      </p>
    );
  }

  render() {
    const { question, options, currentQuestion } = this.props.questions;
    const { count } = this.state;
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
                <div className="score">Score: {this.props.players[1].score} out of {this.props.players[1].questionCount}</div>
              {options.map(i => this.RenderlistView(i))}
            </div>
          }
        </center>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        questions: state.question,
        players: state.player
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      loadQuestion: () => dispatch(loadQuestion()),
      nextQuestion: () => dispatch(nextQuestion()),
      updateScore: data => dispatch(updateScore(data)),
      restartGame: () => dispatch(restartGame())
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Question);
