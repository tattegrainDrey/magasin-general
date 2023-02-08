import './Produit.scss';

export default function Produit(props) {

    let setPanier = props.setPanier;

    function ajouterPanier() {
      //il faut obtenier une copie conforme du panier (clone)
      let clonePanier = JSON.parse(JSON.stringify(props.panier));
      //let clonePanier = {... props.panier}
      //let clonePanier = Object.assign({}, props.panier);
      //ajouter au panier
     if(clonePanier[props.id]){
      clonePanier[props.id]++
     }
     else {
      clonePanier[props.id] = { prix:props.prix, qte:1};
     }
      //donner à setPanier la nouvelle valeur du panier :
      setPanier(clonePanier);
      }

    return (
        <article className='Produit'>
          <img src={'images-produits/'+ props.id +'.webp'} alt="props.nom" />
          <span className='nom'>{props.nom}</span>
          <span className="prix">{props.prix}</span>
          <button onClick={ajouterPanier}>Ajouter au panier</button>
        </article>
    );
}