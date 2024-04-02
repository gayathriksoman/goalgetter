import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from 'react-router-dom'
import { useUpdateNoteMutation } from "./notesApiSlice"

import { useGetNotesQuery } from './notesApiSlice'

function getDayFromDate(timestamp) {
    // Create a Date object from the timestamp string
    const date = new Date(timestamp);
    // Extract the day of the month
    const day = date.getDate();
    return day;
}

function getDaysFromTimestamps(timestamps) {
    return timestamps.map(timestamp => getDayFromDate(timestamp));
}


const Note = ({ noteId }) => {

    const [updateNote] = useUpdateNoteMutation()

    const doneToday = async function () {

        // Clone the user object to avoid mutating the original object
        const tempNote = { ...note };

        // Generate today's timestamp
        const todayTimestamp = new Date().toISOString();

        // Add today's timestamp to the timestamps array
        tempNote.days = [...note.days, todayTimestamp];
        await updateNote(tempNote);
    }

    const { note } = useGetNotesQuery("notesList", {
        selectFromResult: ({ data }) => ({
            note: data?.entities[noteId]
        }),
    })

    const navigate = useNavigate()

    const daysOfMonth = Array.from({ length: 31 }, (_, i) => i + 1);

    if (note) {
        const handleEdit = () => navigate(`/dash/notes/${noteId}`);
        const days = getDaysFromTimestamps(note.days);

        return (
            <tr className="table__row2">
                <td className="table__cell2 note__title">{note.title}</td>
                <td className="table__cell2 note__username">{note.username}</td>
                {
                    daysOfMonth.map((day) =>
                        days.includes(day)
                            ? <td className="table__cell2">x</td>
                            : <td className="table__cell2"></td>
                    )
                }

                <td className="table__cell2">
                    <button
                        className="icon-button table__button2"
                        onClick={handleEdit}
                    >
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                </td>
                <td className="table__cell2">
                    <button
                        className="table__button2"
                        onClick={doneToday}
                    >
                        Done Today
                    </button>
                </td>
            </tr>
        )

    } else return null
}
export default Note