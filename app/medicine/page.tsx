import MedicalDisclaimer from '../components/MedicalDisclaimer'
import { medicineContent } from '../data/content'
import Card from '../components/Card'

export default function Medicine() {
  return (
    <div className="medicine-bg">
      <h1 className="page-title" data-page-type={medicineContent.icon}>{medicineContent.title}</h1>

      <div className="card-grid">
        {medicineContent.cards.map((card, index) => (
          <Card key={index} data={card} />
        ))}
      </div>

      <MedicalDisclaimer />
    </div>
  )
}

