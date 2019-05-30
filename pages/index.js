import { Component } from 'react';
import Error from 'next/error';
import Link from 'next/link';
import fetch from 'isomorphic-fetch';
import StoryList from "../components/StoryList";
import Layout from "../components/Layout";

class Index extends Component {
  static async getInitialProps({ req, res, query }) {
    let stories;
    let page;
    
    try {
      page = Number(query.page) || 1;
      const res = await fetch(`https://node-hnapi.herokuapp.com/news?page=${page}`);
      stories = await res.json();
    } catch (e) {
      console.log(e);
      stories = [];
    }
    
    return { stories, page };
  }
  
  componentDidMount() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
               .register('service-worker.js')
               .then(registration => {
                 console.log('service worker registration successful', registration);
               })
               .catch(err => {
                 console.log('service worker registration failed', err.message);
               });
    }
  }
  
  render() {
    
    const { stories, page } = this.props;
    
    if (stories.length === 0) {
      return <Error statusCode={503} />;
    }
    
    return (
      <Layout
        title="Hacker Next"
        description="A Hacker News clone made with Next.js"
      >
        <StoryList stories={stories} />
        
        <footer>
          <div className="btn-control-bar">
            <Link href={ page === 1 ? `/?page=1` : `/?page=${ page - 1 }` }>
              <a><div className="btn">
                <h4>
                  back ({ page === 1 ? 1 : page - 1 })
                </h4>
              </div></a>
            </Link>
            <Link href={ `/?page=${ page + 1 }` }>
              <a><div className="btn">
                <h4>
                  next ({ page + 1 })
                </h4>
              </div></a>
            </Link>
          </div>
        </footer>
  
        <style jsx>
          {`
            .btn-control-bar {
              display: flex;
              flex-direction: row;
              height: 125px;
              width: 225px;
              justify-content: space-between;
              align-items: center;
              margin: 0 auto;
            }
            .btn-control-bar a {
              text-decoration: none;
            }
            .btn-control-bar a:hover {
              color: #f60;
            }
            .btn {
              display: flex;
              justify-content: center;
              align-items: center;
              border: 1px solid black;
              background: #f6f6ef;
              width: 105px;
            }
            .btn h4 {
              font-size: 1.25rem;
            }
            footer {
              background-color: blue;
            }
          `}
        </style>
      </Layout>
    );
  }
}

export default Index;