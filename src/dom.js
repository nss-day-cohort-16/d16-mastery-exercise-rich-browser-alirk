'use strict';

let db = require('./db');

let Handlebars = require('hbsfy/runtime');
let listTemplate = require('./templates/list.hbs');
let viewTemplate = require('./templates/view.hbs');
let addTemplate = require('./templates/add.hbs');


function showToyDetails(fbKey){
	console.log('fbKey arg', fbKey);
	db.getToy(fbKey)
	.then(function(data){
		console.log('data', data);
		let detailsHtml = viewTemplate(data);
		$("#output").html(detailsHtml);
	});
}

function makeToyGrid(toys){
	let toysArr = [];
	for(let toy in toys){
		let currentToy = toys[toy];
		toysArr.push(currentToy);
	}
	let toysData = {
		toys: toysArr
	};
	let listHtml = listTemplate(toysData);
	$("#output").html(listHtml);
	$(".detailsBtn").click(function(e){
		showToyDetails(e.target.id);
	});
}

function showAddToyForm(){
	console.log('showAddToyForm is running');
	let addHtml = addTemplate();
	$("#output").html(addHtml);
}




module.exports = { makeToyGrid, showAddToyForm };