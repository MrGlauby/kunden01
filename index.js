"use strict";  

//++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++  
//JSON-Daten per Ajax laden
let request = new XMLHttpRequest();
request.open("GET","kunden.json",true);
request.responseType = "json";
request.setRequestHeader("Accept", "application/json"); //optional
request.send();	
let table = tableCreate();
request.addEventListener("load", () => { 
		if(request.status === 200) {
			let  json = request.response;
			
			let kunde = json.kunden;
			
			for(let element  of kunde) {
				let row = createRow(element.name,	element.vorname, 
															element.wohnort, element.geburtstag);
				table.tBodies[0].appendChild(row);
			}
			document.getElementById("jsonDaten").appendChild(table);	
		}//ende if
		
	});
//---------------------------
//---------------------------
//Tabelle erstellen
function tableCreate() {
	let table = document.createElement("table");
	let caption = document.createElement("caption");
	let tableHead = document.createElement("thead");
	let headerRow = document.createElement("tr");
	let headerName = document.createElement("th");
	let headerVorname = document.createElement("th");
	let headerGeb = document.createElement("th");
	let headerOrt = document.createElement("th");
	let tableBody = document.createElement("tbody");
	
	/*
	headerName.appendChild(document.createTextNode("Name"));
	headerVorname.appendChild(document.createTextNode("Vorname"));	
	headerOrt.appendChild(document.createTextNode("Wohnort"));
	headerGeb.appendChild(document.createTextNode("Geburtstag"));
	*/
	headerName.innerHTML = "Name";
	headerVorname.innerHTML = "Vorname";	
	headerOrt.innerHTML = "Wohnort";
	headerGeb.innerHTML = "Geburtstag";
	table.appendChild(tableHead);
	tableHead.appendChild(headerRow);
	
	headerRow.appendChild(headerName);
	headerRow.appendChild(headerVorname);
	headerRow.appendChild(headerGeb);
	headerRow.appendChild(headerOrt);
	
	table.appendChild(tableBody);
	table.classList = "table table-striped table-hover my-3 bg-light";
	
	return table;
}
//---------------------------
//Zeile für die Ausgabe erstellen
function createRow(name, vorname, ort, geb) {
	let row = document.createElement("tr");
	let tdName = document.createElement("td");
	let tdVorname = document.createElement("td");	
	let tdGeb = document.createElement("td");
	let tdOrt = document.createElement("td");
	
	tdName.appendChild(document.createTextNode(name));
	tdVorname.appendChild(document.createTextNode(vorname));
	tdOrt.appendChild(document.createTextNode(ort));
	tdGeb.appendChild(document.createTextNode(geb));
	
	row.appendChild(tdName);
	row.appendChild(tdVorname);
	row.appendChild(tdGeb);
	row.appendChild(tdOrt);
	return row;
}