import React from 'react';

import Classes from './Toolbar.module.scss';

import Logo from '../../logo/Logo';
import NavigationItems from '../navigationItems/NavigationItems';
import DrawerToggler from '../sideDrawer/drawerToggler/DrawerToggler';

const toolbar = (props) => (
	<header className={Classes.Toolbar}>
		<DrawerToggler clicked={props.drawerTogglerClicked} />
		<Logo height='80%' />
		<nav className={Classes.DesktopOnly}>
			<NavigationItems />
		</nav>{' '}
	</header>
);

export default toolbar;
