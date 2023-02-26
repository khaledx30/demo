import { useField } from "formik";
import { FormField, Label, Select } from "semantic-ui-react";
const MySelectInput = ({ label, ...props }) => {
  const [filed, meta, helpers] = useField(props);
  const myStyle = {
    border: "none !important",
  };
  return (
    <>
      <FormField error={meta.touched && !!meta.error}>
        <label>{label}</label>
        <Select
          clearable
          value={filed.value || null}
          onChange={(e, d) => helpers.setValue(d.value)}
          onBlur={() => helpers.setTouched(true)}
          {...props}
        />
        {meta.touched && meta.error ? (
          <Label
            basic
            color="red"
            className="error"
            style={{ border: "none !important" }}
          >
            {meta.error}
          </Label>
        ) : null}
      </FormField>
    </>
  );
};

export default MySelectInput;
