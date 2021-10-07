import Head from 'next/head'
// import Router from 'next/router'

export default function Meta() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        {/* <link rel="shortcut icon" href="/static/favicon.ico" /> */}
      </Head>
      <style
        dangerouslySetInnerHTML={{
          __html: `
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
          'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
          'Helvetica Neue', sans-serif;
        background: #eee;
      }
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      .sk-fading-circle {
        margin: 12px;
        width: 28px;
        height: 28px;
        position: relative;
      }
      .sk-fading-circle .sk-circle {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
      }
      .sk-fading-circle .sk-circle:before {
        content: '';
        display: block;
        margin: 0 auto;
        width: 15%;
        height: 15%;
        background-color: #333;
        border-radius: 100%;
        animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;
      }
      .sk-fading-circle .sk-circle2 {
        transform: rotate(30deg);
      }
      .sk-fading-circle .sk-circle3 {
        transform: rotate(60deg);
      }
      .sk-fading-circle .sk-circle4 {
        transform: rotate(90deg);
      }
      .sk-fading-circle .sk-circle5 {
        transform: rotate(120deg);
      }
      .sk-fading-circle .sk-circle6 {
        transform: rotate(150deg);
      }
      .sk-fading-circle .sk-circle7 {
        transform: rotate(180deg);
      }
      .sk-fading-circle .sk-circle8 {
        transform: rotate(210deg);
      }
      .sk-fading-circle .sk-circle9 {
        transform: rotate(240deg);
      }
      .sk-fading-circle .sk-circle10 {
        transform: rotate(270deg);
      }
      .sk-fading-circle .sk-circle11 {
        transform: rotate(300deg);
      }
      .sk-fading-circle .sk-circle12 {
        transform: rotate(330deg);
      }
      .sk-fading-circle .sk-circle2:before {
        animation-delay: -1.1s; 
      }
      .sk-fading-circle .sk-circle3:before {
        animation-delay: -1s; 
      }
      .sk-fading-circle .sk-circle4:before {
        animation-delay: -0.9s; 
      }
      .sk-fading-circle .sk-circle5:before {
        animation-delay: -0.8s; 
      }
      .sk-fading-circle .sk-circle6:before {
        animation-delay: -0.7s; 
      }
      .sk-fading-circle .sk-circle7:before {
        animation-delay: -0.6s; 
      }
      .sk-fading-circle .sk-circle8:before {
        animation-delay: -0.5s; 
      }
      .sk-fading-circle .sk-circle9:before {
        animation-delay: -0.4s;
      }
      .sk-fading-circle .sk-circle10:before {
        animation-delay: -0.3s;
      }
      .sk-fading-circle .sk-circle11:before {
        animation-delay: -0.2s;
      }
      .sk-fading-circle .sk-circle12:before {
        animation-delay: -0.1s;
      }
      @-webkit-keyframes sk-circleFadeDelay {
        0%, 39%, 100% { opacity: 0; }
        40% { opacity: 1; }
      }
      @keyframes sk-circleFadeDelay {
        0%, 39%, 100% { opacity: 0; }
        40% { opacity: 1; } 
      }

      .title {
        font-size: 15px;
        margin-bottom: 3px;
      }
      .title > a {
        color: #000;
        text-decoration: none;
      }
      .title > a:visited {
        color: #828282;
      }
      .meta {
        font-size: 12px;
      }
      .source {
        font-size: 12px;
        display: inline-block;
        margin-left: 5px;
      }
      .source a,
      .meta a {
        color: #828282;
        text-decoration: none;
      }
      .source a:hover,
      .meta a:hover {
        text-decoration: underline;
      }
    `,
        }}
      />
    </div>
  )
}
