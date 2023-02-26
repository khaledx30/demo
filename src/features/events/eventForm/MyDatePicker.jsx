import { useField, useFormikContext } from "formik";
import { FormField, Label } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const MyDatePicker = ({ label, ...props }) => {
  const [filed, meta, helpers] = useField(props);
  const { setFiledValue } = useFormikContext();
  return (
    <>
      <FormField error={meta.touched && !!meta.error}>
        <label>{label}</label>
        <DatePicker
          {...filed}
          {...props}
          selected={(filed.value && new Date(filed.value)) || null}
          onChange={(value) => setFiledValue(filed.name, value)}
        />
        {meta.touched && meta.error ? (
          <Label basic color="red" className="error">
            {meta.error}
          </Label>
        ) : null}
      </FormField>
    </>
  );
};

export default MyDatePicker;
