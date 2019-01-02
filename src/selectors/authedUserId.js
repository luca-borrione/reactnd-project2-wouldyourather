// @flow
import { type StateMap } from '../types';
import { asString } from '../utils/helpers';

export const getAuthedUserId = (state: StateMap): string => (
  asString(state.get('authedUserId'))
);

export default undefined;
