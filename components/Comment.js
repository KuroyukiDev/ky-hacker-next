const Comment = ({comment}) => (
  <div className="comment">
    <div className="comment-user">
        ( {comment.user} )
    </div>
    <div
      className="comment-content"
      dangerouslySetInnerHTML={{__html: comment.content}}
    />
    {
      comment.comments && (
        <div className="nested-comments">
          {
            comment.comments.map(nestedComment => (
              <Comment key={nestedComment.id} comment={nestedComment}/>
            ))
          }
        </div>
      )
    }
    
    <style jsx>
      {`
        .comment {
          font-size: 1.4rem;
          padding-top: 1rem;
        }
        .comment-user {
          font-size: 1.5rem;
          font-weight: bold;
          font-style: italic;
        }
        .comment-content :global(pre) {
          max-width: 100%;
          overflow: scroll;
        }
        .comment-content :global(p) {
          margin: 0;
          margin-top: 1rem;
          margin-bottom: 1.2rem;
          word-wrap: break-word;
        }
        .comment-content :global(a) {
          color: #f60;
          text-decoration: none;
        }
        .nested-comments {
          margin-left: 1.4rem;
          margin-bottom: 1.7rem;
          padding-left: 1.4rem;
          border-left: 1px solid rgba(0,0,0,0.1);
        }
      `}
    </style>
  </div>
);

export default Comment;