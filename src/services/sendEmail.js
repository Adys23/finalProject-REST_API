export const sendEmail = (emailObject) => {
	const link = `mailto:wasilewski.adrian.64@gmail.com?cc=${emailObject.email}&subject=FPL Data web app feedback&body=${emailObject.text}`;
	window.location.href = link;
};
