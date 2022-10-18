import Head from 'next/head'

import './meta.css'

export default function Meta() {
  return (
    <div>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
      </Head>
    </div>
  )
}
