import Image from "next/image";
export default function Register() {
    return (
        <main>
            <h1>Đăng ký</h1>
            <form>
                <label htmlFor="username">Tên người dùng:</label>
                <input type="text" id="username" name="username" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="password">Mật khẩu:</label>
                <input type="password" id="password" name="password" required />

                <button type="submit">Đăng ký</button>
            </form>
        </main>
    );
}