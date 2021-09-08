import React from 'react'
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail, HiPhone} from 'react-icons/hi';
import {IoIosPin} from 'react-icons/io';

export const Footer = () => {
  return (
    <div className="footer">
      <div className="grid">
        <div className="footer_summary">
          <h3>A propos</h3> 
          <p>Rento est une entreprise de location de voiture longue durée. Notre large choix de véhicule et notre organisation nous permet de fournir un service sur mesure.</p>
          <ul className="socials">
            <li><FaFacebookSquare /></li>
            <li><FaTwitterSquare /></li>
            <li><FaInstagramSquare /></li>
            <li><FaLinkedin /></li>
          </ul>
        </div>
        <ul className="footer_links">
          <li className="link">Accueil</li>
          <li className="link">Qui sommes-nous ?</li>
          <li className="link">Contact</li>
        </ul>
        <ul className="footer_contact">
          <li><HiOutlineMail /> contact@rento.com</li>
          <li><HiPhone /> (+33) 4 47 92 15 11</li>
          <li>
            <IoIosPin /> 
            <p>
              42, boulevard de l'été <br/>
              75000, Paris
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}
