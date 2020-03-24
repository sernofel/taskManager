import React, { useState } from "react";
import {
  Container,
  Button,
  Typography,
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import { ITask, CategoryTask } from "./Task";
import '../styles/form.scss'
import { addTask } from "../store/tasks/";
import { connect } from "react-redux";
import { Formik, Form, Field, useField } from "formik";
import * as Yup from "yup";
import { MyCheckBox, MySelect, MyTextField } from "./inputs-custom";


const formSchema = Yup.object().shape({
  title: Yup.string()
    .min(5, "Must be 5 characters or more")
    .required("Required"),
  description: Yup.string()
    .max(15, 'Must be 15 characters or less')
});

function mapDispatchToProps(dispatch: any) {
  return {
    addNewTask: (task: ITask) => dispatch(addTask(task))
  };
}

export const TaskForm = (props: ITaksFormProps) => {
  
  const [isSubmitting, setSubmitting] = useState(false);

  function getCurrentTimestamp(): number {
    return new Date().getTime();
  }


  function handleSubmit(values: ITask, { resetForm } : any) {
    setSubmitting(true);

    setTimeout( () => {

      const newTask: ITask = {
        id: `task${getCurrentTimestamp()}`,
        title: values.title,
        description: values.description,
        category: values.category,
        completed: values.completed
      };

      console.log(newTask);

      props.addNewTask(newTask);
      setSubmitting(false)
      resetForm({})
    }, 1000) 
      
  }

  const optionsCategory = CategoryTask;

  return (
    <Container maxWidth="xs">
      <Typography component="h1" variant="h5">
        CREATE NEW TASK
      </Typography>
      <Formik
        initialValues={{
          id: "",
          category: optionsCategory.PROFESIONAL,
          title: "",
          description: "",
          completed: false
        }}
        validationSchema={formSchema}
        onSubmit={handleSubmit}
      >
        { ( {isValid}) => (
          <Form className="form">
            <img className="form_img" src="/assets/icon-task.png"/>
            <MySelect name="category" optionsCategory={optionsCategory} />

            <Field
              className="form_input"
              id="task-text"
              name="title"
              label="Task Text"
              component={MyTextField}
            />

            <Field
              className="form_input"
              id="task-description"
              label="Task Description"
              name="description"
              component={MyTextField}
            />

            <MyCheckBox label="Completed" name="completed" />

            <div className="form_buttons-container">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                endIcon={<SaveIcon />}
                disabled={isSubmitting || !isValid}
              >
                Guardar
              </Button>
            </div>
          </Form>
        )}
        
      </Formik>
    </Container>
  );
}

interface ITaksFormProps {
  addNewTask: (Task: ITask) => void;
}

const ConnectedTaskForm = connect(null, mapDispatchToProps)(TaskForm);

export default ConnectedTaskForm;
