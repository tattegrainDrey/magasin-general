import './Produit.scss';

export default function Produit({panier, setPanier, nom, prix, id}) {

    function ajouterPanier() {
      //il faut obtenier une copie conforme du panier (clone)
      let clonePanier = JSON.parse(JSON.stringify(panier));
      //let clonePanier = {... props.panier}
      //let clonePanier = Object.assign({}, props.panier);
      //ajouter au panier
     if(clonePanier[id]){
      clonePanier[id].qte++
     }
     else {
      clonePanier[id] = { prix:prix, qte:1};
     }
      //donner à setPanier la nouvelle valeur du panier :
      setPanier(clonePanier);
      }

    return (
        <article className='Produit'>
          <img src={'images-produits/'+ id +'.webp'} alt="nom" />
          <span className='nom'>{nom}</span>
          <span className="prix">{prix}</span>
          <button onClick={ajouterPanier}>Ajouter au panier</button>
        </article>
    );
}