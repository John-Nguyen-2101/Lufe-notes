import Link from "next/link";

export default function Header() {
  return (
    <header>
      <h1>LufeNote</h1>

      <nav>
        <Link href="/login">Đăng nhập</Link>
        <Link href="/register">Đăng ký</Link>
      </nav>
    </header>
  );
}