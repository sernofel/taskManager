import { combineEpics } from "redux-observable";
import { tasksEpic } from "../../modules/task/store";

const rootEpic = combineEpics(
  tasksEpic
)

export default rootEpic