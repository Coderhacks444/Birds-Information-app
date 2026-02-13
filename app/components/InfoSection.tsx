import React from 'react'
import { DetailSection } from '../data/content'

interface InfoSectionProps {
  data: DetailSection
}

const InfoSection: React.FC<InfoSectionProps> = ({ data }) => {
  return (
    <div className="info-section">
      <h2>{data.title}</h2>
      {data.description && <p>{data.description}</p>}

      {data.subsections.map((sub, index) => (
        <div key={index}>
          <h3>{sub.title}</h3>
          {sub.content && <p>{sub.content}</p>}
          {sub.list && (
            <ul>
              {sub.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  )
}

export default InfoSection
