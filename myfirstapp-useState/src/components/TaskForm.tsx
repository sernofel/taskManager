import * as React from "react";
import {
  TextField,
  Container,
  Button,
  Typography,
  makeStyles,
  FormControl,
  InputLabel,
  Select
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import { ITask, CategoryTask } from "./Task";
import '../styles/form.scss'
import { SyntheticEvent } from "react";
// const useStyles = makeStyles(theme => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center"
//   },

//   form: {
//     width: "100%", // Fix IE 11 issue.
//     marginTop: theme.spacing(1)
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2)
//   }
// }));

export default class TaskForm extends React.Component<ITaksFormProps, any> {
  // classes = useStyles();

  constructor(props: ITaksFormProps) {
    super(props);
    this.state = {
      title: '',
      description: ''
    }

    this.handleSyntheticEventChange = this.handleSyntheticEventChange.bind(
      this
    );
  }

  getCurrentTimestamp(): number {
    return new Date().getTime()
  }

  handleNewTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newTask: ITask = {
      id: `task${(this.getCurrentTimestamp())}`,
      title: this.state.title,
      description: this.state.description,
      category: this.state.category,
      completed: false
    };

    this.props.addNewTask(newTask);
    this.setState({title: '', description: ''})
    console.log("saving !", e);
  }

  handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
    const {name, value} = e.target

    this.setState({
      [name]: value
    })
  }
  handleSyntheticEventChange(event: React.ChangeEvent<any>){
    event.persist()
    this.handleInputChange(event)
  }

  render() {
    const optionsCategory = CategoryTask;

    return (
      <Container maxWidth="xs">
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>

        <form className="form" onSubmit={e => this.handleNewTask(e)}>
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-age-native-simple">
              Category
            </InputLabel>
            <Select
              native
              value={this.state.category}
              onChange={e => this.handleSyntheticEventChange(e)}
              labelWidth={1}
              inputProps={{
                name: "category",
                id: "outlined-age-native-simple"
              }}
            >
              <option value={optionsCategory.PROFESIONAL}>
                {optionsCategory.PROFESIONAL}
              </option>
              <option value={optionsCategory.HOBBIE}>
                {optionsCategory.HOBBIE}
              </option>
            </Select>
          </FormControl>

          <TextField
            className="form_input"
            id="task-text"
            name="title"
            label="Task Text"
            variant="standard"
            onChange={e => this.handleInputChange(e)}
            value={this.state.title}
          />
          <TextField
            className="form_input"
            id="task-description"
            label="Task Description"
            name="description"
            variant="standard"
            onChange={e => this.handleInputChange(e)}
            value={this.state.description}
          />
          <div className="form_buttons-container">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              endIcon={<SaveIcon />}
            >
              Guardar
            </Button>
          </div>
        </form>
      </Container>
    );
  }
}

interface ITaksFormProps {
  addNewTask: (Task: ITask) => void;
}

interface ItaskFormState {
  title: string
  description: string
}
