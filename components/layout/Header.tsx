import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <h1 className="logo">LufeNote</h1>

      <nav className="nav">
        <Link href="/login">Đăng nhập</Link>
        <Link href="/register">Đăng ký</Link>
      </nav>
    </header>
  );
}