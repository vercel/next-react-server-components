import '../components/meta.css';
import Header from '../components/header';
import '../styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <main className="main">
          <Header />
          <div className="page">{children}</div>
        </main>
      </body>
    </html>
  );
}
