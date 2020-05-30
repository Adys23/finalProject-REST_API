import React from 'react';

import classes from './Footer.module.scss';

const footer = (props) => (
	<div className={classes.Footer}>
		<div>Live data downloaded from official FPL API.</div>
		<div>
			Have you found this site interesting? You have some questions or want to
			leave your opinion? Use Contact tab.
		</div>
		<div className={classes.Copyrights}>Copyrights by Adrian Wasilewski</div>
	</div>
);

export default footer;
