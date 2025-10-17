import React from 'react'
import Link from "next/link";
import Image from "next/image";

const Company = () => {
    return (
        <div id="app" className="min-h-full flex items-center justify-center p-6">
            <section id="slide"
                     className="w-full max-w-4xl bg-white rounded-2xl shadow-xl ring-1 ring-slate-100 overflow-hidden grid grid-cols-1 md:grid-cols-3"
                     role="region"
                     aria-label="Company details slide">

                <div className="md:col-span-1 p-6 flex flex-col gap-4 bg-gradient-to-b from-brand-50 to-white">
                    <div className="flex items-center gap-3">
                        <div
                            className="w-30 h-30 rounded-lg bg-brand-500 flex items-center justify-center text-white text-lg font-semibold">
                            <Image src="/hello.png" alt="Hello" height="1000" width="1000" />
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold">Hello Technologies</h2>
                            <p className="text-sm text-slate-500">Innovating business software</p>
                        </div>
                    </div>

                    <div className="mt-2 text-sm text-slate-600">
                        <p className="leading-relaxed">
                            Hello Technologies builds scalable cloud-native software for small and medium businesses. We
                            focus on reliability, performance, and delightful user experiences.
                        </p>
                    </div>

                    <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
                        <div>
                            <dt className="text-xs text-slate-400">Founded</dt>
                            <dd className="font-medium">2016</dd>
                        </div>
                        <div>
                            <dt className="text-xs text-slate-400">Employees</dt>
                            <dd className="font-medium">120</dd>
                        </div>
                        <div>
                            <dt className="text-xs text-slate-400">HQ</dt>
                            <dd className="font-medium">San Francisco, CA</dd>
                        </div>
                        <div>
                            <dt className="text-xs text-slate-400">Stage</dt>
                            <dd className="font-medium">Series B</dd>
                        </div>
                    </dl>

                    <div className="mt-auto pt-4">
                        <Link href="/contact"
                              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
                            Contact
                        </Link>
                    </div>
                </div>

                <div className="md:col-span-2 p-8">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold leading-tight">Company overview & key
                                metrics</h1>
                            <p className="text-sm text-slate-500 mt-1">Snapshot of mission, products, and current
                                traction.</p>
                        </div>
                    </div>

                    <div id="pages" className="mt-6 space-y-6">
                        <article className="page active animate-pop" data-page="1" aria-hidden="false">
                            <h3 className="text-lg font-semibold">Mission</h3>
                            <p className="mt-2 text-slate-600 leading-relaxed">
                                To empower teams with simple, reliable, and fast tools that reduce operational friction
                                and unlock growth.
                            </p>

                            <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="p-4 bg-slate-50 rounded-lg">
                                    <h4 className="text-sm font-semibold">Product</h4>
                                    <p className="text-xs text-slate-500 mt-1">Cloud ERP, Analytics, Integrations</p>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-lg">
                                    <h4 className="text-sm font-semibold">Customers</h4>
                                    <p className="text-xs text-slate-500 mt-1">Retail, Manufacturing, SaaS</p>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-lg">
                                    <h4 className="text-sm font-semibold">Partners</h4>
                                    <p className="text-xs text-slate-500 mt-1">Cloud infra & channel partners</p>
                                </div>
                            </div>
                        </article>

                        <article className="page hidden" data-page="2" aria-hidden="true">
                            <h3 className="text-lg font-semibold">Traction & metrics</h3>
                            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div className="p-4 border rounded-lg">
                                    <p className="text-2xl font-bold">$12M</p>
                                    <p className="text-xs text-slate-500">ARR (Annual Recurring Revenue)</p>
                                </div>
                                <div className="p-4 border rounded-lg">
                                    <p className="text-2xl font-bold">45%</p>
                                    <p className="text-xs text-slate-500">YoY Growth</p>
                                </div>
                                <div className="p-4 border rounded-lg">
                                    <p className="text-2xl font-bold">120</p>
                                    <p className="text-xs text-slate-500">Employees</p>
                                </div>
                            </div>

                            <ul className="mt-4 list-disc pl-5 text-slate-600">
                                <li>100+ paying customers across North America and EMEA</li>
                                <li>Average contract value: $110k</li>
                                <li>Net revenue retention: 112%</li>
                            </ul>
                        </article>

                        <article className="page hidden" data-page="3" aria-hidden="true">
                            <h3 className="text-lg font-semibold">Leadership & contact</h3>

                            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 rounded-lg bg-slate-50">
                                    <p className="font-semibold">CEO — Blake</p>
                                    <p className="text-sm text-slate-600 mt-1">Background: enterprise SaaS, scaling
                                        product teams.</p>
                                </div>

                                <div className="p-4 rounded-lg bg-slate-50">
                                    <p className="font-semibold">CTO — Shyam</p>
                                    <p className="text-sm text-slate-600 mt-1">Background: distributed systems, infra at
                                        scale.</p>
                                </div>
                            </div>

                            <div id="contact" className="mt-6 p-4 border rounded-lg">
                                <p className="text-sm"><span className="font-medium">Email:</span> <a
                                    href="mailto:hello@Hello.example"
                                    className="text-brand-700 hover:underline">hello@Hello.example</a></p>
                                <p className="text-sm mt-1"><span className="font-medium">Website:</span> <a
                                    href="https://example.com" className="hover:underline">example.com</a></p>
                                <p className="text-sm mt-1"><span className="font-medium">Phone:</span> (999) 999-9999
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Company
