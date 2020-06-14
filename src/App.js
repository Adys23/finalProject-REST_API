import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

import Aux from './hoc/Auxiliary';
import Toolbar from './components/navigation/toolbar/Toolbar';
import SideDrawer from './components/navigation/sideDrawer/SideDrawer';
import Footer from './components/footer/Footer';
import Index from './components/main/Index';
import Players from './components/players/Players';
import Teams from './components/teams/Teams';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import PageNotFound from './components/pageNF/PageNotFound';

function App() {
	const [sideDrawerVisible, sideDrawerToggler] = useState(false);

	return (
		<Aux>
			<Router>
				<Aux>
					<Toolbar
						drawerTogglerClicked={() =>
							sideDrawerToggler((sideDrawerVisible) => !sideDrawerVisible)
						}
					/>
					<SideDrawer
						showing={sideDrawerVisible}
						closing={() => sideDrawerToggler(false)}
					/>
					<Switch>
						<Route exact path='/finalProject-REST_API' component={Index} />
						<Route path='/finalProject-REST_API/players' component={Players} />
						<Route path='/finalProject-REST_API/teams' component={Teams} />
						<Route path='/finalProject-REST_API/about' component={About} />
						<Route path='/finalProject-REST_API/contact' component={Contact} />
						<Route component={PageNotFound} />
					</Switch>
				</Aux>
			</Router>
			<Footer />
		</Aux>
	);
}

export default App;
