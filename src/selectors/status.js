// @flow
import { type StateMap } from '../types';
import { expectString } from '../utils/helpers';

export const getStatus = (state: StateMap): string => (
  expectString(state.get('status'))
);

export default undefined;
