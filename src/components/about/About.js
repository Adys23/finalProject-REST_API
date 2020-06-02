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
					that you are interested in this project and in getting to know me
					better.
				</div>
				<h2>About me</h2>
				<div>
					My name is Adrian Wasilewski and I am {myAge} years old programming
					enthusiast. I started my jurney few years back with some internet
					courses about html, css and vanilla javaScript. Later on I started to
					learn React. In summer 2019 I finished <i>.CodersCamp</i> course and
					later that year I started post-graduate front-end developer studies on
					WSB University.
				</div>
				<h2>About this project</h2>
				<div>
					I joined Fantasy Premier League community with the start of season
					2016/2017 thanks to my colleagues from work and since that time I
					adore this game and have lots of fun with it. As I am a football
					statistics maniac, what I missed the most was a tool for player
					comparison and more connection between overall teams statistics and
					players performance. None of the existing sites satisfied my needs so
					when I started to learn programming by myself, that was my first idea
					for an application. It currently has only basic functionalities, but
					it is still work in progress and I hope, that I will soon develop it
					into full spectrum statistical tool, which will help lots of players
					(including me ;) ).
				</div>
				<h2>Side note</h2>
				<div>
					You are more than welcome to leave your comments / ideas / opinions
					about this project through the <a href='/contact'>Contact</a>{' '}
					functionality. I will try as much as I could to improve this app and
					all help from your side will be much appreciated.
				</div>
			</div>
		</Aux>
	);
};

export default about;
