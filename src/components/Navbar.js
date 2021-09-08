import React, { useState } from 'react'
import logo from '../assets/logo.png'
import {GoThreeBars} from 'react-icons/go';
import { useWindowDimensions } from '../hooks/useWindowDimensions';

const Navbar = () => {
  const {width} = useWindowDimensions();
  const [scroll, setScroll] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const checkScroll = () => {
    if (!scroll && window.pageYOffset > 1) {
      setScroll(true);
    } else if (scroll && window.pageYOffset <= 1) {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", checkScroll);

  const toggleDisabled = () => {
    setDisabled(!disabled);
  }

  return (
    <nav className={`navbar ${scroll ? 'scroll' : ''}`}>
      <div className="title">
        <img src={logo} alt="rento logo"></img>
        <h1>Rento</h1>
      </div>
      {width >= 1000 && (
        <div className="menu">
          <ul className="">
            <li className="link">Accueil</li>
            <li className="link">Qui sommes-nous ?</li>
            <li className="link">Contact</li>
          </ul>
          <ul>
            <li className="link">Se connecter</li>
            <li className="primary_btn">S'inscrire</li>
          </ul>
        </div>
      )}
      {width < 1000 && (
        <div className="mini_menu">
          <div className="bars" onClick={() => toggleDisabled()}><GoThreeBars /></div>
          <ul className={`dropdown ${disabled ? "disabled" : ""}`}>
            <li>Accueil</li>
            <li>Qui sommes-nous ?</li>
            <li>Contact</li>
            <li>Se connecter</li>
            <li className="secondary_btn">S'inscrire</li>
          </ul>
        </div>
        
      )}
      
    </nav>
  )
}

export default Navbar
