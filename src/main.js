'use strict';

let db = require('./db');
let dom = require('./dom');

let Handlebars = require('hbsfy/runtime');
let listTemplate = require('./templates/list.hbs');

Handlebars.registerPartial('nav', require('./templates/partials/nav.hbs'));

function loadToysToDOM(){
	db.getToys()
	.then(function(data){
		let keysArr = Object.keys(data);
		keysArr.forEach(function(key){
			data[key].fbKey = key;
		});
	dom.makeToyGrid(data);
	});
}

$(document).on('click', '#addNewNavBtn', function(){
		dom.showAddToyForm();
});

function buildToyObj(){
	console.log('buildToyObj');
}

loadToysToDOM();

