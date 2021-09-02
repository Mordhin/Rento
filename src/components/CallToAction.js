import React from "react";
import call_img from "../assets/call_image.svg";

const CallToAction = () => {
  return (
    <div className="call-to-action">
      <div className="call">
        <h2>Conduisez autrement !</h2>
        <br />
        <p>
          Dès aujourd'hui, revendez votre ancienne voiture et passez chez Rento.
        </p>
        <p>
          Faites-vous plaisir parmi un large choix de véhicule, et changez le
          quand vous voulez.
        </p>
        <p>C'est simple, Rento se charge de tout !</p>
        <br />
        <button className="primary_btn">J'essaie !</button>
      </div>
      <img src={call_img} />
    </div>
  );
};

export default CallToAction;
