var tab = ["Audrey","Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
var saisie = window.prompt("Veuillez choisir un prénom parmi:" + (tab))

if(tab.includes(saisie)){
	tab.splice(tab.indexOf(saisie),1);
	tab.push(" ");
    console.log(tab)
    alert("Le prénom saisi a été supprimé: " + (tab))
	
}
else {alert("Votre prénom ne figure pas dans le tableau")};




// [tab]
// (tab)


