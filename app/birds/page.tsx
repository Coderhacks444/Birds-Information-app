import { birdsContent } from '../data/content'
import Card from '../components/Card'
import InfoSection from '../components/InfoSection'

export default function Birds() {
  return (
    <div className="birds-bg">
      <h1 className="page-title" data-page-type={birdsContent.icon}>{birdsContent.title}</h1>

      <div className="card-grid">
        {birdsContent.cards.map((card, index) => (
          <Card key={card.title} data={card} />
        ))}
      </div>

      {birdsContent.details?.map((section, index) => (
        <InfoSection key={section.title} data={section} />
      ))}
    </div>
  )
}