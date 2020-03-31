import React, { useState } from "react";
import {
  Container,
  Button,
  Typography,
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import { ITask, CategoryTask } from "../models/Task";
import '../../../styles/form.scss'
import { addTask } from "../store/";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { MyCheckBox, MySelect, MyTextField } from "../../../components/inputs-custom"
import { useDispatch } from "react-redux";


const formSchema = Yup.object().shape({
  title: Yup.string()
    .min(5, "Must be 5 characters or more")
    .required("Required"),
  description: Yup.string()
    .max(15, 'Must be 15 characters or less')
});

export const TaskForm = () => {
  
  const [isSubmitting, setSubmitting] = useState(false);
  const dispatch = useDispatch();

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

      dispatch(addTask(newTask));
      setSubmitting(false)
      resetForm({})
    }, 1000) 
      
  }

  const optionsCategory = CategoryTask;

  return (
    <Container maxWidth="xs">
      <Typography variant="h1">
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
            <img className="form_img" src="/assets/icon-task.png" alt="form-img"/>
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

export default TaskForm;
