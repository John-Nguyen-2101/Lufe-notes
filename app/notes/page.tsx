import Link from "next/link";
import { notes } from "@/data/notes";

export default function NotesPage() {
  return (
    <div>
      <h1>Danh sách ghi chú</h1>

      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <Link href={`/notes/${note.id}`}>
              {note.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}