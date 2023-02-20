import './Entete.scss';
import PanierSommaire from './PanierSommaire.jsx';

function Entete({panier}) {
	//Calcul du nombre d'articles dans le panier
	//Avec une boucles (instructions)
	/*
	let nbArticles = 0; //Object.values(panier).length;
	for(let i = 0; i < tabValPan; i++) {
		nbArticles +=tabValPan[i].qte

	}
	*/
	//Avec la methode reduce() des tableaux (une seule expression)
	return(
		<header className='Entete'>
			<h1>Magasin Général</h1>
			<nav>
				<span>Produits</span>
				<span>À propos</span>
				<PanierSommaire panier={panier}/>
			</nav>
		</header>
	)
}

export default Entete;