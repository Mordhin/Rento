import React from "react";
import choice from "../assets/choice.svg";
import towing from "../assets/towing.svg";
import sell from "../assets/sell.svg";
import car from "../assets/car.svg";

const HowItWorks = () => {
  return (
    <div className="how-it-works">
      <div className="card">
        <h2>Comment ça marche ?</h2>
        <div className="grid">
          <div className="section">
            <img src={sell} alt="" />
            <p>
              <span className="emphase">Revendez votre véhicule.</span>
              <br />
              Nous le rachetons au prix de l'Argus.
              Réinvestissez ensuite cet argent dans l'une de nos offres de
              location.
            </p>
          </div>
          <div className="section">
            <img src={choice} alt="" />
            <p>
              <span className="emphase">Sélectionner le véhicule</span>
              <br />
              qui vous convient parmi un large choix de sélection.
            </p>
          </div>
          <div className="section">
            <img src={towing} alt="" />
            <p>
              <span className="emphase">Nous vous amenons votre voiture</span>
              <br />
              où que vous soyez et quand vous le
              souhaitez. De même pour l'achat initial de votre véhicule.
            </p>
          </div>
          <div className="section">
            <img src={car} alt="" />
            <p>
              <span className="emphase">N'hésitez pas à changer</span>
              <br />
              de véhicule selon vos envies via notre application. Choisissez,
              nous nous chargeons du reste !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
