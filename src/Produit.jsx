import './Produit.scss';

export default function Produit(props) {
    console.log("Les propriétés du produit : ", props);

    return (
        <article className='Produit'>
          <img src="" alt="" />
          <span className='nom'>{props.nom}</span>
          <span className="prix">{props.prix}</span>
          <button>Ajouter au panier</button>
        </article>
    );
}