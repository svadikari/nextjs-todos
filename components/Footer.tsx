import React from 'react'

const Footer = () => {
    return (
        <footer className="mt-24 py-8 text-center text-gray-500 border-t">
            © {new Date().getFullYear()} Todos App. All rights reserved.
        </footer>
    )
}
export default Footer
