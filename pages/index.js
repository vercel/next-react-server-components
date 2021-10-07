export default function Page() {
  return (
    <div className="container">
      <h1>React Server Components in Next.js</h1>
      <h2>Without Streaming</h2>
      <section>
        <a href="/csr" target="_blank">
          Static + Client Side Data Fetching
        </a>
      </section>
      <section>
        <a href="/ssr" target="_blank">
          🐌 SSR with API Delays
        </a>
      </section>
      <h2>React Server Components with Streaming</h2>
      <section>
        <a href="/rsc" target="_blank">
          RSC + HTTP Streaming
        </a>
      </section>
      <section>
        <a href="/slow" target="_blank">
          🐌 RSC with API Delays + HTTP Streaming
        </a>
      </section>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            html {
              height: 100%;
            }
            body {
              display: flex;
              align-items: center;
              justify-content: center;
              height: 100%;
              margin: 0;
              padding: 20px 20px 80px;
              box-sizing: border-box;
              color: #333;
              -webkit-font-smoothing: antialiased;
              font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
            }
            h1 {
              font-size: 2em;
            }
            h2 {
              font-size: 1.4em;
              margin-top: 2em;
            }
            .container {
              font-size: 20px;
              text-align: center;
            }
            section {
              display: block;
              margin: 5px 0;
              text-underline-position: from-font;
            }
            section a {
              color: #1386ff;
            }`,
        }}
      />
    </div>
  );
}
