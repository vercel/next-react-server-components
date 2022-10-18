export default function RootLayout({ children }) {
    return (
      <html>
        <head>
          <title>Next.js 12 React Server Components Demo (Beta)</title>
        </head>
        <body>{children}</body>
      </html>
    );
  }
  