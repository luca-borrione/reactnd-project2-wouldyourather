export const SET_BUSY_STATE = 'status/SET_BUSY_STATE';
export const SET_ERROR_STATE = 'status/SET_ERROR_STATE';
export const SET_INIT_STATE = 'status/SET_INIT_STATE';
export const SET_READY_STATE = 'status/SET_READY_STATE';

export const setBusyState = () => ({
  type: SET_BUSY_STATE,
});

export const setErrorState = () => ({
  type: SET_ERROR_STATE,
});

export const setInitState = () => ({
  type: SET_INIT_STATE,
});

export const setReadyState = () => ({
  type: SET_READY_STATE,
});
