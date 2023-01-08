import React, { useState } from "react";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar";
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
      <NavBar setFormOpen={handelCreateFormOpen} />
      <Container className="main">
        <EventDashboard
          formOpen={formOpen}
          setFormOpen={setFormOpen}
          selectEvent={handelSelectEvent}
          selectedEvent={selectEvent}
        />
      </Container>
    </>
  );
}

export default App;
