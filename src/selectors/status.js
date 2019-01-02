// @flow
import { type StateMap } from '../types';
import { asString } from '../utils/helpers';

export const getStatus = (state: StateMap): string => (
  asString(state.get('status'))
);

export default undefined;
