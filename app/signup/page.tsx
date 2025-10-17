'use client'
import Link from "next/link";
import {useState} from "react";

const SignUp = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [terms, setTerms] = useState(false);



    const showTermsAndConditions = () => {
        toggleModal(false);
        const modal:HTMLElement = document.getElementById("modal")!;
        modal.classList.remove("hidden");
    }
    const closeTermsAndConditions = () => {
        toggleModal(true);
    }
    const acceptTermsAndConditions = () => {
        setTerms(true);
        toggleModal(true);
    }


    function toggleModal(hide: boolean) {
        const modal:HTMLElement = document.getElementById("modal")!;
        if (hide) {
            modal.classList.add("hidden");
        }else {
            modal.classList.remove("hidden");
        }
    }

    let validForm = [name, email, password, confirmPassword, terms].every(Boolean);
    validForm = validForm && (password===confirmPassword);
    // Close when clicking outside
    /*window.addEventListener("click", (e) => {
        if (e.target === document.getElementById("modal")) toggleModal(true);
    });*/


    return (
        <div
            className="max-w-md mx-auto bg-white shadow-lg rounded-xl mt-4 p-8 w-full border border-gray-100 justify-center"
        >
            <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">
                Create an Account
            </h2>
            <form action="#" method="POST" className="space-y-5">
                <div>
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >Full Name</label
                    >
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                        required
                    />
                </div>

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
                        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none ${password!==confirmPassword? 'border-red-500':''}`}
                        required
                    />
                </div>

                <div>
                    <label
                        htmlFor="confirm"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >Confirm Password</label
                    >
                    <input
                        type="password"
                        id="confirm"
                        name="confirm"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="••••••••"
                        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none ${password!==confirmPassword? 'border-red-500':''}`}
                        required
                    />
                </div>

                <div className="flex items-center space-x-2 text-sm">
                    <input
                        type="checkbox"
                        id="terms"
                        name="terms"
                        checked={terms}
                        onChange={(e) => setTerms(e.target.checked)}
                        className="form-checkbox text-indigo-600 rounded"
                        required
                    />
                    <label htmlFor="terms" className="text-gray-600">
                        I agree to the
                        <button id="openModal" className="text-indigo-600 hover:underline"
                        onClick={showTermsAndConditions}>Terms & Conditions</button>
                    </label>
                </div>

                <button
                    type="submit"
                    disabled={!validForm}
                    className={`w-full py-2 rounded-md ${validForm?'bg-indigo-600 text-white hover:bg-indigo-700 font-semibold transition': '!bg-gray-500'}`}
                >
                    Create Account
                </button>
            </form>

            <p className="text-center text-sm text-gray-600 mt-6">
                Already have an account?
                <Link href="/login" className="text-indigo-600 hover:underline">Login</Link>
            </p>
            <div
                id="modal"
                className="hidden fixed inset-0 bg-black bg-opacity-50 items-center justify-center z-50"
            >
                <div
                    className="bg-white rounded-lg shadow-xl max-w-lg w-full mx-4 p-6 relative"
                >
                    <button
                        id="closeModal"
                        className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
                        onClick={closeTermsAndConditions}
                    >
                        ✕
                    </button>

                    <h2 className="text-xl font-semibold text-indigo-600 mb-4">
                        Terms & Conditions
                    </h2>

                    <div className="max-h-64 overflow-y-auto text-gray-600 space-y-3 text-sm">
                        <p>
                            Welcome to Todos App! By creating an account or using our services,
                            you agree to comply with these Terms & Conditions.
                        </p>
                        <p>
                            You must use the app responsibly and not engage in any activity that
                            disrupts or harms the platform or other users.
                        </p>
                        <p>
                            Todos App reserves the right to modify or terminate services at any
                            time. Continued use after updates constitutes agreement to the new
                            terms.
                        </p>
                        <p>
                            Your personal information is handled according to our Privacy Policy.
                            We encourage you to review it regularly.
                        </p>
                        <p>
                            If you do not agree with these terms, please discontinue using the
                            app immediately.
                        </p>
                    </div>

                    <div className="mt-6 flex justify-end space-x-3">
                        <button
                            id="cancelModal"
                            className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-100"
                            onClick={closeTermsAndConditions}
                        >
                            Close
                        </button>
                        <button
                            id="acceptModal"
                            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                            onClick={acceptTermsAndConditions}
                        >
                            Accept
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SignUp
