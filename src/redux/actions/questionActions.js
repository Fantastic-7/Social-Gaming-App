import { LOAD_QUESTION, NEXT_QUESTION } from '../../constants/actionTypes';
import { GameQuestions } from '../../data/data'

export const loadQuestion = () => {
    return {
        type: LOAD_QUESTION,
        payload: GameQuestions
    }
}

export const nextQuestion = () => {
    return {
        type: NEXT_QUESTION
    }
}