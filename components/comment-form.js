export default () => (
  <div>
    <style dangerouslySetInnerHTML={{ __html: `
      textarea {
        width: 400px;
        height: 100px;
        display: block;
        margin-bottom: 10px;
      }
      button {
        padding: 3px 4px;
      }
      @media (max-width: 750px) {
        textarea {
          width: 100%;
        }
      }
    `}} />
    <textarea />
    <button>add comment</button>
  </div>
)
