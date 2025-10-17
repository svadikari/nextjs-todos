import React from "react";
import Link from "next/link";

export default function About({children}: { children: Readonly<React.ReactNode> }) {
    return (
        <div className="flex-col">
            <div className="flex-col">
                <div className="flex-row">
                    <p className="text-center font-light">
                        NextJS Todos Application
                        A modern todo application built with Next.js 15.5.5, React 19, TypeScript, and TailwindCSS.
                    </p>
                </div>
            </div>

            <nav className="flex-row mt-2">
                <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                    <li className="me-2">
                        <Link href="/about/company" aria-current="page"
                              className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-300">Company</Link>
                    </li>
                    <li className="me-2">
                        <Link href="/about/clients"
                           className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-300">Clients</Link>
                    </li>
                </ul>
            </nav>
            <div className="flex-col justify-items-center mt-2">
                {children}
            </div>
        </div>
    )
}