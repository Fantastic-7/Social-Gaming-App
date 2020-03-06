import { LOAD_QUESTION, NEXT_QUESTION } from '../../constants/actionTypes';

const initialState = {
    gameAnswer: null,
    currentQuestion:0,
    count: 10,
    options: []
}

export default (state = initialState, {type, payload}) => {
    switch(type) {
        case LOAD_QUESTION:
            return {
                ...state,
                question: payload[state.currentQuestion].question,
                options: payload[state.currentQuestion].options
            }
        case NEXT_QUESTION:
            return {
                ...state,
                currentQuestion: state.currentQuestion + 1
            }
        default: return state
    }
}