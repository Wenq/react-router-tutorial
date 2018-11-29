import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>Repos</h2>
        <ul>
          <li><Link to="/repos/reactjs/react-router11">React Router1</Link></li>
          <li><Link to="/repos/facebook/react22">React2</Link></li>
        </ul>
      </div>
    )
  }
})
