import React from 'react'

// CSS
import '../index.css'

// Components
import CodeLogo from './codeLogo'

const header = props => {
  return (
    <nav className="navbar navbar-expand navbar-custom navbar-dark mb-5 shadow">
      <a className="navbar-brand" href="#">
        <CodeLogo>{'<'}</CodeLogo> Ismar <CodeLogo>{'/>'}</CodeLogo>
      </a>
      
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a href="#" className="nav-link">Home</a>
        </li>
        <li className="nav-item dropdown">
          <a href="#" className="nav-link dropdown-toggle" id="navbarDropdown"
            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Contact
          </a>

          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a href="https://github.com/ismar1"  target="_blank" className="dropdown-item">Github</a>
            <a href="https://trello.com/ismar3531"  target="_blank" className="dropdown-item">Trello</a>
            <div className="dropdown-divider"></div>
            <a href="https://fb.com/ismar3531" target="_blank" className="dropdown-item">Facebook</a>
            <a href="https://www.instagram.com/ismarsantos_"  target="_blank" className="dropdown-item">Instagram</a>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default header
