import React from 'react';
import Aux from '../../hoc/Auxiliary';

import classes from './Index.module.scss';

const index = (props) => (
	<Aux>
		<div className={classes.Container}>
			<div className={classes.HeaderFeatured}> </div>
			<div className={classes.FeaturedWrapper}>
				<div className={classes.title}>This is FPL Data</div>
				<div className={classes.column1}>
					<span className={classes.icon1}></span>
					<p>
						Find up-to-date statistics of players and teams to give you the full
						overview of their performace.
					</p>
				</div>
				<div className={classes.column2}>
					<span className={classes.icon2}></span>
					<p>
						Simplify your Fantasy Premier League choices! Make sure you do not
						miss any bargain!
					</p>
				</div>
				<div className={classes.column3}>
					<span className={classes.icon3}></span>
					<p>
						Dive deep into the broadest variety of information that you need tyo
						beat your opponents!
					</p>
				</div>
			</div>
		</div>
	</Aux>
);

export default index;
