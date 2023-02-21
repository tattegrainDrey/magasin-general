import './PanierSommaire.scss';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

export default function PanierSommaire({panier}) {
    const infoPanier = calculerSommaire(panier)
    return(
        <div className="PanierSommaire">
            <input type="checkbox" id="cb-panier" />
            <label htmlFor="cb-panier">
                <Badge badgeContent={Object.values(panier).reduce((valInitiale,eltSuivant) => valInitiale + eltSuivant.qte, 0)} color="secondary" showZero>
                    <ShoppingCartIcon/>
                </Badge>
            </label>
			<section className="sommaire">
				<h3>Sommaire du panier</h3>
				<div><span>Articles différents</span><span>{infoPanier.artDiff}</span></div>
				<div><span>Articles totaux</span><span>{infoPanier.artTotal}</span></div>
				<div><span>Sous-Total</span><span>{infoPanier.sousTotal.toFixed(2)}</span></div>
				<div><span>Taxes</span><span>{infoPanier.taxes.toFixed(2)}</span></div>
				<div><span>Total</span><span>{infoPanier.total.toFixed(2)}</span></div>
			</section>
        </div>
    )
}

function calculerSommaire (objPanier) {
    let tabPanier = Object.values(objPanier); //pour sortir seulement la ligne 2 (les valeurs du tableau info)
    //definir un objet qui contiendra l'info du panier
    let info = {
        artDiff : tabPanier.length,
        artTotal :0,
        sousTotal :0,
        taxes :0,
        total :0
    }

    // calculer les valeurs

    info.artTotal = tabPanier.reduce((acc, suiv) => acc + suiv.qte, 0);
    info.sousTotal = tabPanier.reduce((acc, suiv) => acc + (suiv.qte * suiv.prix),0);
    info.taxes = info.sousTotal * 14.975 / 100;
    info.total = info.sousTotal + info.taxes;
    return info;
}