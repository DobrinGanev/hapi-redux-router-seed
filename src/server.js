import babelPolyfill from "babel-polyfill";
import { Server } from "hapi";
import h2o2 from "h2o2";
import inert from "inert";
import React from "react";
import ReactDOM from "react-dom/server";
import { RouterContext, match } from "react-router";
import configureStore from "./store.js";
import App from './containers/App';
import { Provider } from 'react-redux';
import routesContainer from "./routes";
import url from "url";
let routes = routesContainer;

/**
 * Create Redux store, and get intitial state.
 */
const store = configureStore();
const initialState = store.getState();
console.log(initialState)
/**
 * Start Hapi server
 */
var envset = {
  production: process.env.NODE_ENV === 'production'
};

const hostname = envset.production ? (process.env.HOSTNAME || process['env'].HOSTNAME) : "localhost";
var port = envset.production ? (process.env.PORT || process['env'].PORT) : 8000
const server = new Server();

server.connection({host: hostname, port: port});

server.register(
	[
		h2o2,
		inert,
		// WebpackPlugin
	],
	(err) => {
	if (err) {
		throw err;
	}

	server.start(() => {
		console.info("==> ✅  Server is listening");
		console.info("==> 🌎  Go to " + server.info.uri.toLowerCase());
	});
});

/**
 * Attempt to serve static requests from the public folder.
 */
server.route({
	method:  "GET",
	path:    "/{params*}",
	handler: {
		file: (request) => "static" + request.path
	}
});

server.route({
    method: 'GET',
    path:'/hello',
    handler: function (request, reply) {
       var data = {
         message: "hello world from server"
       }
        return reply(data);
    }
});
/**
 * Catch dynamic requests here to fire-up React Router.
 */
server.ext("onPreResponse", (request, reply) => {
	if (typeof request.response.statusCode !== "undefined") {
    return reply.continue();
  }

  match({routes, location: request.path}, (error, redirectLocation, renderProps) => {
    if (redirectLocation) {
      reply.redirect(redirectLocation.pathname + redirectLocation.search);
      return;
    }
    if (error || !renderProps) {
      reply.continue();
      return;
    }
	const reactString = ReactDOM.renderToString(
		<Provider store={store}>
      <RouterContext {...renderProps} />
		</Provider>
	);
	const webserver = __PRODUCTION__ ? "" : `//${hostname}:8080`;
	let output = (
		`<!doctype html>
		<html lang="en-us">
			<head>
				<meta charset="utf-8">
				<title></title>
			</head>
			<body>
				<div id="react-root">${reactString}</div>
				<script>
					window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
				</script>
				<script src=${webserver}/dist/client.js></script>
			</body>
		</html>`
		);
	reply(output);
  });
});

if (__DEV__) {
	if (module.hot) {
		console.log("[HMR] Waiting for server-side updates");

		module.hot.accept("./routes", () => {
			routes = require("./routes");
		});

		module.hot.addStatusHandler((status) => {
			if (status === "abort") {
				setTimeout(() => process.exit(0), 0);
			}
		});
	}
}
