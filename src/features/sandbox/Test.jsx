import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "semantic-ui-react";
import { openModal } from "../modal/modalReducer";
// import { decrement, increment, incrementByAmount } from "./testReducer";
// import { creatEvent } from "../../features/events/eventReducer";

// function Test() {
//   const data = useSelector((state) => state.counter.value);
//   const events = useSelector((state) => state.eventCrud.value);
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
// import ModalWrapper from "../modal/ModalWrapper";
// import { Form, Formik } from "formik";
// import CustomInput from "../events/eventForm/CustomInput";
// import { advShceam } from "../events/eventForm/schemas";
// const initialValues = {
//   title: "",
//   category: "",
//   city: "",
//   description: "",
//   venue: "",
//   date: "",
// };
function Test({ data }) {
  const dispatch = useDispatch();
  return (
    <>
      <h1>heloo</h1>
      <Button
        onClick={() =>
          dispatch(openModal({ modalType: "TestModal", modalProps: { data } }))
        }
        color="teal"
        content="open modal"
      ></Button>
    </>
  );
}
export default Test;
