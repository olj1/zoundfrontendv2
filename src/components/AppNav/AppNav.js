import React from 'react'
import { Link } from 'react-router-dom'


function AppNav(props) {

  
  console.log("props ", props)
  // {props.user ? <Link to={'/logout'} > LOGOUT </Link> : <Link to={'/login'} > LOGIN </Link>}
  return (
    <div>
      <nav>
        <b>
          {<Link to={"/search/:englishID"} > SEARCH  |</Link>}  
        </b>
      </nav>
    </div>
  )
}



export default AppNav