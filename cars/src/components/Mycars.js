import React, { Component } from "react";
import Car from "./Cars";

class Mycars extends Component {
    render() {
        return (
            <div>
                <h1>Hello</h1>
                <Car />
            </div>
        )
    }
}

export default Mycars;

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