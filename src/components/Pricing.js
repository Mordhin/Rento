import React from "react";
import bronze from "../assets/bronze-medal.png";
import silver from "../assets/silver-medal.png";
import gold from "../assets/gold-medal.png";

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="cards">
        <div className="pricing-card">
          <div className="badge">
            <img src={silver} alt="silver medal"/>
          </div>
          <h3>Forfait Pro</h3>
          <div className="price">
            <div>300€</div>
            <div>par mois</div>
          </div>
          <ul>
            <li>Accès à tout type de véhicule</li>
            <li>Accès aux catégories A, B et C</li>
            <li>Priorité haute sur l'échange</li>
          </ul>
          <button className="bronze">Je m'inscris</button>
        </div>
        <div className="pricing-card">
          <div className="badge">
            <img src={gold} alt="gold medal"/>
          </div>
          <h3>Forfait Premium</h3>
          <div className="price">
            <div>600€</div>
            <div>par mois</div>
          </div>
          <ul>
            <li>Accès à tout type de véhicule</li>
            <li>Accès aux catégories A, B, C et D</li>
            <li>Priorité absolue sur l'échange</li>
          </ul>
          <button className="bronze">Je m'inscris</button>
        </div>
        <div className="pricing-card">
          <div className="badge">
            <img src={bronze} alt="bronze medal"/>
          </div>
          <h3>Forfait Casual</h3>
          <div className="price">
            <div>150€</div>
            <div>par mois</div>
          </div>
          <ul>
            <li>Accès à tout type de véhicule</li>
            <li>Accès aux catégories A et B</li>
            <li>Priorité normale sur l'échange</li>
          </ul>
          <button className="bronze">Je m'inscris</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
