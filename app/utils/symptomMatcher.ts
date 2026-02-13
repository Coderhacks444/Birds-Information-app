import medicines from '@/app/data/medicines.json'

type BirdType = 'bird' | 'finch' | 'hen'
type SymptomKey = keyof typeof medicines

const SYMPTOM_KEYWORDS: Record<SymptomKey, string[]> = {
  fever: ['fever', 'temperature', 'hot', 'heat', 'high temp', 'motionless'],
  weakness: ['weak', 'tired', 'not eating', "doesn't eat", 'anorexia'],
  lethargy: ['lazy', 'lethargic', 'inactive', 'sluggish'],
  breeding: ['not breed', 'no breed', 'infertile', 'unproductive', 'not eggs', 'not breeding', 'breed fast', 'quick breed', 'breeding', 'improve fertility'],
  digestion: ['digest', 'diarrhea', 'diarrhoea', 'droppings', 'constipation', 'stomach', 'gut', 'not digesting'],
  viral: ['viral', 'virus', 'infection', 'infected', 'disease', 'sick', 'ill'],
  stress: ['stress', 'anxious', 'nervous', 'agitated', 'uneasy', 'restless'],
  mites: ['mite', 'parasite', 'lice', 'tick', 'infestation', 'mange']
}

const BIRD_TYPE_KEYWORDS: Record<BirdType, string[]> = {
  finch: ['finch', 'java', 'canary', 'zebra', 'gouldian'],
  hen: ['hen', 'chicken', 'poultry', 'aseel', 'broiler', 'layer', 'coop'],
  bird: ['bird', 'parrot', 'parakeet', 'lovebirds', 'cockatiel', 'budgie', 'ringneck', 'macaw']
}

export function detectBirdType(question: string): BirdType {
  const lower = question.toLowerCase()
  if (BIRD_TYPE_KEYWORDS.finch.some(k => lower.includes(k))) return 'finch'
  if (BIRD_TYPE_KEYWORDS.hen.some(k => lower.includes(k))) return 'hen'
  return 'bird'
}

export function detectSymptom(question: string): SymptomKey | null {
  const lower = question.toLowerCase()
  for (const [symptom, keywords] of Object.entries(SYMPTOM_KEYWORDS)) {
    if (keywords.some(k => lower.includes(k))) {
      return symptom as SymptomKey
    }
  }
  return null
}

export function generateAnswer(question: string): string {
  const symptom = detectSymptom(question)
  const birdType = detectBirdType(question)

  if (!symptom) {
    return [
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

  // Safe navigation: check if data exists before accessing
  const treatment = medicines[symptom]?.[birdType]
  
  if (!treatment) {
    return [
      'Sorry, I don\'t have specific information for this combination.',
      '',
      'General Recommendations:',
      '• Isolate the bird in a warm, quiet environment',
      '• Provide fresh water and nutritious food',
      '• Monitor for any changes in behavior or appearance',
      '• Contact a veterinarian for professional diagnosis and treatment',
      '',
      'For more information, please contact us.'
    ].join('\n')
  }

  const lines = [
    treatment.title,
    '',
    'Common Medicines Used by Veterinarians:',
    ...treatment.medicines.map(m => `• ${m}`),
    '',
    'Care Instructions:',
    ...treatment.care.map(c => `• ${c}`),
    '',
    'IMPORTANT: Always consult a licensed veterinarian for proper diagnosis and dosage. This information is for educational purposes only.',
    'For more information, please contact us.'
  ]

  return lines.join('\n')
}
