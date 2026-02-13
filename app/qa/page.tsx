'use client'

import React, { useState } from 'react'
import MedicalDisclaimer from '../components/MedicalDisclaimer'
import { generateAnswer } from '@/app/utils/symptomMatcher'

export default function QA() {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [displayedQuestion, setDisplayedQuestion] = useState('')
  const [showAlert, setShowAlert] = useState(false)
  const [answerTime, setAnswerTime] = useState('')
  const [disclaimerAccepted, setDisclaimerAccepted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!question.trim() || isLoading || !disclaimerAccepted) return

    const userQuestion = question.trim()
    if (userQuestion.length > 600) {
      setAnswer('Question is too long. Please keep it under 600 characters.')
      return
    }
    
    setDisplayedQuestion(userQuestion)
    setQuestion('')
    setIsLoading(true)
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      const aiAnswer = generateAnswer(userQuestion)
      setAnswer(aiAnswer)
      setAnswerTime(new Date().toLocaleTimeString())
      setShowAlert(true)
      setTimeout(() => setShowAlert(false), 5000)
    } catch (error) {
      console.error('Error generating answer:', error)
      setAnswer('Sorry, there was an error processing your question. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSuggestion = (suggestionText: string) => {
    if (suggestionText && typeof suggestionText === 'string') {
      setQuestion(suggestionText)
    }
  }

  return (
    <div className="qa-bg">
      <h1 className="page-title" data-page-type="🤖">Symptom Checker</h1>
      
      {showAlert && answer && (
        <div style={{
          position: 'fixed',
          top: '80px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#4ecdc4',
          color: 'white',
          padding: '1rem 2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          zIndex: 1000,
          maxWidth: '90%',
          animation: 'slideDown 0.3s ease-out'
        }}>
          ✅ Response Ready at {answerTime} - Scroll down to see the information.
        </div>
      )}
      
      <div className="qa-container">
        <MedicalDisclaimer />

        <div className="qa-form-section">
          <div className="card">
            <h3>🤖 Symptom Checker</h3>
            <p className="qa-note">
              This tool provides general information only and is NOT a substitute for professional veterinary care.
              Always consult a licensed veterinarian for diagnosis and treatment.
            </p>
            
            <div style={{backgroundColor: '#fff3cd', padding: '1rem', borderRadius: '8px', marginBottom: '1rem', borderLeft: '4px solid #ff9800'}}>
              <strong>⚠️ Important:</strong> By using this tool, you acknowledge that you have read and understood the medical disclaimer above.
              <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem', cursor: 'pointer'}}>
                <input 
                  type="checkbox" 
                  checked={disclaimerAccepted}
                  onChange={(e) => setDisclaimerAccepted(e.target.checked)}
                  style={{cursor: 'pointer'}}
                />
                I understand and accept the disclaimer
              </label>
            </div>

            <form onSubmit={handleSubmit} className="qa-form">
              <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Describe your bird's symptoms (e.g., 'My finch has fever and is weak')..."
                className="qa-input"
                rows={4}
                maxLength={600}
                disabled={!disclaimerAccepted}
              />
              <button 
                type="submit" 
                disabled={isLoading || !question.trim() || !disclaimerAccepted}
                className="qa-button"
                aria-label="Get symptom information"
              >
                {isLoading ? '🤔 Analyzing...' : '🔍 Check Symptoms'}
              </button>
            </form>
          </div>
        </div>

        {answer && (
          <div className="qa-answer-section">
            <div className="card qa-answer">
              <h3>❓ Your Question</h3>
              <p style={{backgroundColor: '#f0f4f8', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem', borderLeft: '4px solid #ff6b6b'}}>{displayedQuestion}</p>
              <h3>📋 Information</h3>
              <pre style={{whiteSpace: 'pre-line', fontFamily: 'inherit', backgroundColor: '#f9fafb', padding: '1rem', borderRadius: '8px', overflow: 'auto'}}>{answer}</pre>
            </div>
          </div>
        )}

        <div className="qa-suggestions">
          <div className="card">
            <h3>💡 Common Symptoms</h3>
            <div className="suggestion-buttons">
              <button onClick={() => handleSuggestion("My bird has fever")} className="suggestion-btn">
                My bird has fever
              </button>
              <button onClick={() => handleSuggestion("My finch is weak")} className="suggestion-btn">
                My finch is weak
              </button>
              <button onClick={() => handleSuggestion("How to treat mites in hens?")} className="suggestion-btn">
                How to treat mites in hens?
              </button>
              <button onClick={() => handleSuggestion("My bird has viral infection")} className="suggestion-btn">
                My bird has viral infection
              </button>
              <button onClick={() => handleSuggestion("My finch is not breeding")} className="suggestion-btn">
                My finch is not breeding
              </button>
              <button onClick={() => handleSuggestion("My bird has digestive issues")} className="suggestion-btn">
                My bird has digestive issues
              </button>
              <button onClick={() => handleSuggestion("My bird is bleeding")} className="suggestion-btn">
                My bird is bleeding
              </button>
            </div>
          </div>
        </div>

        <div className="qa-medical-info">
          <div className="card-grid">
            <div className="card">
              <h3>🐦 Birds & Parrots</h3>
              <ul>
                <li><strong>Fever:</strong> Consult vet for diagnosis</li>
                <li><strong>Weakness:</strong> Supportive care needed</li>
                <li><strong>Lethargy:</strong> Warm environment required</li>
                <li><strong>Not Breeding:</strong> Nutritional support</li>
                <li><strong>Digestive Issues:</strong> Dietary adjustment</li>
                <li><strong>Viral Infection:</strong> Isolation required</li>
                <li><strong>Stress:</strong> Environmental management</li>
                <li><strong>Mites:</strong> Cage disinfection</li>
                <li><strong>Bleeding:</strong> EMERGENCY - Stop bleeding immediately</li>
              </ul>
            </div>

            <div className="card">
              <h3>🐥 Finches</h3>
              <ul>
                <li><strong>Fever:</strong> Consult vet for diagnosis</li>
                <li><strong>Weakness:</strong> Supportive care needed</li>
                <li><strong>Lethargy:</strong> Warm environment required</li>
                <li><strong>Not Breeding:</strong> Nutritional support</li>
                <li><strong>Digestive Issues:</strong> Dietary adjustment</li>
                <li><strong>Viral Infection:</strong> Isolation required</li>
                <li><strong>Stress:</strong> Environmental management</li>
                <li><strong>Mites:</strong> Cage disinfection</li>
                <li><strong>Bleeding:</strong> EMERGENCY - Stop bleeding immediately</li>
              </ul>
            </div>

            <div className="card">
              <h3>🐓 Hens & Poultry</h3>
              <ul>
                <li><strong>Fever:</strong> Consult vet for diagnosis</li>
                <li><strong>Weakness:</strong> Supportive care needed</li>
                <li><strong>Lethargy:</strong> Warm environment required</li>
                <li><strong>Not Breeding:</strong> Nutritional support</li>
                <li><strong>Digestive Issues:</strong> Dietary adjustment</li>
                <li><strong>Viral Infection:</strong> Isolation required</li>
                <li><strong>Stress:</strong> Environmental management</li>
                <li><strong>Mites:</strong> Coop disinfection</li>
                <li><strong>Bleeding:</strong> EMERGENCY - Stop bleeding immediately</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
