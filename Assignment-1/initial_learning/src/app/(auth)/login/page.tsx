"use client";
import { useRouter } from "next/navigation";
export default function LoginPage() {
    const route = useRouter();
    const nextPage = () => {
        route.push("/register");
    }
    return (
        <>
            <h1>This is my Button Click it to register.</h1>
            <button onClick={nextPage}> Register </button>
        </>
    )
}