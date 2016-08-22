import React from 'react';
import { Router, Route } from 'react-router';
import App from './containers/App';
import Foo from './components/Foo';

/**
 * The React Routes for both the server and the client.
 */

module.exports = (
	<Router>
		<Route component={App}>
			<Route path="/" component={Foo}/>
		</Route>
	</Router>
);
