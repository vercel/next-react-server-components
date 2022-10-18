import '../styles/globals.css'

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
      <br />
      <section>
        <p>
          <small>
            This demo is built with Next.js and React Server Components. Read
            about our blog post here:{" "}
            <a href="https://nextjs.org/blog/next-12" target="_blank">
              Next.js 12
            </a>
            .
          </small>
        </p>
        <p>
          <small>
            Check out the code:{" "}
            <a href="https://github.com/vercel/next-rsc-demo" target="_blank">
              https://github.com/vercel/next-rsc-demo
            </a>
          </small>
        </p>
      </section>
    </div>
  );
}
