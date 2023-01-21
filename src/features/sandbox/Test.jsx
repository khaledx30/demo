import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import { decrement, increment, incrementByAmount } from "./testReducer";
import { creatEvent } from "../../features/events/eventReducer";

function Test() {
  const data = useSelector((state) => state.counter.value);
  const events = useSelector((state) => state.eventCrud.value);
  const dispatch = useDispatch();
  const khaled = { man: "kahld" };
  console.log(events);
  return (
    <>
      <h1>hello from test: {events[0].city} </h1>
      <Button onClick={() => dispatch(creatEvent({ khaled }))}></Button>
      <Button onClick={() => dispatch(decrement(3))}></Button>
    </>
  );
}
export default Test;
