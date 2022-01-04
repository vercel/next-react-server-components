import React, { Suspense } from 'react'
import { useRouter } from 'next/router'

import Page from './page.client'
import Item from './item.client'

import getItem from '../lib/get-item'
import getComments from '../lib/get-comments'

let commentsData = {}
let storyData = {}
let fetchDataPromise = {}

function ItemPageWithData({ id }) {
  if (!commentsData[id]) {
    if (!fetchDataPromise[id]) {
      fetchDataPromise[id] = getItem(id)
        .then((story) => {
          storyData[id] = story
          return getComments(story.comments)
        })
        .then((c) => (commentsData[id] = c))
    }
    throw fetchDataPromise[id]
  }

  return (
    <Page>
      <Item story={storyData[id]} comments={commentsData[id]} />
    </Page>
  )
}

export default function ItemPage({ id }) {
  if (!id) return null

  return (
    <Suspense>
      <ItemPageWithData id={id} />
    </Suspense>
  )
}
