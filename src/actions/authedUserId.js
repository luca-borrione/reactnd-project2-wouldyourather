// @flow
import { type Action } from '../types';

type Login = 'authedUserId/LOGIN'
type Logout = 'authedUserId/LOGOUT'

export const LOGIN: Login = 'authedUserId/LOGIN';
export const LOGOUT: Logout = 'authedUserId/LOGOUT';

export type LoginPayload = {
  id: string
}

export type LoginAction = Action<Login, LoginPayload>
export type LogoutAction = Action<Logout>

export type AuthedUserIdAction =
  | LoginAction
  | LogoutAction

export const login = (id: string): LoginAction => ({
  type: LOGIN,
  payload: {
    id,
  },
});

export const logout = (): LogoutAction => ({
  type: LOGOUT,
  payload: {},
});
