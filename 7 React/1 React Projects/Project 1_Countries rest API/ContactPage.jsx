import React from 'react'
import { useParams } from 'react-router-dom';

export default function ContactPage() {
    const temp = useParams(); 
    console.log(temp);
    return (
        <div>ContactPage</div>
    )
}
