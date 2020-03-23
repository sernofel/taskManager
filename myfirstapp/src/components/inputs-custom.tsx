import { useField } from "formik";
import React from "react";
import { Checkbox, FormControlLabel, TextField, FormControl, InputLabel, Select } from "@material-ui/core";

export const MyCheckBox = ({ label, ...props }: any) => {
  const [field] = useField(props.name);

  return (
    <FormControlLabel
      control={
        <Checkbox
          {...field}
          value="checkedB"
          color="primary"
          checked={field.value}
        />
      }
      label={label}
    />
  );
};

export const MyTextField = ({ field, form: { touched, errors }, ...props }: any) => {
  const errorField: any = touched[field.name] && errors[field.name];

  return (
    <>
      <TextField
        {...field}
        {...props}
        variant="outlined"
        error={!!errorField}
        helperText={errorField}
      />
    </>
  );
};

export const MySelect = ({ optionsCategory, ...props }: any) => {
  const [field] = useField(props.name);

  return (
    <FormControl variant="outlined" className="form_input">
      <InputLabel htmlFor={`select${props.name}`}>Category</InputLabel>
      <Select
        native
        labelWidth={70}
        {...field}
        inputProps={{
          id: `select${props.name}`
        }}
      >
        <option value={optionsCategory.PROFESIONAL}>
          {optionsCategory.PROFESIONAL}
        </option>
        <option value={optionsCategory.HOBBIE}>{optionsCategory.HOBBIE}</option>
      </Select>
    </FormControl>
  );
};

// export default MyCheckBox;
