import { ITask } from "../../components/Task"


export const ADD_TASK = 'ADD_TASK'
export const DELETE_TASK = 'DELETE_TASK'
export const COMPLETE_TASK = 'COMPLETE_TASK'

export function addTask(task: ITask) {
  return {type: ADD_TASK, task}
}

export function completeTask(id: string) {
  return {type: COMPLETE_TASK, id}
}

export function deleteTask(id: string) {
  return { type: DELETE_TASK, id }
}