import Image from "next/image";

export default function Login() {
    return (
        <main>
        <h1>Đăng nhập</h1>
        <form>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
    
            <label htmlFor="password">Mật khẩu:</label>
            <input type="password" id="password" name="password" required />
    
            <button type="submit">Đăng nhập</button>
        </form>
        </main>
    );
};