import Head from 'next/head'
import React from 'react'

export default function SeoHeader({ pageName }) {
    return (
        <div>
            <Head>
                <title>{pageName}</title>
                <meta name="description" content="We help you step into stunning Interior design spaces that is
                        customized to ﬁt your personal value. Get in touch and let’s
                        start customizing a design that ﬁts just right for you!" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" />
            </Head>
        </div>
    )
}
