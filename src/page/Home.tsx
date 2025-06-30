import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
        <Link to="/sme-dashboard">Dashboard</Link>
    </div>
  )
}

export default Home