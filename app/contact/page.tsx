'use client'

const safeOpen = (url: string) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

export default function Contact() {
  const handleWhatsApp = () => {
    safeOpen('https://wa.me/923124653858')
  }

  const handleEmail = () => {
    safeOpen('mailto:coderhacks912@gmail.com')
  }

  const handlePhone = () => {
    safeOpen('tel:+923124653858')
  }

  return (
    <div className="contact-bg">
      <h1 className="page-title" data-page-type="📞">Contact Us</h1>
      
      <div className="card-grid">
        <div className="card contact-card">
          <h3>📧 Email Us</h3>
          <p><strong>Email:</strong> coderhacks912@gmail.com</p>
          <p>Send us your bird care questions, feedback, or suggestions. We'll get back to you as soon as possible!</p>
          <button onClick={handleEmail} className="contact-btn email-btn" aria-label="Send email to coderhacks912@gmail.com">
            📧 Send Email
          </button>
        </div>

        <div className="card contact-card">
          <h3>📱 Call Us</h3>
          <p><strong>Phone:</strong> +92 312 4653858</p>
          <p>Call us directly for urgent bird care questions or immediate assistance with your feathered friends.</p>
          <button onClick={handlePhone} className="contact-btn phone-btn" aria-label="Call +92 312 4653858">
            📞 Call Now
          </button>
        </div>
      </div>

      <div className="card-grid">
        <div className="card contact-card whatsapp-card">
          <h3>💬 WhatsApp</h3>
          <p><strong>WhatsApp:</strong> +92 312 4653858</p>
          <p>Get instant support via WhatsApp! Send us photos of your birds, ask questions, and get quick responses.</p>
          <button onClick={handleWhatsApp} className="contact-btn whatsapp-btn" aria-label="Chat on WhatsApp +92 312 4653858">
            💬 Chat on WhatsApp
          </button>
        </div>

        <div className="card contact-card">
          <h3>🕒 Support Hours</h3>
          <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
          <p><strong>Saturday:</strong> 10:00 AM - 4:00 PM</p>
          <p><strong>Sunday:</strong> Emergency support only</p>
          <p>We're here to help with all your bird care needs during business hours.</p>
        </div>
      </div>

      <div className="info-section">
        <h2>🐦 Get Expert Bird Care Support</h2>
        <p>
          Our team at CoderHacks is passionate about bird care and committed to helping you provide the best 
          care for your feathered companions. Whether you have questions about finches, chickens, or any other 
          birds, we're here to help!
        </p>
        
        <h3>What We Can Help With:</h3>
        <ul>
          <li>Bird health and medicine questions</li>
          <li>Breeding and reproduction guidance</li>
          <li>Nutrition and feeding advice</li>
          <li>Housing and cage setup</li>
          <li>Behavioral issues and training</li>
          <li>Emergency care instructions</li>
        </ul>

        <h3>Why Contact Us:</h3>
        <ul>
          <li>Expert knowledge in bird care</li>
          <li>Quick response times</li>
          <li>Personalized advice for your birds</li>
          <li>Emergency support available</li>
          <li>Free consultation and guidance</li>
        </ul>
      </div>
    </div>
  )
}