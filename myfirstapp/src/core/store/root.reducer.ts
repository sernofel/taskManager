import { combineReducers } from "redux";
import { taskReducer } from "../../modules/task/store";

const rootReducer = combineReducers({
  tasks: taskReducer
})

export default rootReducer