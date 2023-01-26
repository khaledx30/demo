import React, { useState } from "react";
import { Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import EventDetailed from "../../features/events/eventDitailed/EventDetalied";
import EventForm from "../../features/events/eventForm/EventForm";
import Home from "../../features/home/Home";
import NavBar from "../../features/nav/NavBar";
import Test from "../../features/sandbox/Test";
// here is comment from git hub rebo lol
function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectEvent, setSelectedEvent] = useState(null);

  function handelSelectEvent(event) {
    setSelectedEvent(event);
    setFormOpen(true);
  }
  function handelCreateFormOpen() {
    setSelectedEvent(null);
    setFormOpen(true);
  }

  return (
    <>
      <Route exact path={"/"} component={Home}></Route>
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <NavBar setFormOpen={handelCreateFormOpen} />
            <Container className="main">
              <Route exact path={"/events"} component={EventDashboard}></Route>
              <Route exact path={"/test"} component={Test}></Route>
              <Route
                exact
                path={"/events/:id"}
                component={EventDetailed}
              ></Route>
              <Route
                exact
                path={["/createEvent", "/manage/:id"]}
                component={EventForm}
              ></Route>
            </Container>
          </>
        )}
      ></Route>
    </>
  );
}

export default App;
//  {/* <EventDashboard
//           formOpen={formOpen}
//           setFormOpen={setFormOpen}
//           selectEvent={handelSelectEvent}
//           selectedEvent={selectEvent}
//         /> */}
