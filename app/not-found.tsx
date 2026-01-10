import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="home-bg">
      <div className="not-found-container">
        <h1 className="page-title" data-page-type="🔍">Page Not Found</h1>
        
        <div className="card not-found-card">
          <h3>🐦 Oops! This page flew away</h3>
          <p>
            The page you're looking for doesn't exist. It might have been moved, 
            deleted, or you entered the wrong URL.
          </p>
          
          <div className="not-found-button-wrapper">
            <Link href="/" className="not-found-link">
              🏠 Return Home
            </Link>
          </div>
        </div>
        
        <div className="card not-found-card">
          <h3>🔗 Quick Links</h3>
          <div className="not-found-links-grid">
            <Link href="/birds" className="not-found-quick-link">🦜 Birds</Link>
            <Link href="/finches" className="not-found-quick-link">🐦 Finches</Link>
            <Link href="/hens" className="not-found-quick-link">🐓 Hens</Link>
            <Link href="/medicine" className="not-found-quick-link">💉 Medicine</Link>
            <Link href="/qa" className="not-found-quick-link">🤖 Ask AI</Link>
            <Link href="/contact" className="not-found-quick-link">📞 Contact</Link>
          </div>
        </div>
      </div>
    </div>
  )
}