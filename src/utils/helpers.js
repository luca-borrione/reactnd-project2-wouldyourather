// @flow
import {
  isImmutable,
  List, type List as TList,
  Map, type Map as TMap,
} from 'immutable';

export const isMap = (map: any): boolean => (
  isImmutable(map) && Map.isMap(map)
);

export const isList = (list: any): boolean => (
  isImmutable(list) && List.isList(list)
);

export const asString = (string: any): string => {
  if (typeof string === 'string') {
    return string;
  }
  throw new TypeError(`unexpected type: ${typeof string}`);
};

export const asNumber = (number: any): number => {
  // eslint-disable-next-line no-restricted-globals
  if (typeof number === 'number' && !isNaN(number)) {
    return number;
  }
  throw new TypeError(`unexpected type: ${typeof number}`);
};

export const asMap = (map: any): TMap<any, any> => {
  if (map && isMap(map)) {
    return map;
  }
  throw new TypeError(`unexpected type: ${typeof map}`);
};

export const asList = (list: any): TList<any> => {
  if (list && isList(list)) {
    return list;
  }
  throw new TypeError(`unexpected type: ${typeof list}`);
};
