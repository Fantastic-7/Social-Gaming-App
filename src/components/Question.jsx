import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../assets/scss/style.scss';
import { GameQuestions } from '../data/data'
import { loadQuestion, nextQuestion } from '../redux/actions/questionActions';


class Question extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gameAnswer: null,
            currentQuestion: 0,
            count: 10,
            options: []
        }
    }

    componentDidMount() {
        this.props.loadQuestion();
        // this.startGame();
        this.myInterval = setInterval(() => {
            this.setState(prevState => ({
                count: prevState.count - 1
            }))
            if (this.state.count === 0) {
                clearInterval(this.myInterval)
            }
        }, 1000)
    }

    nextQuestionHandler = () => {
        if (this.props.questions.currentQuestion === 9) {
            console.log('GAMEOVER !!!!!!!');

        }
        else {

            this.props.nextQuestion();
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.questions.currentQuestion !== prevProps.questions.currentQuestion) {

            this.props.loadQuestion();
        }
        if (this.state.count === 0 || this.props.questions.currentQuestion === 9) {
            console.log('GAMEOVER !!!!!!!');
        }
    }


    render() {
        const { question, options, currentQuestion } = this.props.questions;
        const { count } = this.state;
        return (
            <div>
                <center>
                    <div className='question'>
                        <p className='question_number'>Question {currentQuestion + 1} out of {GameQuestions.length - 0}</p>
                        <h2 className='question_indeed'>{question}</h2>
                        <p className='question_timer'>Remaing time: {count} Sec</p>
                    </div>
                    <div className='answers' key={options.id}>
                        <p onClick={this.nextQuestionHandler} className='answers_choice'>{options[0]}</p>
                        <p onClick={this.nextQuestionHandler} className='answers_choice'>{options[1]}</p>
                        <p onClick={this.nextQuestionHandler} className='answers_choice'>{options[2]}</p>
                        <p onClick={this.nextQuestionHandler} className='answers_choice'>{options[3]}</p>
                    </div>
                </center>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        questions: state.question
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadQuestion: () => dispatch(loadQuestion()),
        nextQuestion: () => dispatch(nextQuestion())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Question);
