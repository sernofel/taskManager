import { Epic } from 'redux-observable'
import { fetchTasks } from './tasks.actions'
import { isActionOf } from "typesafe-actions"
import { filter, switchMap, map, catchError } from "rxjs/operators"
import { getTasks } from '../services/task.service'
import { from, of } from 'rxjs'


export const tasksEpic: Epic<any> = (
  action$
) =>
  action$.pipe(
    filter(isActionOf(fetchTasks.request)),
    switchMap( () =>
      from(getTasks()).pipe(
        map((response: any) => fetchTasks.success(response)),
        catchError((error: Error) => {
          return of(fetchTasks.failure(error))
        }),
      ),
    )
  )

export default {
  tasksEpic
}