'use client'
import Link from "next/link";
import {useState} from "react";

const Login = () => {
    const [email, setEmail] = useState("");

    return (
        <div
            className="max-w-md mx-auto bg-white shadow-lg rounded-xl mt-4 p-8 w-full border border-gray-100 justify-center"
        >
            <h2 className="text-2xl font-bold text-center text-indigo-600 mb-2">
                Forgot Password?
            </h2>
            <p className="text-center text-gray-600 text-sm mb-6">
                Enter your email address below, and we’ll send you a link to reset your password.
            </p>

            <form action="#" method="POST" className="space-y-5">
                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >Email Address</label
                    >
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={!email}
                    className={`w-full py-2 rounded-md ${email?'bg-indigo-600 text-white hover:bg-indigo-700 font-semibold transition': '!bg-gray-500'}`}
                >
                    Send Reset Link
                </button>
            </form>

            <div className="text-center text-sm text-gray-600 mt-6">
                <Link href="/login" className="text-indigo-600 hover:underline">Back to Login</Link>
            </div>
        </div>
    )
}
export default Login