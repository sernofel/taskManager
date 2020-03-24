import { combineReducers } from 'redux';
import { ADD_TASK, DELETE_TASK, COMPLETE_TASK } from './tasks.actions';
import { ITask } from '../../components/Task';

export interface State {
  tasks: ITask[]
}

const initState: State = { tasks : [] }

function taskReducer (state: State = initState, action: any) {

  switch(action.type) {
    case ADD_TASK:
      return {
        ...state, ...{
          tasks: [
            ...state.tasks, action.task
          ]
        }
      }

    case DELETE_TASK:
      return {
        ...state, ...{
          tasks: state.tasks.filter((task: ITask) => task.id !== action.id)
        }
      }

    case COMPLETE_TASK:
      return {
        ...state, ...{
          tasks: state.tasks.map((task: ITask) => {
            return task.id === action.id ? { ...task, completed: true } : task
          })
        }
      }

    default: // need this for default case
      return state

  }
}

function visibilityTaskReducer(state: State = initState, action: any) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

const taskApp = combineReducers({
  tasks: taskReducer,
  visibility: visibilityTaskReducer
})

export default taskApp