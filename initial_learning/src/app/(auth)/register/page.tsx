import Link from 'next/link';
import './style.css';
export default function Register() {
    return (
        <>
            <h1>Register Page</h1>
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />
                <br />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <br />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
                <br />
                <button type="submit">Register</button>
            </form>
            <Link href="/login">Already have an account? Login</Link>
        </>
    );
}