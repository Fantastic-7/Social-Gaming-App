import { JOIN, LEAVE, VIEW_CONNECTED_USERS, SUCCESS_JOIN, LOAD_CONNECTED_USERS } from '../../constants/actionTypes';

export const join = user => ({ type: JOIN, payload: user });
export const successJoin = user => ({ type: SUCCESS_JOIN });
export const viewConnectedUsers = users => ({ type: VIEW_CONNECTED_USERS, payload: users });
export const loadConnectedUsers = () => ({ type: LOAD_CONNECTED_USERS });
export const leave = user => ({ type: LEAVE, payload: user });
