import React from 'react'
import NavBlob from './NavBlob'

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li className="link">Accueil</li>
        <li className="link">Qui sommes-nous ?</li>
        <li className="link">Contact</li>
      </ul>
      <ul>
        <li className="link">Se connecter</li>
        <li className="signup">S'inscrire</li>
      </ul>
    </div>
  )
}

export default Navbar
