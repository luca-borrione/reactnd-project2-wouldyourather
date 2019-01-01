// @flow
import {
  type StateMap,
  type StateValue,
} from '../types';

export const getAuthedUserId = (state: StateMap): string => {
  const authedUserId: StateValue | void = state.get('authedUserId');
  if (typeof authedUserId === 'string') {
    return authedUserId;
  }
  throw new TypeError(`unexpected type: ${typeof authedUserId}`);
};

export default undefined;
