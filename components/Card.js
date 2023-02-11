import React from 'react'

const Card = ({ thimbnail }) => {
  
    
  return <img className='card' src={thimbnail.url} alt={thimbnail.title} />
}

export default Card