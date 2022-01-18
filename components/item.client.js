import Story from '../components/story.client'
import Comment from '../components/comment'
import CommentForm from '../components/comment-form'

export default function Item({ story, comments = null }) {
  return (
    <div className="item">
      <style dangerouslySetInnerHTML={{ __html: `
        .item {
          padding: 10px 29px;
        }
        .form {
          padding: 15px 0;
        }
        .loading {
          font-size: 13px;
        }
        .comments {
          padding: 10px 0 20px;
        }
        @media (max-width: 750px) {
          .item {
            padding: 8px 0px;
          }
        }
      `}} />
      <Story {...story} />

      <div className="form">
        <CommentForm />
      </div>

      <div className="comments">
        {comments ? (
          comments.map((comment) => <Comment key={comment.id} {...comment} />)
        ) : (
          <div className="loading">Loading…</div>
        )}
      </div>      
    </div>
  )
}
