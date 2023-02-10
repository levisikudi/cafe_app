import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <nav>
        <Link to="/order">Order History</Link>
        &nbsp; | &nbsp;
        <Link to="/order/new">New Order</Link>
    </nav>
  )
}

export default Nav