'use client'

import { CONTACT_INFO } from '../constants/config'

const safeOpen = (url: string) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

export default function Contact() {
  const handleWhatsApp = () => {
    safeOpen(CONTACT_INFO.WHATSAPP_URL)
  }

  const handleEmail = () => {
    safeOpen(`mailto:${CONTACT_INFO.EMAIL}`)
  }

  const handlePhone = () => {
    safeOpen(`tel:${CONTACT_INFO.PHONE}`)
  }

  return (
    <div className="contact-bg">
      <h1 className="page-title" data-page-type="📞">Contact Us</h1>
      
      <div className="card-grid">
        <div className="card contact-card">
          <h3>📧 Email Us</h3>
          <p><strong>Email:</strong> {CONTACT_INFO.EMAIL}</p>
          <p>Send us your bird care questions, feedback, or suggestions. We'll get back to you as soon as possible!</p>
          <button onClick={handleEmail} className="contact-btn email-btn" aria-label={`Send email to ${CONTACT_INFO.EMAIL}`}>
            📧 Send Email
          </button>
        </div>

        <div className="card contact-card">
          <h3>📱 Call Us</h3>
          <p><strong>Phone:</strong> {CONTACT_INFO.PHONE_DISPLAY}</p>
          <p>Call us directly for urgent bird care questions or immediate assistance with your feathered friends.</p>
          <button onClick={handlePhone} className="contact-btn phone-btn" aria-label={`Call ${CONTACT_INFO.PHONE_DISPLAY}`}>
            📞 Call Now
          </button>
        </div>
      </div>

      <div className="card-grid">
        <div className="card contact-card whatsapp-card">
          <h3>💬 WhatsApp</h3>
          <p><strong>WhatsApp:</strong> {CONTACT_INFO.PHONE_DISPLAY}</p>
          <p>Get instant support via WhatsApp! Send us photos of your birds, ask questions, and get quick responses.</p>
          <button onClick={handleWhatsApp} className="contact-btn whatsapp-btn" aria-label={`Chat on WhatsApp ${CONTACT_INFO.PHONE_DISPLAY}`}>
            💬 Chat on WhatsApp
          </button>
        </div>

        <div className="card contact-card">
          <h3>🕒 Support Hours</h3>
          <p><strong>Monday - Friday:</strong> {CONTACT_INFO.SUPPORT_HOURS.WEEKDAY}</p>
          <p><strong>Saturday:</strong> {CONTACT_INFO.SUPPORT_HOURS.SATURDAY}</p>
          <p><strong>Sunday:</strong> {CONTACT_INFO.SUPPORT_HOURS.SUNDAY}</p>
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