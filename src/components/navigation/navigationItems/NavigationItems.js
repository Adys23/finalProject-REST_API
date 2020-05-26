import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItems.module.scss';

const navigationItems = (props) => (
	<ul className={classes.NavigationItems} onClick={props.clicked}>
		<NavLink to='/' exact className={classes.NavLink}>
			Main Page
		</NavLink>
		<NavLink to='/players' activeClassName='active' className={classes.NavLink}>
			Players
		</NavLink>
		<NavLink to='/teams' activeClassName='active' className={classes.NavLink}>
			Teams
		</NavLink>
		<NavLink to='/about' activeClassName='active' className={classes.NavLink}>
			About
		</NavLink>
		<NavLink to='/contact' activeClassName='active' className={classes.NavLink}>
			Contact
		</NavLink>
	</ul>
);

export default navigationItems;
