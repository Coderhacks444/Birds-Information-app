'use client'

import React, { useState } from 'react'
import MedicalDisclaimer from '../components/MedicalDisclaimer'

export default function QA() {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [displayedQuestion, setDisplayedQuestion] = useState('')
  const [showAlert, setShowAlert] = useState(false)
  const [answerTime, setAnswerTime] = useState('')

  const generateAnswer = async (userQuestion: string) => {
    setIsLoading(true)
    
    try {
      const lowerQuestion = userQuestion.toLowerCase()

      const isFinch = lowerQuestion.includes('finch') || lowerQuestion.includes('java') || lowerQuestion.includes('canary') || lowerQuestion.includes('zebra')
      const isHenOrChicken = lowerQuestion.includes('hen') || lowerQuestion.includes('chicken') || lowerQuestion.includes('poultry') || lowerQuestion.includes('aseel') || lowerQuestion.includes('broiler') || lowerQuestion.includes('layer')
      const isBird = !isFinch && !isHenOrChicken && (lowerQuestion.includes('bird') || lowerQuestion.includes('parrot') || lowerQuestion.includes('parakeet') || lowerQuestion.includes('lovebirds') || lowerQuestion.includes('cockatiel') || lowerQuestion.includes('budgie') || lowerQuestion.includes('ringneck') || lowerQuestion.includes('macaw'))
      const hasFever = lowerQuestion.includes('fever') || lowerQuestion.includes('temperature') || lowerQuestion.includes('hot') || lowerQuestion.includes('heat') || lowerQuestion.includes('high temp') || lowerQuestion.includes('motionless') 
      const isWeak = lowerQuestion.includes('weak') || lowerQuestion.includes('tired') || lowerQuestion.includes('not eating') || lowerQuestion.includes("doesn't eat") || lowerQuestion.includes('anorexia') 
      const isLazy = lowerQuestion.includes('lazy') || lowerQuestion.includes('lethargic') || lowerQuestion.includes('inactive') || lowerQuestion.includes('sluggish') 
      const notBreeding = lowerQuestion.includes('not breed') || lowerQuestion.includes('no breed') || lowerQuestion.includes('infertile') || lowerQuestion.includes('unproductive') || lowerQuestion.includes('not eggs lying') || lowerQuestion.includes('not breeding') || lowerQuestion.includes('fast breeding, breed')
      const fastBreeding = lowerQuestion.includes('fast breed') || lowerQuestion.includes('breed fast') || lowerQuestion.includes('quick breed') || lowerQuestion.includes('breeding') || lowerQuestion.includes('improve fertility')
      const digestIssues = lowerQuestion.includes('digest') || lowerQuestion.includes('diarrhea') || lowerQuestion.includes('diarrhoea') || lowerQuestion.includes('droppings') || lowerQuestion.includes('constipation') || lowerQuestion.includes('stomach') || lowerQuestion.includes('gut') || lowerQuestion.includes('not digesting')
      const viralInfect = lowerQuestion.includes('viral') || lowerQuestion.includes('virus') || lowerQuestion.includes('infection') || lowerQuestion.includes('infected') || lowerQuestion.includes('disease') || lowerQuestion.includes('sick') || lowerQuestion.includes('ill')
      const stress = lowerQuestion.includes('stress') || lowerQuestion.includes('anxious') || lowerQuestion.includes('nervous') || lowerQuestion.includes('agitated') || lowerQuestion.includes('uneasy') || lowerQuestion.includes('restless')
      const mites = lowerQuestion.includes('mite') || lowerQuestion.includes('parasite') || lowerQuestion.includes('lice') || lowerQuestion.includes('tick') || lowerQuestion.includes('infestation') || lowerQuestion.includes('mange')

      let response: string = ''

      // BIRDS (Parrots, Parakeets, etc.)
      if (hasFever && isBird) {
        response = [
          'Treatment for Birds with Fever:',
          '• Panadol Syrup - Use as directed for fever reduction',
          '• Flagyl Syrup - For bacterial infections',
          '• Brophen Syrup - Anti-inflammatory and fever relief',
          '',
          'Care Instructions:',
          '• Keep the bird warm and in a quiet, stress-free environment',
          '• Provide fresh water and high-quality food',
          '• Monitor breathing and activity closely',
          '• Contact an avian veterinarian for proper dosage and diagnosis',
          '',
          'For more information, please contact us.'
        ].join('\n')
      } else if (isWeak && isBird) {
        response = [
          'Treatment for Weak Birds:',
          '• Jetpurp Syrup - For general weakness and energy',
          '• Hepmarz Syrup - Liver support and vitality',
          '• Oxafax Dewormer - Broad-Spectrum Anthelmintic Solution for Birds',
          '• Rexia - Recover From Anorexia & Promoting Health',
          '',
          'Care Instructions:',
          '• Place in a warm, quiet hospital cage',
          '• Offer soft foods and fresh water',
          '• Minimize stress and activity',
          '• Consult an avian veterinarian immediately',
          '',
          'For more information, please contact us.'
        ].join('\n')
      } else if (isLazy && isBird) {
        response = [
          'Treatment for Lazy/Lethargic Birds:',
          '• Vadline L Syrup - For lethargy and weakness',
          '• Symostress – Multivitamin Supplement for Poultry',
          '• Symans Vitamin & Electrolytes – Stress Recovery Supplement',

          '',
          'Care Instructions:',
          '• Ensure proper temperature (75-80°F)',
          '• Provide nutritious food and clean water',
          '• Reduce environmental stress',
          '• Seek veterinary evaluation',
          '',
          'For more information, please contact us.'
        ].join('\n')
      } else if ((notBreeding || fastBreeding) && isBird) {
        response = [
          'Treatment for Birds Not Breeding:',
          '• Vitasol Super – Multivitamin Supplement for Poultry',
          '• Vital Grow - Nutritional support for reproduction',
          '• Mailiq Ca+D3  - Calcium supplement',
          '• Imunotone Plus – Immune Booster & Vitamin E Supplement',
          '• True Mineral Block - For All Type of Birds',
          '',
          'Care Instructions:',
          '• Ensure proper diet with calcium and minerals',
          '• Provide 12-14 hours of light daily',
          '• Maintain optimal temperature',
          '• Consult an avian veterinarian for breeding advice',
          '',
          'For more information, please contact us.'
        ].join('\n')
      } else if (digestIssues  && isBird) {
        response = [
          'Treatment for Digestive Issues in Birds:',
          '• Flagyl Syrup - For bacterial infections',
          '• Lasowit - Digestive support',
          '• Apple vinegar - Digestive cleanser',
          '',
          'Care Instructions:',
          '• Offer easily digestible foods',
          '• Provide fresh water at all times',
          '• Keep the bird warm and stress-free',
          '• Monitor droppings for changes',
          '• Contact an avian veterinarian',
          '',
          'For more information, please contact us.'
        ].join('\n')
      } else if (viralInfect && isBird) {
        response = [
          'Treatment for Viral Infections in Birds:',
          '• Telforsin - Antiviral medication',
          '• Enrosol S - Respiratory support',
          '• Tetracycline - Antibiotic support',
           '• Teylodox -  supper Antibiotic support',
           '• Enrosym – Broad Spectrum Antibiotic for Birds & Poultry',
          '',
          'Care Instructions:',
          '• Isolate the bird from other birds',
          '• Maintain warm, clean environment',
          '• Provide supportive care and nutrition',
          '• Follow veterinary dosage instructions carefully',
          '• Contact an avian veterinarian immediately',
          '',
          'For more information, please contact us.'
        ].join('\n')
      } else if (stress && isBird) {
        response = [
          'Treatment for Stressed Birds:',
          '• Symans Vitamin & Electrolytes – Stress Recovery Supplementt',
          '• Symdecks - Calming support',
          '• Symostress – Multivitamin Supplement for Poultry',
          '',
          'Care Instructions:',
          '• Reduce noise and sudden changes',
          '• Provide a secure, comfortable cage',
          '• Maintain consistent daily routine',
          '• Offer favorite foods and toys',
          '• Minimize handling during stress periods',
          '',
          'For more information, please contact us.'
        ].join('\n')
      } else if (mites && isBird) {
        response = [
          'Treatment for Mites in Birds:',
          '• Virkon S - Environmental disinfectant',
          '• Ticks Killer - Consult veterinarian for application',
          '• Dettol Water Spray - For cage cleaning',
          '• Seguvan Powder – Treatment of Parasites & Mites',
          '',
          'Care Instructions:',
          '• Clean and disinfect the entire cage',
          '• Replace bedding and perches',
          '• Isolate affected bird from others',
          '• Spray cage with Dettol water solution',
          '• Consult a veterinarian for proper treatment',
          '',
          'For more information and special treatment, please contact us.'
        ].join('\n')
      } else if (hasFever && isFinch) {
        response = [
          'Treatment for Finches with Fever:',
          '• Panadol Syrup - Use as directed for fever reduction',
          '• Flagyl Syrup - For bacterial infections',
          '• Brophen Syrup - Anti-inflammatory and fever relief',
          '',
          'Care Instructions:',
          '• Move to a small hospital cage in a warm, quiet room (26-29°C)',
          '• Keep away from drafts and other birds',
          '• Provide fresh water and high-quality finch seed mix',
          '• Keep cage clean and dry',
          '• Monitor breathing, droppings, and activity closely',
          '• Contact an avian veterinarian immediately',
          '',
          'For more information, please contact us.'
        ].join('\n')
      } else if (isWeak && isFinch) {
        response = [
          'Treatment for Weak Finches:',
          '• Jetpurp Syrup - For general weakness and energy',
          '• Hepmarz Syrup - Liver support and vitality',
          '• Oxafax Dewormer - Broad-Spectrum Anthelmintic Solution for Birds',
          '• Life Line Herbal Grit - Natural Calcium & Mineral Supplement',
          '• Rexia - Recover From Anorexia & Promoting Health',
          '',
          'Care Instructions:',
          '• Place in a warm, quiet hospital cage',
          '• Offer soft foods and fresh water',
          '• Minimize stress and activity',
          '• Consult an avian veterinarian immediately',
          '',
          'For more information, please contact us.'
        ].join('\n')
      } else if (isLazy && isFinch) {
        response = [
          'Treatment for Lazy/Lethargic Finches:',
          '• Vadline L Syrup - For lethargy and weakness',
          '• Symans Vitamin & Electrolytes – Stress Recovery Supplementt',
          '• Symostress – Multivitamin Supplement for Poultry',
          '• Seven Seas Cod Liver Oil - Omega 3 Supplement for Birds',
          '',
          'Care Instructions:',
          '• Ensure proper temperature (24-26°C)',
          '• Provide nutritious finch food and clean water',
          '• Reduce environmental stress',
          '• Seek veterinary evaluation',
          '',
          'For more information, please contact us.'
        ].join('\n')
      } else if ((notBreeding || fastBreeding) && isFinch) {
        response = [
          'Treatment for Finches Not Breeding:',
          '• Vitsol - Vitamin supplement for breeding condition',
          '• Vital Grow - Nutritional support for reproduction',
          '•NEKTON E – Vitamin E Supplement for Fertility & Breeding',
          '• Moringa Leaf Powder - Natural Nutrient Supplement',
          '• Seven Seas Cod Liver Oil - Omega 3 Supplement for Birds',
          '',
          'Care Instructions:',
          '• Ensure proper diet with calcium and minerals',
          '• Provide 12-14 hours of light daily',
          '• Maintain optimal temperature (24-26°C)',
          '• Consult an avian veterinarian for breeding advice',
          '',
          'For more information, please contact us.'
        ].join('\n')
      } else if (digestIssues && isFinch) {
        response = [
          'Treatment for Digestive Issues in Finches:',
          '• Flagyl Syrup - For bacterial infections',
          '• Lasowit - Digestive support',
          '• Apple Vinegar with Vegetables – Digestive & Immunity Booster for Birds',
          '• Life Line Herbal Grit - Natural Calcium & Mineral Supplement',
          '',
          'Care Instructions:',
          '• Offer easily digestible foods',
          '• Provide fresh water at all times',
          '• Keep the finch warm and stress-free',
          '• Monitor droppings for changes',
          '• Contact an avian veterinarian',
          '',
          'For more information, please contact us.'
        ].join('\n')
      } else if (viralInfect && isFinch) {
        response = [
          'Treatment for Viral Infections in Finches:',
          '• Telforsin - Antiviral medication',
          '• Enrosol S - Respiratory support',
          '• Tetracycline - Antibiotic support',
          '• Teylodox -  supper Antibiotic support',
          '•  Enrosym – Broad Spectrum Antibiotic for Birds & Poultry',
          '',
          'Care Instructions:',
          '• Isolate the finch from other birds',
          '• Maintain warm, clean environment',
          '• Provide supportive care and nutrition',
          '• Follow veterinary dosage instructions carefully',
          '• Contact an avian veterinarian immediately',
          '',
          'For more information, please contact us.'
        ].join('\n')
      } else if (stress && isFinch) {
        response = [
          'Treatment for Stressed Finches:',
          '• Symo Stress - Stress relief supplement',
          '• Symdecks - Calming support',
            '• Moringa Leaf Powder - Natural Nutrient Supplement',
          '',
          'Care Instructions:',
          '• Reduce noise and sudden changes',
          '• Provide a secure, comfortable cage',
          '• Maintain consistent daily routine',
          '• Offer favorite foods and seeds',
          '• Minimize handling during stress periods',
          '',
          'For more information, please contact us.'
        ].join('\n')
      } else if (mites && isFinch) {
        response = [
          'Treatment for Mites in Finches:',
          '• Virkon S - Environmental disinfectant',
          '• Ticks Killer - Consult veterinarian for application',
          '• Dettol Water Spray - For cage cleaning',
          '• Seguvan Powder – Treatment of Parasites & Mites',
          '',
          'Care Instructions:',
          '• Clean and disinfect the entire cage',
          '• Replace bedding and perches',
          '• Isolate affected finch from others',
          '• Spray cage with Dettol water solution',
          '• Consult a veterinarian for proper treatment',
          '',
          'For more information, please contact us.'
        ].join('\n')
      } else if (hasFever && isHenOrChicken) {
        response = [
          'Treatment for Hens with Fever:',
          '• Panadol Syrup - Use as directed for fever reduction',
          '• Flagyl Syrup - For bacterial infections',
          '• Brophen Syrup - Anti-inflammatory and fever relief',
          '',
          'Care Instructions:',
          '• Isolate the hen in a clean, dry, draft-free pen with deep bedding',
          '• Check the comb and wattles, breathing, and mobility',
          '• Give plenty of fresh water',
          '• Offer a good layer feed and limit heavy treats',
          '• Contact a poultry veterinarian within 24 hours',
          '',
          'For more information, please contact us.'
        ].join('\n')
      } else if (isWeak && isHenOrChicken) {
        response = [
          'Treatment for Weak Hens:',
          '• Jetpurp Syrup - For general weakness and energy',
          '• Hepmarz Syrup - Liver support and vitality',
          '• Life Line Herbal Grit - Natural Calcium & Mineral Supplement',
          '• Rexia - Recover From Anorexia & Promoting Health',
           '',
          'Care Instructions:',
          '• Isolate in a clean, dry pen',
          '• Provide fresh water and nutritious feed',
          '• Minimize stress and activity',
          '• Consult a poultry veterinarian immediately',
          '',
          'For more information, please contact us.'
        ].join('\n')
      } else if (isLazy && isHenOrChicken) {
        response = [
          'Treatment for Lazy/Lethargic Hens:',
          '• Vadline L Syrup - For lethargy and weakness',
          '• Symans Vitamin & Electrolytes – Stress Recovery Supplementt',
          '• Symostress – Multivitamin Supplement for Poultry',
          '',
          'Care Instructions:',
          '• Ensure proper temperature and ventilation',
          '• Provide nutritious feed and clean water',
          '• Reduce environmental stress',
          '• Seek veterinary evaluation',
          '',
          'For more information, please contact us.'
        ].join('\n')
      } else if ((notBreeding || fastBreeding ) && isHenOrChicken) {
        response = [
          'Treatment for Hens Not Breeding:',
          '• Vitsol - Vitamin supplement for breeding condition',
          '• Vital Grow - Nutritional support for reproduction',
          '• Symostress - Multivitamin supplement for poultry',
          '•NEKTON E – Vitamin E Supplement for Fertility & Breeding',
          '• Moringa Leaf Powder - Natural Nutrient Supplement',
            '',
          'Care Instructions:',
          '• Ensure proper diet with calcium and minerals',
          '• Provide 14-16 hours of light daily',
          '• Maintain optimal temperature',
          '• Consult a poultry veterinarian for breeding advice',
          '',
          'For more information, please contact us.'
        ].join('\n')
      } else if (digestIssues && isHenOrChicken) {
        response = [
          'Treatment for Digestive Issues in Hens:',
          '• Flagyl Syrup - For bacterial infections',
          '• Lasowit - Digestive support',
          '• Apple vinegar - Digestive cleanser',
            '',
          'Care Instructions:',
          '• Offer easily digestible foods',
          '• Provide fresh water at all times',
          '• Keep the hen warm and stress-free',
          '• Monitor droppings for changes',
          '• Contact a poultry veterinarian',
          '',
          'For more information, please contact us.'
        ].join('\n')
      } else if (viralInfect && isHenOrChicken) {
        response = [
          'Treatment for Viral Infections in Hens:',
          '• Telforsin - Antiviral medication',
          '• Enrosol S - Respiratory support',
          '• Tetracycline - Antibiotic support',
          '• Teylodox -  supper Antibiotic support',
          '•  Enrosym – Broad Spectrum Antibiotic for Birds & Poultry',
            '',
          'Care Instructions:',
          '• Isolate the hen from other birds',
          '• Maintain warm, clean environment',
          '• Provide supportive care and nutrition',
          '• Follow veterinary dosage instructions carefully',
          '• Contact a poultry veterinarian immediately',
          '',
          'For more information, please contact us.'
        ].join('\n')
      } else if (stress && isHenOrChicken) {
        response = [
          'Treatment for Stressed Hens:',
          '• Symdecks - Calming support',
          '• Symostress - Multivitamin supplement',
          '• Moringa Leaf Powder - Natural Nutrient Supplement',
            '',
          'Care Instructions:',
          '• Reduce noise and sudden changes',
          '• Provide a secure, comfortable coop',
          '• Maintain consistent daily routine',
          '• Offer favorite foods and treats',
          '• Minimize handling during stress periods',
          '',
          'For more information, please contact us.'
        ].join('\n')
      } else if (mites && isHenOrChicken) {
        response = [
          'Treatment for Mites in Hens:',
          '• Virkon S - Environmental disinfectant',
          '• Ticks Killer - Consult veterinarian for application',
          '• Dettol Water Spray - For coop cleaning',
          '• Seguvan Powder – Treatment of Parasites & Mites',
          '',
          'Care Instructions:',
          '• Clean and disinfect the entire coop',
          '• Replace bedding and perches',
          '• Isolate affected hen from others',
          '• Spray coop with Dettol water solution',
          '• Consult a veterinarian for proper treatment',
          '',
          'For Aseel hen special treatment, please contact us.'
        ].join('\n')
      } else {
        response = [
          'General Bird Care:',
          '• Place the bird in a calm, warm, and secure environment away from sudden noise and stress',
          '• Check that food and fresh water are easy to reach',
          '• Note any changes in breathing, droppings, appetite, balance, or feather condition',
          '• Remove obvious hazards like toxic plants, fumes, or unsafe toys',
          '',
          'When to Contact a Veterinarian:',
          '• Contact an avian or poultry veterinarian and describe the bird (species, age) and your observations',
          '• Use the information on this site only as a guide to prepare for that veterinary visit',
          '',
          'For more information about birds and medicines, please contact us.'
        ].join('\n')
      }

      await new Promise(resolve => setTimeout(resolve, 1500))
      return response
    } catch (error) {
      console.error('Error in generateAnswer:', error)
      throw new Error('Failed to generate answer')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!question.trim() || isLoading) return

    const userQuestion = question.trim()
    if (userQuestion.length > 600) {
      setAnswer('Question is too long. Please keep it under 600 characters.')
      return
    }
    
    setDisplayedQuestion(userQuestion)
    setQuestion('')
    
    try {
      const aiAnswer = await generateAnswer(userQuestion)
      setAnswer(aiAnswer)
      setAnswerTime(new Date().toLocaleTimeString())
      setShowAlert(true)
      setTimeout(() => setShowAlert(false), 5000)
    } catch (error) {
      console.error('Error generating answer:', error)
      setAnswer('Sorry, there was an error processing your question. Please try again.')
    }
  }

  const handleSuggestion = (suggestionText: string) => {
    if (suggestionText && typeof suggestionText === 'string') {
      setQuestion(suggestionText)
    }
  }

  return (
    <div className="qa-bg">
      <h1 className="page-title" data-page-type="🤖">Ask Our AI Assistant</h1>
      
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
          ✅ AI Answer Ready at {answerTime} - Scroll down to see the response.
        </div>
      )}
      
      <div className="qa-container">
        <div className="qa-form-section">
          <div className="card">
            <h3>🤖 Ask Any Bird Care Question</h3>
            <p className="qa-note">
              Answers are general guidelines only and are not a substitute for an avian veterinarian.
              Always consult a professional for diagnosis and treatment.
            </p>
            <form onSubmit={handleSubmit} className="qa-form">
              <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ask me anything about bird care, breeding, health, diet, housing, medicines..."
                className="qa-input"
                rows={4}
                maxLength={600}
              />
              <button 
                type="submit" 
                disabled={isLoading || !question.trim()}
                className="qa-button"
                aria-label="Submit question to AI assistant"
              >
                {isLoading ? '🤔 Thinking...' : '🚀 Ask AI'}
              </button>
            </form>
          </div>
        </div>

        {answer && (
          <div className="qa-answer-section">
            <div className="card qa-answer">
              <h3>❓ Your Question</h3>
              <p style={{backgroundColor: '#f0f4f8', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem', borderLeft: '4px solid #ff6b6b'}}>{displayedQuestion}</p>
              <h3>🤖 AI Assistant Response</h3>
              <p>{answer}</p>
            </div>
          </div>
        )}

        <div className="qa-suggestions">
          <div className="card">
            <h3>💡 Popular Questions</h3>
            <div className="suggestion-buttons">
              <button onClick={() => handleSuggestion("My bird has fever, what medicine should I use?")} className="suggestion-btn">
                My bird has fever, what medicine should I use?
              </button>
              <button onClick={() => handleSuggestion("My finch is weak, how to treat it?")} className="suggestion-btn">
                My finch is weak, how to treat it?
              </button>
              <button onClick={() => handleSuggestion("How do I treat mites in my hens?")} className="suggestion-btn">
                How do I treat mites in my hens?
              </button>
              <button onClick={() => handleSuggestion("My bird has viral infection, what treatment?")} className="suggestion-btn">
                My bird has viral infection, what treatment?
              </button>
              <button onClick={() => handleSuggestion("My finch is not breeding, what should I do?")} className="suggestion-btn">
                My finch is not breeding, what should I do?
              </button>
              <button onClick={() => handleSuggestion("How to treat digestive issues in birds?")} className="suggestion-btn">
                How to treat digestive issues in birds?
              </button>
            </div>
          </div>
        </div>

        <div className="qa-disclaimer">
          <MedicalDisclaimer />
        </div>

        <div className="qa-medical-info">
          <div className="card-grid">
            <div className="card">
              <h3>🐦 Birds & Parrots </h3>
              <ul>
                <li><strong>Fever:</strong> Panadol, Flagyl, Brophen Syrup</li>
                <li><strong>Weakness:</strong> Jetpurp, Hepmarz Syrup</li>
                <li><strong>Lethargy:</strong> Vadline L Syrup</li>
                <li><strong>Not Breeding:</strong> Mialiq cources, Vital Grow</li>
                <li><strong>Digestive Issues:</strong> Flagyl syrup, Lasowit syrup, liver Tonic syrup </li>
                <li><strong>Viral Infection:</strong> Telforsin, Enrosol S, Tetracycline, Teylodox </li>
                <li><strong>Stress:</strong> Symo Stress, Symdecks</li>
                <li><strong>Mites:</strong> Virkon S, Seguvan, Dettol Water Spray</li>
              </ul>
            </div>

            <div className="card">
              <h3>🐥 Finches</h3>
              <ul>
                <li><strong>Fever:</strong> Panadol, Brophen Syrup</li>
                <li><strong>Weakness:</strong> Jetpurp, Hepmarz Syrup</li>
                <li><strong>Lethargy:</strong> Vadline L Syrup</li>
                <li><strong>Not Breeding:</strong> Vitsol, Vital Grow</li>
                <li><strong>Digestive Issues:</strong> Flagyl, Lasowit, Herbal Girt</li>
                <li><strong>Viral Infection:</strong> Telforsin, Enrosol S, Teylodox </li>
                <li><strong>Stress:</strong> Symo Stress, Symdecks</li>
                <li><strong>Mites:</strong> Virkon S, Ticks Killer, Dettol Water Spray</li>
              </ul>
            </div>

            <div className="card">
              <h3>🐓 Hens & Poultry</h3>
              <ul>
                <li><strong>Fever:</strong> Panadol, Flagyl, Brophen Syrup</li>
                <li><strong>Weakness:</strong> Jetpurp, Hepmarz Syrup</li>
                <li><strong>Lethargy:</strong> Vadline L Syrup</li>
                <li><strong>Not Breeding:</strong> Vitsol, Vital Grow, Fish liveroil in seeds mix</li>
                <li><strong>Digestive Issues:</strong> Flagyl, Lasowit, Herbal Girt, Liver cin</li>
                <li><strong>Viral Infection:</strong> Telforsin, Enrosol S, Tetracycline, Teylodox </li>
                <li><strong>Stress:</strong> Symo Stress, Symdecks</li>
                <li><strong>Mites:</strong> Virkon S, Ticks Killer, Dettol Water Spray</li>
                <li><strong>Aseel Hen Special Treatment:</strong> Contact us for specialized care</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
