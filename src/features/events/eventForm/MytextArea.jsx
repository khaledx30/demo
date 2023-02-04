import { useField } from "formik";
import { FormField, Label } from "semantic-ui-react";
const MytextArea = ({ label, ...props }) => {
  const [filed, meta] = useField(props);
  console.log("filed", filed);
  console.log("meta", meta);

  return (
    <>
      <FormField error={meta.touched && !!meta.error}>
        <label>{label}</label>
        <textarea {...filed} {...props} />
        {meta.touched && meta.error ? (
          <label basic color="red" className="error">
            {meta.error}
          </label>
        ) : null}
      </FormField>
    </>
  );
};

export default MytextArea;
