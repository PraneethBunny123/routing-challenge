import { Link } from "react-router-dom"

const EVENTS = [
    {
      "id": "e1",
      "title": "A dummy event 1",
    },
    {
        "id": "e2",
        "title": "A dummy event 2"
    },
    {
        "id": "e3",
        "title": "A dummy event 3"
    }
  ]

export default function EventsPage() {
    return (
        <>
            <ul>
                {EVENTS.map(event => (
                    <li key={event.id}>
                        <h3>
                            <Link to={`/events/${event.id}`}>{`${event.title} with id: ${event.id}`}</Link>
                        </h3>
                    </li>
                ))}
            </ul>
        </>
    )
}