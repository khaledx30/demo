import React from "react";
import { Grid } from "semantic-ui-react";
import EventForm from "../eventForm/EventForm";
import EventList from "./EventList";
import { useSelector } from "react-redux";

export default function EventDashboard({
  formOpen,
  setFormOpen,
  selectEvent,
  selectedEvent,
}) {
  const events = useSelector((state) => state.eventCrud.event);
  // const dispatch = useDispatch();
  // function handelCreatEvent(event) {
  //   setEvnets([...events, event]);
  // }

  // function handleUpdateEvent(updatedEvent) {
  //   setEvnets(
  //     events.map((evt) => (evt.id === updatedEvent.id ? updatedEvent : evt))
  //   );
  //   selectEvent(null);
  //   setFormOpen(false);
  // }

  // function handelDeleteEvent(eventId) {
  //   setEvnets(events.filter((evt) => evt.id !== eventId));
  // }

  return (
    <>
      <Grid>
        <Grid.Column width={10}>
          <EventList events={events} selectEvent={selectEvent} />
        </Grid.Column>
        <Grid.Column width={6}>
          {formOpen && (
            <EventForm
              setFormOpen={setFormOpen}
              selectedEvent={selectedEvent}
              key={selectedEvent ? selectedEvent.id : null}
            />
          )}
        </Grid.Column>
      </Grid>
    </>
  );
}
