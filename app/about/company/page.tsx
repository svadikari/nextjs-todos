import type { Metadata } from 'next';
import React from 'react'
import Company from "@/components/Company";

export const metadata: Metadata = {
    title: "Company",
    description: 'Company details'
}

const CompanyDetail = () => {
    return (
        <Company />
    )
}
export default CompanyDetail
