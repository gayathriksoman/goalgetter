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
            <div className="notes_list_page">
                <div>{tableContent}</div>
                <img src={`${process.env.PUBLIC_URL}/yarn_catto.png`}  alt="yarn_catto" className="yarn_catto" />
            </div>

                    
                
        )
    }

    return content
}
export default NotesList