// <----------- Variables de l'énoncé-------------->
var QTECOM = window.prompt("Quelle quantité souhaitez-vous?");
var PU = window.prompt ("Veuillez renseigner le prix unitaire :");

var REM1 = 0.05;// Remise de 5% traduite sous forme de coefficient
var REM2 = 0.10;// Remise de 10% traduite sous forme de coefficient
var TOT = QTECOM*PU;

var PORT = 0.02;   // coefficient de la remise à 2%  
var PORT1 = 6;    // remise de 6 euros en valeur

var PAP; // Prix à payer incluant une remise (REM1 OU REM2)

var P1; // Variable créée occasionnellement pour obtenir la remise de 2% en valeur

var Facture1; // Montant totale de la commande incluant toutes les opérations comptables (facturation, remises et frais de port).




// <---------Le montant de la commande est conditionné dans un premier temps en fonction des quantités saisies et du prix unitaire, puis en fonction des remises....
// ...puis des frais de ports qui sont conditionnés par le  niveau du montant de la commande avec remise----->

if(TOT>500){
    PAP = ((TOT - (TOT*REM2)))
    if (PAP >= 500) 
    {
    alert("Le montant de votre commande est de "+ PAP + " euros incluant une remise de "+ (TOT*REM2) + " euros sans frais de port.");
    }

    if (PAP < 500)
    {
        P1=PAP*PORT;
        Facture1 = PAP + P1;
        alert("Le montant de votre commande est de "+ Facture1 +" euros incluant une remise de "+ (TOT*REM2) + " et des frais de port de "+ P1 +" euros.");
    }
}

if (TOT > 100 && TOT <= 200) {
    PAP = (TOT - (TOT*REM1));

    if ((PAP*PORT) < PORT1) {
        Facture1 = PAP + PORT1;
        alert("Le montant de votre commande est de "+ Facture1 +" euros incluant une remise de "+ (TOT*REM1) +" et des frais de port de "+ PORT1 + " euros.");
    }

    else if  ((PAP*PORT) > PORT1) {
        Facture1 = PAP + (PAP*PORT);
        alert("Le montant de votre commande est de "+ Facture1 +" euros incluant une remise de "+ (TOT*REM1) +" et des frais de port de "+ (PAP*PORT) + " euros.");
    }
}

if (TOT <= 100) {
    TOT;
    if ((TOT*PORT) < PORT1) {
    Facture1 = TOT + PORT1;
    alert("Le montant de votre commande est de "+ Facture1 +" euros et ne bénéficie d'aucune remise. Les frais de port sont de "+ PORT1 + " euros.");
    }

    else if ((TOT*PORT) > PORT1) {
    Facture1 = TOT + (TOT*PORT); 
    alert("Le montant de votre commande est de "+ Facture1 +" euros. Elle ne bénéficie d'aucune remise. Les frais de port sont de "+ PORT + " euros.");
    }
}