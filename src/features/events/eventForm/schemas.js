import * as yup from "yup";
export const advShceam = yup.object().shape({
  title: yup
    .string()
    .min(3, "title must be at least 3 character")
    .required("Required"),
  city: yup.string().required("Required"),
  description: yup.string().required("Required"),
  venue: yup.string().required("Required"),
  date: yup.string().required("Required"),
  category: yup.string().required("Required"),
});
