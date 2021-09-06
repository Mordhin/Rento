import React from "react";
import bronze from "../assets/bronze-medal.png";

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="cards">
        <div className="pricing-card">
          <div className="header silver">
            <div className="badge">
              <img src={bronze} />
            </div>
          </div>
          <h3>Forfait Occasionnel</h3>
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
          <div className="header gold">
            <div className="badge">
              <img src={bronze} />
            </div>
          </div>
          <h3>Forfait Occasionnel</h3>
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
          <div className="header bronze">
            <div className="badge">
              <img src={bronze} />
            </div>
          </div>
          <h3>Forfait Occasionnel</h3>
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
