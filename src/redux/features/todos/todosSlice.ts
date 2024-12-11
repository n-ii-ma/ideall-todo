import {
  createSlice,
  createEntityAdapter,
  createDraftSafeSelector,
} from '@reduxjs/toolkit';

import type { RootState } from '@/redux/store';
import type { Todo } from '@/interfaces/global/types';

// Initialize Entity adapter
const todosAdapter = createEntityAdapter({
  selectId: (todo: Todo) => todo.id,
});

// Create todo slice
const todosSlice = createSlice({
  name: 'todos',
  initialState: todosAdapter.getInitialState(),
  reducers: {
    todoAdded: todosAdapter.addOne,
    todoToggled: (state, action) => {
      const todo = state.entities[action.payload];
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    todoRemoved: todosAdapter.removeOne,
  },
});

// Create a set of memoized selectors based on the location of the todo entity state
export const todosSelectors = todosAdapter.getSelectors<RootState>(
  state => state.todos,
);

// Create a memoized selector to calculate the number of remaining todos
export const remainingTodosSelector = createDraftSafeSelector(
  todosSelectors.selectAll,
  todos => todos.filter(todo => !todo.completed).length,
);

// Actions
export const { todoAdded, todoToggled, todoRemoved } = todosSlice.actions;

// Reducer
export default todosSlice.reducer;
