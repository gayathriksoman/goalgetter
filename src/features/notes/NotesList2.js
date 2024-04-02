import { useGetNotesQuery } from "./notesApiSlice"
import Note from "./Note2"

const NotesList = () => {
    const {
        data: notes,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetNotesQuery('notesList', {
        pollingInterval: 15000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    })


    const daysOfMonth = Array.from({ length: 31 }, (_, i) => i + 1);

    let content

    if (isLoading) content = <p>Loading...</p>

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>
    }

    if (isSuccess) {
        const { ids } = notes

        const tableContent = ids?.length
            ? ids.map(noteId => <Note key={noteId} noteId={noteId} />)
            : null

        content = (
            <table className="table2 table--notes2">
                <thead className="table__thead2">
                    <tr>
                        <th scope="col" className="table__th2 note__status">Username</th>
                        <th scope="col" className="table__th2 note__created">Created</th>
                        {
                            daysOfMonth.map((day) =>
                                <th scope="col" className="table__th2 note__date">{day}</th>
                            )
                        }
                        <th scope="col" className="table__th2 note__edit">Edit</th>
                        <th scope="col" className="table__th2 note__edit">Done</th>
                    </tr>
                </thead>
                <tbody>
                    {tableContent}
                </tbody>
            </table>
        )
    }

    return content
}
export default NotesList