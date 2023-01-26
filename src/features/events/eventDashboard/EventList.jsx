import React from "react";
import EventListItem from "./EventListitem";
export default function EventList({ events }) {
  return (
    <>
      {events.map((event) => (
        <EventListItem
          event={event}
          key={event.id}
          // selectEvent={selectEvent}
          // deleteEvent={deleteEvent}
        />
      ))}
    </>
  );
}
