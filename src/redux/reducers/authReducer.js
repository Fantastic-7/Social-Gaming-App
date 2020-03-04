import { SIGNOUT, SUCCESS_LOGIN } from '../../constants/actionTypes'

const initialState = {
isAuthenticated: true,
user: {}
}

export default (state = initialState, { type, data }) => {
    switch (type) {

    case SIGNOUT:
        return {
            isAuthenticated: false,
        }

    case SUCCESS_LOGIN:
        return {
            data,
            isAuthenticated: true            
        }

    default:
        return state
    }
}
