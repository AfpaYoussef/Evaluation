// Variables de l'énoncé
var QTECOM = window.prompt("Quelle quantité souhaitez-vous?");
var PU = window.prompt ("Veuillez renseigner le prix unitaire :");
var REM1 = 5/100;
var REM2 = 10/100;
var TOT = QTECOM*PU;
var PORT = 2/100;
var PORT1 = 6;
var Facture;
var Factureport;



if (TOT >100 && TOT < 200)
{
    Facture = TOT-(TOT*REM1);
}

else if (TOT >=200)
{
    Facture = TOT-(TOT*REM2);
}

if (Facture < 500)
{
 Facture = Facture + PORT1;
}

else if (TOT  >= 500)
{
  Facture =  TOT-(TOT*REM2) + ((TOT-(TOT*REM2))*Port);
}

alert("Le montant de votre commande est de "+ Facture);


// if (Facture >= 500)
    // alert("Le montant de votre commande est de "+ Factureport);

// else if ()

// {
// ;
// }

// else if (operateur = "/")

// {
// resultat=nombresentier1/nombresentier2;
// }

// alert ("Le résultat de votre calcul est: " + resultat );

// alert("Le montant de votre commande est de "+ Facture);
// alert("Le montant de votre commande est de "+ Factureport);