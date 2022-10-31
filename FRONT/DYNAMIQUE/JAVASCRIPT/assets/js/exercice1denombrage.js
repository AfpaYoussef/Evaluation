let a;
let compteur1= 0;
let compteur2= 0;
let compteur3= 0;
let tableau = [];




do {
    a = prompt("Saisissez l'âge des différentes personnes :");
    tableau.push(a);

if (a < 20)
compteur1++;

else if (a >= 20 && a <= 40)
compteur2++;

else if (a > 40)
compteur3++;
}



while (a < 100) { 
      
}


compteur1;
compteur2;
compteur3;

document.write("Selon les données saisies, il y a " + compteur1 + " personne(s) agée(s) de moins de 20 ans, " + compteur2 + " agée(s) de 20 à 40 ans, " + compteur3 + " agée(s) de plus de 40 ans.");