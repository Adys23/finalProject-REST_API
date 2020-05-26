import React from 'react';

import classes from './DrawerToggler.module.scss';

const drawerToggler = (props) => (
	<div className={classes.DrawerToggler} onClick={props.clicked}>
		<div></div>
		<div></div>
		<div></div>
	</div>
);

export default drawerToggler;
