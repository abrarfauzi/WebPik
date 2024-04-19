import React from 'react'
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'

const Rating = ({ value, text }) => {
  return (
    <div className='rating' >
        <span>
            { value >= 1 ? <FaStar className='inline' /> : value >= 0.5 ? <FaStarHalfAlt className='inline'/> : <FaRegStar className='inline'/> }
            { value >= 2 ? <FaStar className='inline' /> : value >= 1.5 ? <FaStarHalfAlt className='inline'/> : <FaRegStar className='inline'/> }
            { value >= 3 ? <FaStar className='inline' /> : value >= 2.5 ? <FaStarHalfAlt className='inline'/> : <FaRegStar className='inline'/> }
            { value >= 4 ? <FaStar className='inline' /> : value >= 3.5 ? <FaStarHalfAlt className='inline'/> : <FaRegStar className='inline'/> }
            { value >= 5 ? <FaStar className='inline' /> : value >= 4.5 ? <FaStarHalfAlt className='inline'/> : <FaRegStar className='inline'/> }
        </span>
        <span className="rating-text">{ text && text }</span>
    </div>
  )
}

export default Rating