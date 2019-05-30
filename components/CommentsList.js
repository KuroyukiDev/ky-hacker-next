import Comment from "./Comment";

const CommentsList = ({ comments }) => (
  <div className="comments-list">
    {
      comments.map(comment => (
        <Comment key={ comment.id } comment={ comment } />
      ))
    }
  
    <style jsx>
      {`
      .comments-list {
        margin: auto;
        padding: 1.6rem 3.5rem;
      }
      `}
    </style>
  </div>
);

export default CommentsList;