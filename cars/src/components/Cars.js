import React from 'react';

const Car = ({children, color}) => {

    //Intégration d'une condition :
const colorInfo = color ? (<p>Couleur : { color }</p>) : (<p>Couleur : Néant</p>)

    if (children) {
        return (
            <div style={ {backgroundColor: 'pink', width: '400px', padding:'10px', margin: '5px auto'} }>
                <p>Marque : { children } </p>
                { colorInfo }
            </div>
        )
    } else {
        return (
        <div style={ {backgroundColor: 'pink', width: '400px', padding:'10px', margin: '5px auto'} }>
            <p>Pas de data !</p>
        </div>
        )
   }
}

export default Car;

//test de CSS dans le JSX, bien évidemment on ne fait pas ça

/* Méthode destructuring qui donne le même résultat
const Car = ({children, color}) => {
    return (
        <div style={ {backgroundColor: 'pink', width: '400px', padding:'10px', margin: '5px auto'} }>
            <p>Marque : { children } </p>
            <p>Couleur : { color } </p>
        </div>
    )
}
export default Car;

Méthode avec les props 
const Car = (props) => {

    console.log(props) // et props.children permmettra en javascript de récupérer et afficher les props à l'écran

    return (
        <div style={ {backgroundColor: 'pink', width: '400px', padding:'10px', margin: '5px auto'} }>
            <p>Marque : { props.children } </p>
            <p>Couleur : { props.color } </p>
        </div>
    )
}

export default Car;
*/

/** Option 2 pour la condition retournant la couleur, ce sont des alternatives au if/else que l'on ne peut utiliser dans le JSX
 return (
        <div>
            <p>Marque : { children } </p>
            { color ? <p>Couleur : {color}</p> : <p>Couleur : Néant</p> }
        </div>
    )
    Option 3 :
 return (
        <div>
            <p>Marque : { children } </p>
           <p>Couleur : { color ? color : "Néant" } </p>
        </div>
    )
*/

/*
Autre possibilité de syntaxe pour le return :
const colorInfo = color ? (<p>Couleur : { color }</p>) : (<p>Couleur : Néant</p>)

    return children ? (
        <div>
            <p>Marque : { children } </p>
            { colorInfo }
        </div>
    ) : <p>Pas de data !</p>
}

export default Car;
*/