import type { Metadata } from 'next';
import React from 'react'
import Image from "next/image";

export const metadata: Metadata = {
    title: "Clients",
    description: 'About the Clients'
}

const Clients = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-16">
            <header className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">Our Clients</h2>
                <p className="mt-4 text-lg text-slate-600">We’ve had the pleasure of working with amazing companies from
                    a variety of industries</p>
            </header>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8 items-center mb-16">
                <div className="clients-div">
                    <Image height="100" width="100" src="/client-logo1.png" alt="Client One logo" className="h-12 object-contain"/>
                </div>
                <div className="clients-div">
                    <Image height="100" width="100" src="/client-logo2.png" alt="Client Two logo" className="h-12 object-contain"/>
                </div>
                <div className="clients-div">
                    <Image height="100" width="100" src="/client-logo3.png" alt="Client Three logo" className="h-12 object-contain"/>
                </div>
            </div>

            <section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <p className="text-slate-700 italic">“Working with Acme Technologies changed the way we approach
                            operations. Their platform is intuitive, reliable, and the support has been
                            outstanding.”</p>
                        <div className="mt-4 flex items-center">
                            <Image height="100" width="100" src="/client-logo1.png" alt="Client One"
                                 className="w-12 h-12 rounded-full object-cover"/>
                            <div className="ml-3">
                                <p className="font-semibold">Jane Doe</p>
                                <p className="text-sm text-slate-500">COO, SV Retail</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <p className="text-slate-700 italic">“Their expertise helped us reduce downtime by over 50%. A
                            truly transformative partnership.”</p>
                        <div className="mt-4 flex items-center">
                            <Image height="10" width="10" src="/client-logo2.png" alt="Client Two"
                                 className="w-12 h-12 rounded-full object-cover"/>
                            <div className="ml-3">
                                <p className="font-semibold">Carlos</p>
                                <p className="text-sm text-slate-500">VP Engineering, AbcSoft</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <p className="text-slate-700 italic">“The scalability and support have been top-notch. We
                            couldn’t ask for better performance.”</p>
                        <div className="mt-4 flex items-center">
                            <Image height="10" width="10" src="/client-logo3.png" alt="Client Three"
                                 className="w-12 h-12 rounded-full object-cover"/>
                            <div className="ml-3">
                                <p className="font-semibold">Ling</p>
                                <p className="text-sm text-slate-500">CTO, SVEdge Solutions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-16 bg-brand-50 rounded-lg p-10 text-center">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    <div>
                        <p className="text-4xl font-bold text-brand-700">100+</p>
                        <p className="text-lg text-slate-600 mt-1">Clients Globally</p>
                    </div>
                    <div>
                        <p className="text-4xl font-bold text-brand-700">95%</p>
                        <p className="text-lg text-slate-600 mt-1">Client Retention</p>
                    </div>
                    <div>
                        <p className="text-4xl font-bold text-brand-700">500+</p>
                        <p className="text-lg text-slate-600 mt-1">Projects Delivered</p>
                    </div>
                </div>
            </section>

        </div>
    )
}
export default Clients
