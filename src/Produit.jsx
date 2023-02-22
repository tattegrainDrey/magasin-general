import Badge from '@mui/material/Badge';
import './Produit.scss';

export default function Produit({panier, setPanier, nom, prix, id}) {

    function ajouterPanier() {
      //il faut obtenier une copie conforme du panier (clone)
      //let clonePanier = JSON.parse(JSON.stringify(panier));
      //let clonePanier = {... props.panier}
      let clonePanier = Object.assign({}, panier);
      //ajouter au panier
     if(clonePanier[id]){
      clonePanier[id].qte++
     }
     else {
      clonePanier[id] = { prix:prix, qte:1};
     }
      //donner à setPanier la nouvelle valeur du panier :
      setPanier(clonePanier);

      //Le panier a été modifié donc on va sauvegarder son état dans un objet JS surveillé par REACT
      //window.localStorage.setItem('panier-ls', JSON.stringify(clonePanier));
      }

    return (
        <article className='Produit'>
          <img src={'images-produits/'+ id +'.webp'} alt="nom" />
          <span className='nom'>{nom}</span>
          <span className="prix">{prix}</span>
          <Badge color='success' badgeContent={(panier[id]) ? panier[id].qte : 0}>
            <button onClick={ajouterPanier}>Ajouter au panier</button>
          </Badge>
        </article>
    );
}