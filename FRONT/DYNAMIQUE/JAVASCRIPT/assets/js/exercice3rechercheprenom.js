// Les variables
var tableau = ["Audrey","Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
var a = window.prompt("Veuillez choisir un prénom parmi:" + (tableau))


//  Si (condition permise par "if") le prénom saisie par l'utilisateur (saisie permise par "window.prompt"), affecté dans la variable a, est contenu (vérification permise par "includes") dans le tableau (variable tableau) parmi ses données...
// ...alors exécuter "tableau.splice(tableau.indexOf(a),1);" c'est à dire supprimer (avec splice) du tableau, 1 élément (1 prénom) situé à partir de la position (indexOf) de la variable a dans le tableau,
//...  puis introduire (ou "push") dans le même tableau la valeur " "
if(tableau.includes(a)){
	tableau.splice(tableau.indexOf(a),1);
	tableau.push(" ");
    console.log(tableau)
//.... affichage d'un message incluant la variable tableau modifié c'est à dire 
    alert("Le prénom saisi a été supprimé: " + (tableau))
	
}

//...  sinon, affichage d'un message d'erreur
else {alert("Votre prénom ne figure pas dans le tableau")};






