import Link from "next/link";

export default function Sidebar() {
  return (
    <aside>
      <nav>
        <Link href="/">Trang chủ</Link>
        <Link href="/notes">Ghi chú</Link>
        <Link href="/notes/new">Tạo ghi chú</Link>
        <Link href="/profile">Hồ sơ</Link>
      </nav>
    </aside>
  );
}