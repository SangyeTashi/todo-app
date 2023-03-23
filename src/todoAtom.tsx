import { atom } from 'recoil';

export interface Todo {
    id?: string;
    title: string;
    completed: boolean;
}

export const todoListAtom = atom({
    key: 'todoListState',
    default: [] as Todo[],
});

export const completedTodoListAtom = atom({
    key: 'completedTodoListState',
    default: [] as Todo[],
});
