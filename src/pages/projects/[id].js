import React from 'react'
import { useRouter } from "next/router";

export default function Project() {
    const { query } = useRouter();
    return (
        <div>Project: {query.id}</div>
    )
}
