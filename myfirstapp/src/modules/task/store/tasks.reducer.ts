import { OperationStatus } from './../../../shared/models/operationStatus';
import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, TasksActions, FETCH_TASK_REQUEST, FETCH_TASK_FAILURE, FETCH_TASK_SUCCESS } from './tasks.actions';
import { createReducer } from 'typesafe-actions';
import { ITask } from '../models/Task';

export interface State {
  tasks: ITask[]
  operationStatus?: OperationStatus
}

const initState: State = { tasks: []}

export const taskReducer = createReducer<State>(initState)
  .handleAction(ADD_TASK, (state: State, action: TasksActions) => ({
        ...state, ...{
          tasks: [
            ...state.tasks, action.payload
          ]
        }
  }))

  .handleAction(DELETE_TASK, (state: State, action: TasksActions) => (
    {
      ...state, ...{
        tasks: state.tasks.filter((task: ITask) => task.id !== action.payload)
      }
    }
  ))

  .handleAction(COMPLETE_TASK, (state: State, action: TasksActions) => (
    {
      ...state, ...{
        tasks: state.tasks.map((task: ITask) => {
          return task.id === action.payload ? { ...task, completed: true } : task
        })
      }
    }
  ))

  .handleAction(FETCH_TASK_REQUEST, ((state: State) => ({ ...state, operationStatus: OperationStatus.IN_PROGRESS}) ))
  .handleAction(FETCH_TASK_SUCCESS, ((state: State, action: any) => ({ ...state, ...action.payload, operationStatus: OperationStatus.SUCCESS}) ))
  .handleAction(FETCH_TASK_FAILURE, ((state: State, error: Error) => ({ ...state, operationStatus: OperationStatus.FAILED }) ))
  

export default {
  taskReducer
}