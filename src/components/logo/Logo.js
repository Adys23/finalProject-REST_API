import React from 'react';

import logoImage from '../../assets/images/fpl-logo.png';
import classes from './Logo.module.scss';

const logo = (props) => (
	<div
		className={classes.Logo}
		style={{
			height: props.height,
			marginBottom: props.margBottom,
		}}
	>
		<img src={logoImage} alt='Burger Logo' />
	</div>
);

export default logo;
