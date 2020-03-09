import { LOAD_QUESTION, NEXT_QUESTION, RESET_QUESTION } from '../../constants/actionTypes';
import store from 'store'

const setQuestions = store.get('setQuestions');
export const questions = setQuestions ? store.get('questions') : [];

export const loadQuestion = () => {
         return {
           type: LOAD_QUESTION,
           payload: questions
         };
       };

export const nextQuestion = () => {
    return {
        type: NEXT_QUESTION
    }
}

export const resetQuestion = () => {
  return {
    type: RESET_QUESTION
  };
};