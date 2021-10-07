import Link from 'next/link'
import { useState } from 'react'

import timeAgo from '../lib/time-ago'

export default function Story({
  id,
  title,
  date,
  url,
  user,
  score,
  commentsCount,
}) {
  const { host } = url ? new URL(url) : { host: '#' }
  const [voted, setVoted] = useState(false)

  return (
    <div style={{ margin: '5px 0' }}>
      <div className="title">
        <span
          style={{
            cursor: 'pointer',
            fontFamily: 'sans-serif',
            marginRight: 5,
            color: voted ? '#ffa52a' : '#ccc',
          }}
          onClick={() => setVoted(!voted)}
        >
          &#9650;
        </span>
        {url ? (
          <a href={url}>{title}</a>
        ) : (
          <Link href={`/item?id=${id}`}>
            <a>{title}</a>
          </Link>
        )}
        {url && (
          <span className="source">
            <a href={`http://${host}`}>{host.replace(/^www\./, '')}</a>
          </span>
        )}
      </div>
      <div className="meta">
        {score} {plural(score, 'point')} by{' '}
        <Link href={`/user?id=${user}`}>
          <a>{user}</a>
        </Link>{' '}
        <Link href={`/item?id=${id}`}>
          <a>
            {timeAgo(new Date(date)) /* note: we re-hydrate due to ssr */} ago
          </a>
        </Link>{' '}
        |{' '}
        <Link href={`/item?id=${id}`}>
          <a>
            {commentsCount} {plural(commentsCount, 'comment')}
          </a>
        </Link>
      </div>
    </div>
  )
}

const plural = (n, s) => s + (n === 0 || n > 1 ? 's' : '')
