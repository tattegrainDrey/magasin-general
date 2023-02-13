import { useState } from 'react';
import './Appli.scss';
import Entete from './Entete';
import ListeProduits from './ListeProduits';
import Pied2page from './Pied2page';

function Appli() {
  //HOOK usestate
  //je veux maintenir le panier dans un objet js surveillé par react
  const [panier,setPanier] = useState({});
 /* ou
  const etatPanier = useState({});
  let panier = etatPanier[0];
  let setPanier = etatPanier[1];
  */
  return (
    <div className="Appli">
      <Entete panier={panier} />
      <ListeProduits panier={panier} setPanier={setPanier}/>
      <Pied2page/>
    </div>
  );
}

export default Appli;
