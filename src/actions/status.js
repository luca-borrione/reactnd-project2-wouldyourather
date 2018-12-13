export const SET_BUSY_STATE = Symbol('status: set busy');
export const SET_ERROR_STATE = Symbol('status: set error');
export const SET_READY_STATE = Symbol('status: set ready');

export function setBusyState() {
  return {
    type: SET_BUSY_STATE,
  };
}

export function setErrorState() {
  return {
    type: SET_ERROR_STATE,
  };
}

export function setReadyState() {
  return {
    type: SET_READY_STATE,
  };
}
