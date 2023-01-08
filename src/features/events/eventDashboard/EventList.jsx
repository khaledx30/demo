import React from "react";
import EventListItem from "./EventListitem";
export default function EventList({ events, selectEvent }) {
  return (
    <>
      {events.map((event) => (
        <EventListItem event={event} key={event.id} selectEvent={selectEvent} />
      ))}
    </>
  );
}
