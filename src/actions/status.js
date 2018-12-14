export const SET_BUSY_STATE = Symbol('status: set busy');
export const SET_ERROR_STATE = Symbol('status: set error');
export const SET_READY_STATE = Symbol('status: set ready');

export const setBusyState = () => ({
  type: SET_BUSY_STATE,
});

export const setErrorState = () => ({
  type: SET_ERROR_STATE,
});

export const setReadyState = () => ({
  type: SET_READY_STATE,
});
