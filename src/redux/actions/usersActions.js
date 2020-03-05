import { JOIN, LEAVE, VIEW_CONNECTED_USERS } from '../../constants/actionTypes';

export const join = user => ({ type: JOIN, payload: user });
export const viewUsers = () => ({ type: VIEW_CONNECTED_USERS });
export const leave = user => ({ type: LEAVE, payload: user });
