import './ListeProduits.scss'
import Produit from "./Produit";
import produits from './data/produits.json';

export default function ListeProduits(props) {

   //console.log("Les produits : ", produits);

    return(
      <section className='ListeProduits'>
        <h2>Liste des produits</h2>
        <section className="produits">
        {
          produits.map(
            function(prd) {
            return <Produit panier={props.panier} setPanier={props.setPanier} key={prd.id} nom={prd.nom} prix={prd.prix} id={prd.id}/>
          }
          )
        }
        </section>
      </section>
    );
}