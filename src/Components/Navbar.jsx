/* eslint-disable no-unused-vars */
import React from 'react'
import { useGlobalContext } from './utils/global.context';
import { Link } from 'react-router-dom'

const Navbar = () => {

  const { state, dispatch } = useGlobalContext();

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <nav>
      <Link to={`/`}>
        <h1>DH Odonto</h1>
      </Link>
      <ul>
        <li><Link to={`/`}>Home</Link></li>
        <li><Link to={`/contact`}>Contact </Link></li>
        <li><Link to={`/favs`}>Favs</Link></li>
        <div className="theme-toggle">
          {state.theme === 'light' ?
            <span className="theme-label">Light</span> : <span className="theme-label">Dark</span>}
          <label className="switch">
            <input
              type="checkbox"
              onChange={toggleTheme}
              checked={state.theme === 'dark'}
            />
            <span className="slider">
              {state.theme === 'light' ? '🌞' : '🌜'}
            </span>
          </label>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar