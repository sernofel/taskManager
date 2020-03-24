export interface ITask {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  category?: CategoryTask;
}

export enum CategoryTask {
  PROFESIONAL = "PROFESIONAL",
  HOBBIE = "HOBBIE"
}
