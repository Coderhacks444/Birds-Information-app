import MedicalDisclaimer from '../components/MedicalDisclaimer'

export default function Medicine() {
  return (
    <div className="medicine-bg">
      <h1 className="page-title" data-page-type="💉">Bird Medicine & Treatment Guide</h1>
      
      <div className="card-grid">
        <div className="card">
          <h3>🚨 Emergency First Aid</h3>
          <p><strong>Immediate Actions:</strong> Isolate sick bird in warm, quiet hospital cage (80-85°F), provide heat source (heating pad on low), ensure easy access to food/water</p>
          <p><strong>Emergency Kit:</strong> Electrolyte solution, saline solution, cotton swabs, small towels, thermometer, syringe for feeding, emergency vet contact</p>
          <p><strong>Critical Signs:</strong> Bleeding, difficulty breathing, seizures, inability to perch, severe lethargy - seek immediate veterinary care</p>
          <p><strong>Transport:</strong> Use small, dark, well-ventilated carrier, keep warm, minimize stress, call vet ahead of arrival</p>
        </div>

        <div className="card">
          <h3>🦠 Common Diseases & Treatments</h3>
          <p><strong>Respiratory Infections:</strong> Symptoms: wheezing, mouth breathing, discharge. Treatment: Antibiotics (Baytril, Doxycycline), increase humidity, improve ventilation</p>
          <p><strong>Mites/Lice:</strong> Symptoms: scratching, feather damage. Treatment: Ivermectin drops, spray treatments, thorough cage cleaning, treat all birds</p>
          <p><strong>Egg Binding:</strong> Symptoms: straining, sitting low. Treatment: Warm humid environment, calcium supplement, gentle massage, emergency vet if no improvement</p>
          <p><strong>Crop Stasis:</strong> Symptoms: crop not emptying, vomiting. Treatment: Withhold food, provide warmth, veterinary tube feeding may be needed</p>
        </div>
      </div>

      <div className="card-grid">
        <div className="card">
          <h3>💊 Finch-Specific Medicine</h3>
          <p><strong>Air Sac Mites:</strong> Common in Gouldians. Treatment: Ivermectin 0.02ml orally, repeat in 10 days, improve ventilation, reduce stress</p>
          <p><strong>Scaly Face/Leg Mites:</strong> Treatment: Ivermectin drops, petroleum jelly on affected areas, isolate infected birds</p>
          <p><strong>Coccidiosis:</strong> Symptoms: bloody droppings, lethargy. Treatment: Sulfadimethoxine in water, probiotics after treatment</p>
          <p><strong>Feather Plucking:</strong> Treatment: Increase humidity, provide foraging opportunities, check for parasites, reduce stress factors</p>
          <p><strong>Dosages:</strong> Finches 10-20g body weight - use pediatric dosing, always consult avian vet for proper medication amounts</p>
        </div>

        <div className="card">
          <h3>🐓 Chicken/Hen Medicine</h3>
          <p><strong>Bumblefoot:</strong> Treatment: Soak in Epsom salt, remove core, apply antibiotic ointment, bandage, oral antibiotics if severe</p>
          <p><strong>Respiratory Disease:</strong> Treatment: Tylosin, Oxytetracycline in water, improve ventilation, reduce ammonia levels</p>
          <p><strong>Worms:</strong> Treatment: Fenbendazole (Panacur) 1ml per kg body weight for 5 days, repeat in 10 days</p>
          <p><strong>Coccidiosis:</strong> Treatment: Amprolium (Corid) 9.6% solution, 2 tsp per gallon water for 5-7 days</p>
          <p><strong>Egg Binding:</strong> Treatment: Warm bath, calcium gluconate injection, lubrication, manual extraction by vet if needed</p>
        </div>
      </div>

      <div className="card-grid">
        <div className="card">
          <h3>🦜 Large Bird Medicine</h3>
          <p><strong>Psittacine Beak & Feather Disease:</strong> No cure - supportive care, immune support, quarantine, prevent secondary infections</p>
          <p><strong>Aspergillosis:</strong> Treatment: Itraconazole 10mg/kg twice daily, nebulization therapy, improve air quality</p>
          <p><strong>Feather Plucking:</strong> Treatment: Behavioral modification, environmental enrichment, anti-anxiety medications if needed</p>
          <p><strong>Heavy Metal Poisoning:</strong> Treatment: Chelation therapy (EDTA, DMSA), supportive care, remove source of contamination</p>
          <p><strong>Vitamin A Deficiency:</strong> Treatment: Vitamin A injection, improve diet with orange/yellow vegetables, liver support</p>
        </div>

        <div className="card">
          <h3>🏥 Medication Administration</h3>
          <p><strong>Oral Medications:</strong> Use syringe, aim for right side of beak, give slowly to prevent aspiration, follow with small amount of water</p>
          <p><strong>Water Medications:</strong> Change daily, use distilled water, calculate dosage based on daily water consumption</p>
          <p><strong>Topical Treatments:</strong> Clean area first, apply thin layer, prevent bird from preening treated area</p>
          <p><strong>Injection Sites:</strong> Breast muscle for IM injections, under wing for subcutaneous - veterinary administration recommended</p>
          <p><strong>Dosage Calculations:</strong> Always weigh bird first, use gram scale, calculate per kg body weight, never guess dosages</p>
        </div>
      </div>

      <div className="card-grid">
        <div className="card">
          <h3>🌿 Natural Remedies & Support</h3>
          <p><strong>Probiotics:</strong> After antibiotic treatment, use avian-specific probiotics to restore gut flora</p>
          <p><strong>Apple Cider Vinegar:</strong> 1 tsp per gallon water, 2-3 days per week for digestive health</p>
          <p><strong>Chamomile Tea:</strong> Cooled tea for stress relief, can be added to drinking water</p>
          <p><strong>Honey:</strong> Small amounts for energy during illness, has antibacterial properties</p>
          <p><strong>Vitamin Supplements:</strong> Use during stress, illness recovery, breeding season - follow manufacturer guidelines</p>
        </div>

        <div className="card">
          <h3>⚠️ Important Warnings</h3>
          <p><strong>Never Use:</strong> Human medications, chocolate, avocado, caffeine, alcohol, salt, garlic, onions - all toxic to birds</p>
          <p><strong>Veterinary Care:</strong> Always consult avian veterinarian for serious conditions, proper diagnosis essential</p>
          <p><strong>Quarantine:</strong> Isolate sick birds immediately, disinfect hands/equipment between birds</p>
          <p><strong>Medication Storage:</strong> Keep refrigerated if required, check expiration dates, use proper dosing equipment</p>
          <p><strong>Record Keeping:</strong> Document symptoms, treatments, responses, share with veterinarian for better care</p>
        </div>
      </div>

      <div className="card-grid">
        <div className="card">
          <h3>📋 Treatment Protocols</h3>
          <p><strong>Day 1-3:</strong> Isolate, provide warmth, assess condition, start supportive care, contact veterinarian</p>
          <p><strong>Day 4-7:</strong> Begin specific treatment, monitor closely, adjust temperature/humidity as needed</p>
          <p><strong>Day 8-14:</strong> Continue treatment, watch for improvement, maintain detailed records</p>
          <p><strong>Recovery:</strong> Gradual return to normal housing, continue monitoring, complete full treatment course</p>
          <p><strong>Prevention:</strong> Regular health checks, proper nutrition, clean environment, stress reduction</p>
        </div>

        <div className="card">
          <h3>📞 When to Call Vet</h3>
          <p><strong>Immediate:</strong> Bleeding, seizures, inability to breathe, severe trauma, poisoning suspected</p>
          <p><strong>Same Day:</strong> Not eating 24+ hours, difficulty breathing, egg binding, severe lethargy</p>
          <p><strong>Within 48 Hours:</strong> Changes in droppings, loss of appetite, behavioral changes, minor injuries</p>
          <p><strong>Routine:</strong> Annual checkups, pre-breeding exams, fecal testing, nail/beak trimming</p>
          <p><strong>Emergency Contacts:</strong> Keep 24-hour emergency vet numbers, know location of nearest avian specialist</p>
        </div>
      </div>

      <MedicalDisclaimer />
    </div>
  )
}
