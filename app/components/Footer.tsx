'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand-section">
            <div className="footer-logo">
              <span className="footer-logo-icon">🦜</span>
              <span className="footer-logo-text">Muji Birds</span>
            </div>
            <p className="footer-description">Your trusted companion for bird care, breeding, and health guidance.</p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/birds">Birds</Link></li>
              <li><Link href="/finches">Finches</Link></li>
              <li><Link href="/hens">Hens</Link></li>
              <li><Link href="/medicine">Medicine</Link></li>
              <li><Link href="/qa">Ask AI</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Connect</h4>
            <div className="social-links">
              <span className="social-icon">📧</span>
              <span className="social-icon">📱</span>
              <span className="social-icon">🌐</span>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {currentYear} Muji Birds. All rights reserved.</p>
          <p className="footer-dev">Crafted with ❤️ by <span className="brand-name">CoderHacks</span></p>
        </div>
      </div>
    </footer>
  )
}
