export default function Home() {
  return (
    <div className="home-bg">
      <section className="hero">
        <h1 data-page-type="🏠">Welcome to Birds Info</h1>
        <p>Your complete guide to bird care, breeding, and medicine</p>
      </section>

      <div className="card-grid">
        <div className="card">
          <h3>🦜 Love Your Birds</h3>
          <p>
            Birds are intelligent, social creatures that form deep bonds with their owners. 
            Understanding their behavior, providing proper nutrition, and creating a stimulating 
            environment are key to their happiness and well-being.
          </p>
        </div>

        <div className="card">
          <h3>🏥 Bird Care Essentials</h3>
          <p>
            Proper bird care includes regular health checkups, balanced diet, clean water, 
            appropriate cage size, mental stimulation, and social interaction. Prevention 
            is always better than treatment.
          </p>
        </div>

        <div className="card">
          <h3>🥚 Breeding & Reproduction</h3>
          <p>
            Successful bird breeding requires understanding species-specific needs, proper 
            nesting conditions, nutrition during breeding season, and knowledge of genetics 
            for healthy offspring.
          </p>
        </div>

        <div className="card">
          <h3>💊 Health & Medicine</h3>
          <p>
            Learn to recognize signs of illness, understand common bird diseases, know when 
            to consult an avian veterinarian, and maintain proper hygiene to prevent health issues.
          </p>
        </div>
      </div>

      <div className="info-section">
        <h2>Why Birds Make Amazing Companions</h2>
        <p>
          Birds have been companions to humans for thousands of years. Their intelligence, 
          beauty, and unique personalities make them wonderful pets. From the smallest finch 
          to the largest parrot, each species brings its own charm and requirements.
        </p>
        
        <h3>Benefits of Bird Ownership:</h3>
        <ul>
          <li>Intelligent and interactive companions</li>
          <li>Beautiful songs and vocalizations</li>
          <li>Long lifespan with proper care</li>
          <li>Relatively low maintenance compared to other pets</li>
          <li>Can learn tricks and even speak (some species)</li>
          <li>Therapeutic presence and stress relief</li>
        </ul>

        <h3>Getting Started:</h3>
        <p>
          Before bringing a bird home, research the specific needs of your chosen species. 
          Consider factors like lifespan, noise level, space requirements, and social needs. 
          Explore our dedicated sections for detailed information about different bird types.
        </p>
      </div>
    </div>
  )
}