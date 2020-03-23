import { createSelector } from 'reselect';
import { State } from './tasks.reducer';

export const selectTasks = (state: any) => state.tasks

export const selectGetTasks = createSelector(selectTasks, (taskReducer: State) => taskReducer)