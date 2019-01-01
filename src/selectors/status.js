// @flow
import {
  type StateMap,
  type StateValue,
} from '../types';

export const getStatus = (state: StateMap): string => {
  const status: StateValue | void = state.get('status');
  if (typeof status === 'string') {
    return status;
  }
  throw new TypeError(`unexpected type: ${typeof status}`);
};

export default undefined;
