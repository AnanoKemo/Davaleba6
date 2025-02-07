import React from 'react'
import { useLocation } from 'react-router-dom'
export default function footer() {
    const params = useParams()
    const location = useLocation()
    console.log(location, "location")
  return (
    <div className="footer">footer</div>
  )
}
