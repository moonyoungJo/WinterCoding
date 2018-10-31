import {createAction, handleActions} from 'redux-actions';
import {Map} from 'immutable';

const TOGGLE_EDITOR = 'editor/TOGGLE_EDITOR';
const CHANGE_EDITOR = 'editor/CHANGE_EDITOR';
const MODIFY_EDITOR = 'editor/MODIFY_EDITOR';

export const toggleEditor=createAction(TOGGLE_EDITOR);
export const changeEditor=createAction(CHANGE_EDITOR);
export const modifyEditor=createAction(MODIFY_EDITOR);

const initialState = Map({
  show: false,
  title: '',
  priority: '1',
  date: '',
  content: '',
  _id: ''
});

export default handleActions({
  [TOGGLE_EDITOR]: (state, action) => {
    const cur = state.get('show');
    if(cur === true){
      return initialState;
    }
    return state.set('show', true);
  },
  [CHANGE_EDITOR]: (state, action) => {
    const {name, value} = action.payload;
    return state.set(name, value);
  },
  [MODIFY_EDITOR]: (state, action) => {
    const {title, priority, date, content, _id} = action.payload;
    return state.set('show', true)
                .set('title', title)
                .set('priority', priority)
                .set('date', date)
                .set('content', content)
                .set('_id', _id);
  }
}, initialState);