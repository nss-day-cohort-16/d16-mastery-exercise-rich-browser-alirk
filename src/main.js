'use strict';

let db = require('./db');
let dom = require('./dom');

let Handlebars = require('hbsfy/runtime');
let addTemplate = require('./templates/add.hbs');

Handlebars.registerPartial('nav', require('./templates/partials/nav.hbs'));

function loadToysToDOM(){
	db.getToys()
	.then(function(data){
		let keysArr = Object.keys(data);
		console.log('keysArr', keysArr);
		keysArr.forEach(function(key){
			data[key].fbKey = key;
		});
		console.log('data', data);
	dom.makeToyGrid(data);
	});
}

$(document).on('click', '#addNewBtn', function(){
	$("#output").html(addTemplate);	
});

$(document).on('click', '#saveToyBtn', function(){
	let toyObj = buildToyObj();
	db.addToy(toyObj)
	.then(function(){
		loadToysToDOM();
	});
});

$(document).on('click', '.deleteBtn', function(e){
	let toyId = e.target.id;
	console.log('toy to delete key?', toyId);	
	db.deleteToy(toyId)
	.then(function(){
		loadToysToDOM();
	});
});

function buildToyObj(){
	let newToy = {
		name: $("#newToy--name").val(),
		price: $("#newToy--price").val(),
		description: $("#newToy--description").val(),
		img: $("#newToy--img").val()
	};

	return newToy;
}

loadToysToDOM();

