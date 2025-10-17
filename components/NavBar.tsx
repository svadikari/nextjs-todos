import Link from "next/link";

const NavBar = () => {
    return (
        <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
            <Link href="/" className="text-2xl font-bold text-indigo-600">Todos</Link>
            <div className="space-x-4">
                <Link href="/login" className="text-gray-600 hover:text-indigo-600">Login</Link>
                <Link href="/about" className="text-gray-600 hover:text-indigo-600">About</Link>
                <Link href="/contact" className="text-gray-600 hover:text-indigo-600">Contact</Link>
                <Link
                    href="/signup"
                    className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
                >Sign Up</Link
                >
            </div>
        </nav>
        // <nav className="bg-zinc-400 border-gray-200 dark:bg-gray-900">
        //     <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        //         <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        //             <span
        //                 className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Todos</span>
        //         </Link>
        //         <button data-collapse-toggle="navbar-default" type="button"
        //                 className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        //                 aria-controls="navbar-default" aria-expanded="false">
        //             <span className="sr-only">Open main menu</span>
        //             <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
        //                  viewBox="0 0 17 14">
        //                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        //                       d="M1 1h15M1 7h15M1 13h15"/>
        //             </svg>
        //         </button>
        //         <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        //             <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-zinc-400 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        //                 <li>
        //                     <Link href="/"
        //                        className="navlink"
        //                        aria-current="page">Home</Link>
        //                 </li>
        //                 <li>
        //                     <Link href="/about"
        //                        className="navlink">About</Link>
        //                 </li>
        //                 <li>
        //                     <Link href="/contact"
        //                        className="navlink">Contact</Link>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>

    )
}
export default NavBar
