
// Les variables qui seront utilisées
let a;
let compteur1= 0;
let compteur2= 0;
let compteur3= 0;
let tableau = [];


//  définition des instructions (en utilisant les différentes variables)

// <------ Faire deux choses("do"): solliciter une valeur à l'utilisateur, avec la variable a et mettre la valeur saisie dans le tableau (le pousser ou "push" dedans) avec la variable tableau -------->
do {
    a = prompt("Saisissez l'âge des différentes personnes :");  
    tableau.push(a);


//  <------- Renseignements des différentes conditions entre parenthèses avec leur compteurs respectif (variable compteurN++) ------- >
if (a < 20)
compteur1++;

else if (a >= 20 && a <= 40)
compteur2++;

else if (a > 40)
compteur3++;
}

//  <------- Les instructions s'exécuteront tant que (par l'intermédiaire de "while") la condition entre parenthèses est vraie ------->

while (a < 100) { 
      
}


// Affichage du message sur la page html (par le biais de "document.write") en fonction des différentes valeurs affectées aux variables "compteurs".

document.write("Selon les données saisies, il y a " + compteur1 + " personne(s) agée(s) de moins de 20 ans, " + compteur2 + " agée(s) de 20 à 40 ans, " + compteur3 + " agée(s) de plus de 40 ans.");