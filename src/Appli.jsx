import { useEffect, useState } from 'react';
import './Appli.scss';
import Entete from './Entete';
import ListeProduits from './ListeProduits';
import Pied2page from './Pied2page';

function Appli() {
  //HOOK usestate
  //je veux maintenir le panier dans un objet js surveillé par react
  // avec une fonction d'initialisation
  const [panier,setPanier] = useState(
    () => JSON.parse(localStorage.getItem('panier-ls') || {})
    );

  const [compteur, setCompteur] = useState(0);

  useEffect(
    () => {
      localStorage.setItem('panier-ls', JSON.stringify(panier));
      console.log("Le panier d'achat a été sauvegardé dans localStorage") ;
    }, [panier, compteur]
    ); 
    

 /* ou
  const etatPanier = useState({});
  let panier = etatPanier[0];
  let setPanier = etatPanier[1];
  */
  return (
    <div className="Appli">
      <Entete panier={panier} />
      <button onClick={() => setCompteur(compteur + 1)}>Nombre de clics ({compteur})</button>
      <ListeProduits panier={panier} setPanier={setPanier}/>
      <Pied2page/>
    </div>
  );
}

export default Appli;
