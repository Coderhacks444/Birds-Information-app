import { finchesContent } from '../data/content'
import Card from '../components/Card'

export default function Finches() {
  return (
    <div className="finches-bg">
      <h1 className="page-title" data-page-type={finchesContent.icon}>{finchesContent.title}</h1>

      <div className="card-grid">
        {finchesContent.cards.map((card, index) => (
          <Card key={card.title} data={card} />
        ))}
      </div>
    </div>
  )
}