// import { Link } from "react-router-dom"

// const EVENTS = [
//     {
//       "id": "e1",
//       "title": "A dummy event 1",
//     },
//     {
//         "id": "e2",
//         "title": "A dummy event 2"
//     },
//     {
//         "id": "e3",
//         "title": "A dummy event 3"
//     }
//   ]

// export default function EventsPage() {
//     return (
//         <>
//             <ul>
//                 {EVENTS.map(event => (
//                     <li key={event.id}>
//                         <h3>
//                             <Link to={event.id}>{`${event.title} with id: ${event.id}`}</Link>
//                         </h3>
//                     </li>
//                 ))}
//             </ul>
//         </>
//     )
// }

/////////////////////////////////////////////////////////////////////////////////////


import { useEffect, useState } from 'react';

import EventsList from '../components/EventsList';

function EventsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedEvents, setFetchedEvents] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchEvents() {
      setIsLoading(true);
      const response = await fetch('http://localhost:8080/events');

      if (!response.ok) {
        setError('Fetching events failed.');
      } else {
        const resData = await response.json();
        setFetchedEvents(resData.events);
      }
      setIsLoading(false);
    }

    fetchEvents();
  }, []);
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div>
      {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />}
    </>
  );
}

export default EventsPage;