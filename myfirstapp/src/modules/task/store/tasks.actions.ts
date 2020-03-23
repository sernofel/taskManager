import { createAction, ActionType, createAsyncAction } from 'typesafe-actions';
import { ITask } from '../models/Task';


export const ADD_TASK = 'ADD_TASK'
export const DELETE_TASK = 'DELETE_TASK'
export const COMPLETE_TASK = 'COMPLETE_TASK'

export const FETCH_TASK_REQUEST = 'FETCH_TASK_REQUEST'
export const FETCH_TASK_SUCCESS = 'FETCH_TASK_SUCCESS'
export const FETCH_TASK_FAILURE = 'FETCH_TASK_FAILURE'

export const addTask = createAction(ADD_TASK, (task: ITask) => task)<ITask>()
export const completeTask = createAction(COMPLETE_TASK, (id: string) => id)<string>()
export const deleteTask = createAction(DELETE_TASK, (id: string) => id)<string>()

export const fetchTasks = createAsyncAction(
  FETCH_TASK_REQUEST,
  FETCH_TASK_SUCCESS,
  FETCH_TASK_FAILURE
  )<undefined, ITask[], Error>()

export default {
  addTask,
  completeTask,
  deleteTask
}

export type TasksActions = ActionType<typeof addTask | typeof completeTask | typeof deleteTask>