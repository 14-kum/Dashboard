import React from 'react'
import { Link } from 'react-router-dom'

function Products() {
  return (
    <div><p>Products</p>
        <Link to ="/" className='underline'>go to Dashboard</Link>

    </div>
  )
}

export default Products