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


import { Await, defer, json, useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';
import { Suspense } from 'react';

function EventsPage() {
  const {events} = useLoaderData()

  return (
    <Suspense fallback={<p style={{textAlign: 'center'}}>Loading ...</p>}>
      <Await resolve={events}>
        {(loadEvents) => <EventsList events={loadEvents}/>}
      </Await>
    </Suspense>
  )
}  

export default EventsPage;

async function loadEvents() {
  const response = await fetch('http://localhost:8080/events')
  
  if (!response.ok) {
    throw json({message: 'could not fetch events'}, {
      status: 500
    })
  }
  else {
    const resData = await response.json()
    return resData.events
  }
}

export function loader() {
  return defer({
    events: loadEvents()
  })
}