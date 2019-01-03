// @flow
import { type StateMap } from '../types';
import { expectString } from '../utils/helpers';

export const getAuthedUserId = (state: StateMap): string => (
  expectString(state.get('authedUserId'))
);

export default undefined;
