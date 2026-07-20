type NoteDetailPageProps = {
    params: Promise <{
        id: string;
    }>;
    };
export default async function NoteDetailPage({ params ,


}: NoteDetailPageProps) {
    const { id } = await params;
    return (
        <div>
            <h1>Chi tiết ghi chú</h1>
            <p>ID ghi chú: {id}</p>
        </div>
    );
}