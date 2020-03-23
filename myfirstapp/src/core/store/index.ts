import { applyMiddleware, createStore } from "redux";
import { createEpicMiddleware } from "redux-observable";
import rootEpic from "./root.epics";
import rootReducer from "./root.reducer";


export default function () {
  const epicMiddleware = createEpicMiddleware()

  let store = createStore(rootReducer, applyMiddleware(epicMiddleware));

  epicMiddleware.run(rootEpic)

  return store
}