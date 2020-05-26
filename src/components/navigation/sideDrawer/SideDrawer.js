import React from 'react';

import Aux from '../../../hoc/Auxiliary';
import Logo from '../../logo/Logo';
import NavigationItems from '../navigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

import Classes from './SideDrawer.module.scss';

const sideDrawer = (props) => {
	let attachedClasses = [Classes.SideDrawer, Classes.Close];
	if (props.showing) {
		attachedClasses = [Classes.SideDrawer, Classes.Open];
	}
	return (
		<Aux>
			<Backdrop show={props.showing} clicked={props.closing} />
			<div className={attachedClasses.join(' ')}>
				<Logo height='9%' margBottom='32px' />
				<nav>
					<NavigationItems clicked={props.closing} />
				</nav>
			</div>
		</Aux>
	);
};

export default sideDrawer;
