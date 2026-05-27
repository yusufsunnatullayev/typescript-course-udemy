import { combineReducers } from "redux";
import { todosRecuder } from "./todos";
import { Todo } from "../actions";

export interface StoreState {
  todos: Todo[];
}

export const reducers = combineReducers<StoreState>({
  todos: todosRecuder,
});
