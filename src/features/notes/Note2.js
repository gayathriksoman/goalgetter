import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from 'react-router-dom'
import { useUpdateNoteMutation } from "./notesApiSlice"

import { useGetNotesQuery } from './notesApiSlice'

import './Note2.css'

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
    console.log(daysOfMonth)

    if (note) {
        const handleEdit = () => navigate(`/dash/notes/${noteId}`);
        const note_days = note.days || [];
        const days = getDaysFromTimestamps(note_days);

        return (
            <div className="note">
                <div className='note-header'>
                    <h2 className="note-title">{note.title} - {note.username}</h2>
                    <div className="note-header-right">
                        <button
                            className="icon-button note-edit"
                            onClick={handleEdit}
                        >
                            <FontAwesomeIcon icon={faPenToSquare} />
                        </button>
                        <button
                            className="note-done-button"
                            onClick={doneToday}
                        >
                            Done Today
                        </button>
                    </div>
                </div>
                <div className="note-row">
                    {
                        daysOfMonth.map((day) =>
                            days.includes(day)
                                ? <div className="note-day done">{day}</div>
                                : <div className="note-day">{day}</div>
                        )
                    }
                </div>


            </div>
        )

    } else return null
}
export default Note