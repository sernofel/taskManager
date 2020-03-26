import { ITask, CategoryTask } from "../models/Task"

// eslint-disable-next-line 
const mockResponse: { tasks: ITask[] } = {
  tasks: []
}
// eslint-disable-next-line 
const mockWithValuesResponse: { tasks: ITask[] } = {
  tasks: [
    {
      id: `task2342342423234`,
      title: 'Curso react/redux',
      description: 'What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has bee',
      category: CategoryTask.PROFESIONAL,
      completed: false
    }
  ]
}

export function getTasks() {
  return new Promise ((resolve, reject) => {
    setTimeout( () => {
      resolve(mockWithValuesResponse)
      // reject(new Error('Error to get data'))
    }, 2000)
  })
}