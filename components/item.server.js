import React, { Suspense } from 'react'

import Page from './page.client'
import Item from './item.client'

import getItem from '../lib/get-item'
import getComments from '../lib/get-comments'
import Skeletons from './skeletons'

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
    <Item story={storyData[id]} comments={commentsData[id]} />
  )
}

export default function ItemPage({ id }) {
  if (!id) return null

  return (
    <Page>
      <Suspense fallback={<Skeletons count={10} />}>
        <ItemPageWithData id={id} />
      </Suspense>
    </Page>
  )
}
