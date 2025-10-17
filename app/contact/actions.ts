"use server"

import {redirect} from "next/navigation";


export const submitDetails = async (formData: FormData) => {
    if(formData.get('email') && formData.get('details')) {
        /*const resp = await fetch('/api/contact/details', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if (resp.ok) {
            redirect('/');
        }*/
        redirect('/');
    } else {
        formData.set('error', 'Invalid email address / details');
        console.error('Invalid form data');
    }
}
