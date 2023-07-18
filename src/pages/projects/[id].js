import { useRouter } from "next/router";
import React from 'react';
import SeoHeader from "../../components/seoHeader";

export default function Project() {
    const { query } = useRouter();
    return (<div>
        <SeoHeader pageName="Projects" />
        <div>Project: {query.id}</div>
    </div>
    )
}
