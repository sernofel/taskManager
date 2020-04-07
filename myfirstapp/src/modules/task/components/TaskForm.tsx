import React, { useState } from "react";
import {
  Container,
  Button,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import { ITask, CategoryTask } from "../models/Task";
import '../../../styles/form.scss'
import { addTask } from "../store/";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import {TextField, Select, CheckboxWithLabel} from 'formik-material-ui'

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
      <Typography variant="h1">CREATE NEW TASK</Typography>
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
        {({ isValid }) => (
          <Form className="form">
            <img
              className="form_img"
              src="/assets/icon-task.png"
              alt="form-img"
            />

            <FormControl className="form_input" variant="outlined">
              <InputLabel htmlFor="category">Category</InputLabel>
              <Field
                component={Select}
                name="category"
                inputProps={{
                  id: "category"
                }}
                labelWidth={70}
              >
                <MenuItem value={optionsCategory.PROFESIONAL}>
                  {optionsCategory.PROFESIONAL}
                </MenuItem>
                <MenuItem value={optionsCategory.HOBBIE}>
                  {optionsCategory.HOBBIE}
                </MenuItem>
              </Field>
            </FormControl>

            <Field
              className="form_input"
              id="task-text"
              name="title"
              label="Task Text"
              component={TextField}
              variant="outlined"
            />

            <Field
              className="form_input"
              id="task-description"
              label="Task Description"
              name="description"
              component={TextField}
              variant="outlined"
            />

            <Field
              component={CheckboxWithLabel}
              name="completed"
              color="primary"
              Label={{ label: "Completed" }}
            />

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
