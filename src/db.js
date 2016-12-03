'use strict';

function getToys(){
	return new Promise(function(resolve, reject){
		$.ajax({
			url: `https://toy-store-fad76.firebaseio.com/toys.json`
		}).done(function(data){
			resolve(data);
		});
	});
}

function getToy(toyId){
	return new Promise(function(resolve, reject){
		$.ajax({
			url: `https://toy-store-fad76.firebaseio.com/toys/${toyId}.json`
		}).done(function(data){
			resolve(data);
		}).fail(function(error){
			reject(error);
		});
	});
}

module.exports = { getToys, getToy };