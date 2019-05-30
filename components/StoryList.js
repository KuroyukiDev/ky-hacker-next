import Link from 'next/link';

const StoryList = ({ stories }) => (
  <div className="story-list">
    {
      stories.map(story => (
        <div className="story" key={story.id}>
          <h2 className="story-title">
            <a href={story.url} target="_blank">
              {
                story.title
              }
            </a>
          </h2>
          <div className="story-details">
            <span>{story.points || 0} points </span>
            <Link href={`/story?id=${story.id}`}>
              <a>{story.comments_count || 0} comments</a>
            </Link>
          </div>
        </div>
      ))
    }
  
    <style jsx>{`
      .story-list {
        margin: auto;
        padding: 1.6rem 3rem;
      }
      .story {
        padding: 1.25rem 0;
      }
      .story-title {
        font-size: 2.25rem;
        font-weight: 400;
        margin: 0;
        margin-bottom: 0.5em;
      }
      .story-title a {
        color: #333;
        text-decoration: none;
      }
      .story-title a:hover,
      .story-details a:hover {
        text-decoration: underline;
      }
      .story-details {
        font-size: 1.6rem;
        font-weight: bold;
      }
      .story-details span {
        margin-right: 1em;
      }
      .story-details a {
        color: #6600ff;
        text-decoration: none;
      }
    `}</style>
  </div>
);

export default StoryList;