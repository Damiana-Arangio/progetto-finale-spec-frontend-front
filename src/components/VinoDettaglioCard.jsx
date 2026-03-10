import { useEffect, useState } from "react";

function VinoDettaglioCard(props) {
    const {vino} = props;

    console.log("Vino ricevuto: ", vino);

    return(
        
        <article>

            <h2>
                {vino.category} {vino.type}
            </h2>

            <h1>
                {vino.title}
            </h1>

            <figure>
                <img src={vino.image} alt={vino.title} />
            </figure>

            <p className="vino-prezzo">
                {vino.price} €
            </p>

            <h3>Descrizione</h3>
            <p>{vino.description}</p>

            <h3>Regione</h3>
            <p>{vino.region}</p>

            <h3>Annata</h3>
            <p>{vino.year}</p>

            <h3>Vitigno</h3>
            <p>{vino.grape}</p>

            <h3>Gradazione</h3>
            <p>{vino.alcohol}%</p>

        </article>

    )
}

export default VinoDettaglioCard;