import { homeContent } from './data/content'
import Card from './components/Card'
import InfoSection from './components/InfoSection'

export default function Home() {
  return (
    <div className="home-bg">
      <section className="hero">
        <h1 className="page-title" data-page-type={homeContent.icon} aria-label={homeContent.title}>{homeContent.title}</h1>
        <p>Your complete guide to bird care, breeding, and medicine</p>
      </section>

      <div className="card-grid">
        {homeContent.cards.map((card) => (
          <Card key={card.title} data={card} />
        ))}
      </div>

      {homeContent.details?.map((section) => (
        <InfoSection key={section.title} data={section} />
      ))}
    </div>
  )
}