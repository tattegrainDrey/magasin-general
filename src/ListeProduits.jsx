import Produit from "./Produit";
import produits from './data/produits.json';

export default function ListeProduits() {

    console.log("Les produits : ", produits);

    // Pas la "manière React de coder"
    /*
    let composantsProduit = [];
    for(let prd of produits) {
      composantsProduit.push(<Produit nom={prd.nom} prix={prd.prix}/>);
    }
    */

    // produits.map(function(prd) {
    //   return console.log('Produit : ', prd.nom);
      
    // });

    return(
      <section>
        <h2>Liste des produits</h2>
        {
          produits.map(function(prd) {
            return <Produit nom={prd.nom} prix={prd.prix}/>
          })
        }
      </section>
    );
}