'use client'

import {useState} from "react";
import Link from "next/link";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const validForm = [email, password].every(Boolean);

    return (
        <div
            className="max-w-md mx-auto bg-white shadow-lg rounded-xl mt-4 p-8 w-full border border-gray-100 justify-center"
        >
            <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">
                Welcome Back
            </h2>

            <form action="#" method="POST" className="space-y-5">
                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >Email</label
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
                <div>
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >Password</label
                    >
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                        required
                    />
                </div>

                <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={e => setRememberMe(e.target.checked)}
                            className="form-checkbox text-indigo-600 rounded"
                        />
                        <span>Remember me</span>
                    </label>
                    <Link href="/pwdreset" className="text-indigo-600 hover:underline">Forgot password?</Link>
                </div>

                <button
                    type="submit"
                    disabled={!validForm}
                    className={`w-full py-2 rounded-md ${validForm?'bg-indigo-600 text-white hover:bg-indigo-700 font-semibold transition': '!bg-gray-500'}`}
                >
                    Login
                </button>
            </form>

            <p className="text-center text-sm text-gray-600 mt-6">
                Don’t have an account?
                <Link href="/signup" className="text-indigo-600 hover:underline">Sign up</Link>
            </p>
        </div>
    )
}
export default Login