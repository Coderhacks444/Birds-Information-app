import { hensContent } from '../data/content'
import Card from '../components/Card'

export default function Hens() {
  return (
    <div className="hens-bg">
      <h1 className="page-title" data-page-type={hensContent.icon}>{hensContent.title}</h1>

      <div className="card-grid">
        {hensContent.cards.map((card, index) => (
          <Card key={card.title} data={card} />
        ))}
      </div>
    </div>
  )
}