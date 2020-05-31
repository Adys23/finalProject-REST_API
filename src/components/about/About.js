import React from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './About.module.scss';

const about = () => {
	const calculateAge = () => {
		const birthday = new Date(1992, 2, 25);
		var ageDifMs = Date.now() - birthday.getTime();
		var ageDate = new Date(ageDifMs);
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	};

	const myAge = calculateAge();

	return (
		<Aux>
			<div className={classes.Container}>
				<h2>Introduction</h2>
				<div>
					First of all I want to thank you for visiting my web app! I am glad
					that you are interested in getting to know me better.
				</div>
				<h2>About me</h2>
				<div>
					My name is Adrian Wasilewski and I am {myAge} years old programming
					enthusiast. I started my jurney few years back with some internet
					courses about html, css and vanilla javaScript. Later on I started to
					learn React.
				</div>
			</div>
		</Aux>
	);
};

export default about;
