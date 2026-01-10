import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="logo">
          <span className="logo-icon">🦜</span>
          <div>
            <span className="logo-text">Muji Birds</span>
                 </div>
        </div>
        <ul className="nav-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/birds">Birds</Link></li>
          <li><Link href="/finches">Finches</Link></li>
          <li><Link href="/hens">Hens</Link></li>
          <li><Link href="/medicine">Medicine</Link></li>
          <li><Link href="/qa">Ask AI</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}