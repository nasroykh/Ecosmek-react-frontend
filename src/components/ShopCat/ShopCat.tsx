import React from 'react';
import classes from './ShopCat.module.css';
import Aux from '../../hoc/Aux';
import Button from '../../elements/Button/Button';

const shopCat = () => {
	return(
		<Aux>
			<div className={classes.ShopTitles}>
				<div>
					<Button type="shopTitle">Parfums</Button>
					<Button type="shopTitle">Make-Up</Button>
					<Button type="shopTitle">Hygiène et Beauté</Button>
				</div>
				<div>
					<Button type="shopTitle">Afficher tout</Button>
				</div>
			</div>
		</Aux>
	);
}

export default shopCat;