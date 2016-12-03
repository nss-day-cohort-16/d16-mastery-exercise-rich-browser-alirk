'use strict';

function getToys(){
	return new Promise(function(resolve, reject){
		$.ajax({
			url: `https://toy-store-fad76.firebaseio.com/toys.json`
		}).done(function(data){
			console.log('data from getToys()', data);
			resolve(data);
		});
	});
}

function getToy(toy){
	return new Promise(function(resolve, reject){
		$.ajax({
			url: `https://toy-store-fad76.firebaseio.com/toys/${toy}.json`
		}).done(function(data){
			resolve(data);
		}).fail(function(error){
			reject(error);
		});
	});
}

function addToy(toy){
	return new Promise(function(resolve, reject){
		$.ajax({
			url: 'https://toy-store-fad76.firebaseio.com/toys.json',
			type: 'POST',
			data: JSON.stringify(toy),
			dataType: 'json'
		}).done(function(){
			resolve();
		});
	});
}

function deleteToy(toyId){
	return new Promise(function(resolve, reject){
		$.ajax({
			url: `https://toy-store-fad76.firebaseio.com/toys/${toyId}.json`,
			method: 'DELETE'
		}).done(function(){
			resolve();
		});
	});
}

module.exports = { getToys, getToy, addToy, deleteToy };