import React, { useState } from 'react';

import classes from './Contact.module.scss';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import Aux from '../../hoc/Auxiliary';
import { sendEmail } from '../../services/sendEmail';

const Contact = () => {
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const emailChangeHandler = (event) => {
		setEmail(event.target.value.toLowerCase());
	};

	const messageChangeHandler = (event) => {
		setMessage(event.target.value);
	};

	const onSubmit = (event) => {
		const emailObject = {
			email: email,
			text: message,
		};
		sendEmail(emailObject);
	};

	return (
		<Aux>
			<h2>Contact form</h2>
			<div className={classes.Container}>
				<form className={classes.ContactForm} onSubmit={onSubmit}>
					<TextField
						id='emailInput'
						label='E-mail'
						variant='outlined'
						style={{ margin: 8 }}
						onChange={emailChangeHandler}
					/>

					<TextField
						id='textInput'
						label='Text'
						variant='outlined'
						style={{ margin: 8 }}
						multiline={true}
						onChange={messageChangeHandler}
					/>

					<Button
						variant='contained'
						color='primary'
						style={{ margin: 8, maxWidth: '240px' }}
						type='submit'
					>
						Submit
					</Button>
				</form>
			</div>
		</Aux>
	);
};

export default Contact;
