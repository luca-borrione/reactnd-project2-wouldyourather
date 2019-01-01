// @flow
import {
  isImmutable,
  List,
  Map,
} from 'immutable';

export const isMap = (map: any): boolean => (
  isImmutable(map) && Map.isMap(map)
);

export const isList = (list: any): boolean => (
  isImmutable(list) && List.isList(list)
);

export default undefined;
