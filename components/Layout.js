import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';

const Layout = ({ backButton, children, description, title }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta name="description" content={ description }/>
    </Head>
    <div className="container">
      <nav>
        {backButton && <span
          onClick={() => Router.back()}
          className="back-button">&#x21e6;</span>
        }
        <Link href="/">
          <a>
            <span className="main-title">{ title }</span>
          </a>
        </Link>
      </nav>
      <div className="body-content">
        { children }
      </div>
    </div>
  
    <style jsx>
      {`
        .container {
          background: #f6f6ef;
          min-height: 100vh;
        }
        .body-content {
          overflow: auto;
        }
        .container,
        .body-content {
          max-width: 75vw;
          margin: 0 auto;
        }
        nav {
          background: #f60;
          padding: 1rem;
        }
        nav > * {
          display: inline-block;
          color: black;
        }
        nav a {
          text-decoration: none;
        }
        nav .main-title {
          font-size: 3rem;
          font-weight: bold;
        }
        nav .back-button {
          font-size: 3rem;
          font-weight: bold;
          padding-right: 1rem;
          cursor: pointer;
        }
      `}
    </style>
    
    <style global jsx>
      {`
        html, body {
          margin: 0px;
        }
        body {
          padding: 0 0 12px;
          background: white;
          font-size: 62.5%;
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        }
        h1 {
          font-size: 3.25rem;
        }
        h2 {
          font-size: 2.75rem;
        }
        h3 {
          font-size: 2.50rem;
        }
        h4 {
          font-size: 2.25rem;
        }
      `}
    </style>



  </div>
);

export default Layout;