import React, { Component } from "react";
import Car from "./Cars";

class Mycars extends Component {

    render() {
        console.log(this);
        return (
            <div className="cars">
                <h1>{this.props.title}</h1>
                <Car color="red">Ford</Car>
                <Car color="">Mercedes</Car>
                <Car color="green"></Car>
            </div>
        )
    }
}

export default Mycars;

// ici codage des voitures en dur, mais la logique serait d'utiliser map ! avec les </Car>

// Récupération de l'état du state se trouvant dans l'App grâce à this.props.title


/* Syntaxe avec plusieurs info pour retourner des elements :
class Mycars extends Component {
    render() {
        return (
            <div>
                <h1>Hello</h1>
                <p>Ceci est un paragraphe</p>
            </div>
        )
    }
}
*/

/*Syntaxe avec une seule info :
class Mycars extends Component {
    render() {
        return <h1>Hello</h1>
    }
}
*/