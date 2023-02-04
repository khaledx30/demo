import { useField } from "formik";
import { FormField, Label } from "semantic-ui-react";
const MyInput = ({ label, ...props }) => {
  const [filed, meta] = useField(props);
  console.log("filed", filed);
  console.log("meta", meta);

  return (
    <>
      <FormField error={meta.touched && !!meta.error}>
        <label>{label}</label>
        <input {...filed} {...props} />
        {meta.touched && meta.error ? (
          <Label basic color="red" className="error">
            {meta.error}
          </Label>
        ) : null}
      </FormField>
    </>
  );
};

export default MyInput;
