'use client'

export default function MedicalDisclaimer() {
  return (
    <section className="info-section medical-disclaimer" style={{backgroundColor: '#fff3cd', borderLeft: '4px solid #ff9800'}}>
      <h2 style={{color: '#ff6b00'}}>⚠️ Important Medical Disclaimer</h2>
      <p style={{fontWeight: 'bold', color: '#d32f2f'}}>
        The information on this site is for general educational purposes only and is NOT a substitute for professional diagnosis, treatment, or advice from a qualified avian veterinarian.
      </p>
      <p>
        <strong>Critical:</strong> Never start, stop, or change any medication for your birds based solely on the content here. Medication names, dosages, and protocols vary significantly by species, weight, age, and underlying conditions.
      </p>
      <p>
        <strong>Veterinary Consultation Required:</strong> If your bird appears sick, is in distress, or you are unsure about any treatment, contact a licensed avian veterinarian immediately. This site is a starting point for discussion with your vet, not a replacement for professional medical care.
      </p>
      <p style={{marginTop: '1rem', padding: '0.5rem', backgroundColor: '#ffebee', borderRadius: '4px'}}>
        <strong>Liability Notice:</strong> By using this site, you acknowledge that you understand this information is educational only and assume full responsibility for any decisions made regarding your bird's care.
      </p>
    </section>
  )
}
