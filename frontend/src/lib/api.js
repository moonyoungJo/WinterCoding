/*
  서버와 통신하는 코드
*/
import axios from 'axios';

export const getTodoList = () => axios.get('/todo');
export const writeTodo = ({title, priority, content, date}) => axios.post('/todo', {title, priority, content, date});
export const deleteTodo = (_id) => axios.delete(`/todo/${_id}`);
export const updateTodo = ({_id, title, priority, content, date}) => axios.put('/todo', {_id, title, priority, content, date});