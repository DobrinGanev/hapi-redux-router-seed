import fetch from 'isomorphic-fetch';
import callApi from '../util/apiCaller';
import {
	MESSAGE_FETCH,
	MESSAGE_STOP_FETCH,
} from './actionTypes';

if (__CLIENT__) {
	const { protocol, hostname, port } = window.location;
}

function receiveMessage(message) {
	return {
		type: MESSAGE_FETCH,
		messages: message,
		isLoading: true
	};
}

export function requestMessage() {
	return {
		type: MESSAGE_REQUEST
	}
}

function stopFetch() {
	return {
		type: MESSAGE_STOP_FETCH,
		isLoading: false
	}
}

export function fetchMessage() {
	return function (dispatch) {
		return callApi('hello', {
		}).then(function(data) {
	           var messages =[];
	            messages.push(data.message)
	 		       dispatch(receiveMessage(messages));
	 					 dispatch(stopFetch());
	 		    });
	 	}
}
