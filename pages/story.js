import { Component } from 'react';
import Error from 'next/error';
import Layout from "../components/Layout";
import fetch from 'isomorphic-fetch';
import CommentsList from "../components/CommentsList";


class Story extends Component {
  static async getInitialProps({ req, res, query }) {
    let story;
    try {
      const storyId = query.id;
      const response = await fetch(`https://node-hnapi.herokuapp.com/item/${storyId}`);
      story = await response.json();
    } catch (e) {
      story = {};
    }
    
    return { story }
  }
  
  render() {
    
    const { story } = this.props;
    
    if (!story) {
      return <Error statusCode={503} />;
    }
    
    return (
      <Layout backButton={true} title="Hacker Next" description="A page for a single Hacker News story from the comments link">
        <main>
          <h1 className="story-title">
            <a href={ story.url }>{ story.title }</a>
          </h1>
          <div className="story-details">
            <strong>{ story.points } points</strong>
            <strong>{ story.comments_count } comments</strong>
            <strong>{ story.time_ago }</strong>
          </div>
          
          {
            story.comments.length > 0 ? (
              <CommentsList comments={story.comments} />
            ) : (
              <div className="no-comments-msg">No comments for this story</div>
            )
            
          }
          
        </main>
  
        <style jsx>
          {`
          main {
            padding: 1.5rem;
          }
          .story-title {
            font-size: 2.6rem;
          }
          .story-title a {
            color: #333;
            text-decoration: none;
          }
          .story-title a:hover {
            text-decoration: underline;
          }
          .story-details {
            font-size: 1.6rem;
            font-weight: bold;
            padding-bottom: 1rem;
          }
          .story-details strong {
            margin-right: 1.5rem;
          }
          .no-comments-msg {
            border-top: 1px solid rgba(0,0,0,0.1);
            margin-top: 1rem;
            padding-top: 1rem;
            font-size: 1.6rem;
          }
          `}
        </style>
      </Layout>
    );
  }
}

export default Story;