import { atom } from 'recoil';

const localTodo = localStorage.getItem('todo');
const localCompleted = localStorage.getItem('completed');
export interface Todo {
    id?: string;
    title: string;
    completed: boolean;
}
export const todoListAtom = atom({
    key: 'todoListState',
    default: (localTodo ? JSON.parse(localTodo) : []) as Todo[],
});

export const completedTodoListAtom = atom({
    key: 'completedTodoListState',
    default: (localCompleted ? JSON.parse(localCompleted) : []) as Todo[],
});
