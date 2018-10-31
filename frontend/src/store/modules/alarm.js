import {createAction, handleActions} from 'redux-actions';
import {Map} from 'immutable';

const TOGGLE_ALARM = 'alarm/TOGGLE_ALARM';

export const toggleAlarm=createAction(TOGGLE_ALARM);

const initialState = Map({
  show: false,
});

export default handleActions({
  [TOGGLE_ALARM]: (state, action) => {
    const cur = state.get('show');
    return state.set('show', !cur);
  },
}, initialState);