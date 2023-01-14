import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import EventForm from "../eventForm/EventForm";
import EventList from "./EventList";
import { sampleData } from "../../../app/api/sampleData";
export default function EventDashboard({
  formOpen,
  setFormOpen,
  selectEvent,
  selectedEvent,
}) {
  const [events, setEvnets] = useState(sampleData);

  function handelCreatEvent(event) {
    setEvnets([...events, event]);
  }

  function handleUpdateEvent(updatedEvent) {
    setEvnets(
      events.map((evt) => (evt.id === updatedEvent.id ? updatedEvent : evt))
    );
    selectEvent(null);
    setFormOpen(false);
  }

  function handelDeleteEvent(eventId) {
    setEvnets(events.filter((evt) => evt.id !== eventId));
  }

  return (
    <>
      <Grid>
        <Grid.Column width={10}>
          <EventList
            events={events}
            selectEvent={selectEvent}
            deleteEvent={handelDeleteEvent}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          {formOpen && (
            <EventForm
              setFormOpen={setFormOpen}
              setEvents={setEvnets}
              creatEvent={handelCreatEvent}
              selectedEvent={selectedEvent}
              updatedEvent={handleUpdateEvent}
              key={selectedEvent ? selectedEvent.id : null}
            />
          )}
        </Grid.Column>
      </Grid>
    </>
  );
}
