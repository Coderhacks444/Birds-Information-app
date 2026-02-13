import React from 'react'
import { CardData } from '../data/content'

interface CardProps {
  data: CardData
}

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <div className="card">
      <h3>{data.title}</h3>
      {data.items.map((item, index) => (
        <p key={index}>
          {item.label && <strong>{item.label}: </strong>}
          {item.text}
        </p>
      ))}
    </div>
  )
}

export default Card
