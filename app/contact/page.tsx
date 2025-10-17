import {Metadata} from "next";
import {submitDetails} from "@/app/contact/actions";

export const metadata: Metadata = {
    title: "Contact",
    description: 'Contact Details'
}

const Contact = () => {
    return (
        <div
            className="max-w-md mx-auto bg-white shadow-lg rounded-xl mt-4 p-8 w-full border border-gray-100 justify-center"
        >
            <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">
                Add your details
            </h2>

            <form action={submitDetails} className="space-y-5">
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
                        placeholder="you@example.com"
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                        required
                    />
                </div>
                <div>
                    <label
                        htmlFor="details"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >Details</label
                    >
                    <textarea
                        id="details"
                        name="details"
                        placeholder="Contact Details"
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 font-semibold transition"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}
export default Contact
