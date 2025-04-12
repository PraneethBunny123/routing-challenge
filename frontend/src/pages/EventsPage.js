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


import { useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {
  const data = useLoaderData()
  const events = data.events
  

  return (
      <EventsList events={events} />
  );
}

export default EventsPage;

export async function loader() {
  const response = await fetch('http://localhost:8080/events')
  
  if (!response.ok) {
    throw new Response(JSON.stringify({message: 'could not fetch events'}), {
      status: 500
    })
  }
  else {
    return response
  }
}