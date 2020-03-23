import { ITask, CategoryTask } from "../models/Task"

const mockResponse: { tasks: ITask[] } = {
  tasks: []
}

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
  return new Promise (resolve => {
    setTimeout( () => {
      resolve(mockResponse)
    }, 2000)
  })
}