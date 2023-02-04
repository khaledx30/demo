import { useField } from "formik";

const CustomInput = ({ ...props }) => {
  const [filed, meta] = useField(props);
  console.log("filed", filed);
  console.log("meta", meta);

  return (
    <>
      <input {...filed} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};
export default CustomInput;
