// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Button } from "semantic-ui-react";
// import { decrement, increment, incrementByAmount } from "./testReducer";
// import { creatEvent } from "../../features/events/eventReducer";

// function Test() {
//   const data = useSelector((state) => state.counter.value);
//   const events = useSelector((state) => state.eventCrud.value);
//   const dispatch = useDispatch();
//   const khaled = { man: "kahld" };
//   console.log(events);
//   return (
//     <>
//       <h1>hello from test: {events[0].city} </h1>
//       <Button onClick={() => dispatch(creatEvent({ khaled }))}></Button>
//       <Button onClick={() => dispatch(decrement(3))}></Button>
//     </>
//   );
// }
import React from "react";
import { Form, Formik } from "formik";
import CustomInput from "../events/eventForm/CustomInput";
import { advShceam } from "../events/eventForm/schemas";
const initialValues = {
  title: "",
  category: "",
  city: "",
  description: "",
  venue: "",
  date: "",
};
const Test = () => (
  <div>
    <h1>My Form</h1>
    <Formik initialValues={initialValues} validationSchema={advShceam}>
      {(props) => (
        <Form>
          <CustomInput name="title" placeholder="title" type="text" />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);
export default Test;
