import React from 'react'
import { Link } from 'react-router-dom'

function Word(props) {
  const { id, traditional, simplified, pinyin, english } = props

  return (
    <div>
      <Link to={`/results/${id}`}>
        {title}
      </Link>
      <p>{created_date}</p>
    </div>
  )
}

export default Word