import { notes } from "@/data/notes";
type NoteDetailPageProps = {
    params: Promise <{
        id: string;
    }>;
    };
export default async function NoteDetailPage({ params ,


}: NoteDetailPageProps) {
    const { id } = await params;
    const note = notes.find((note) => note.id === Number(id));
    if (!note) {
        return <h1>Không tìm thấy ghi chú</h1>;
      }
    return (
        <div>
            <h1>Chi tiết ghi chú</h1>
            <p>ID ghi chú: {id}</p>
            <p>{note.title}</p>    
            <p>{note.content}</p>
        </div>
    );
}