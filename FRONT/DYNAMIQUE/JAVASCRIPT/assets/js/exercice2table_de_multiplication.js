

// Variables et préparation de la fonction multiplication qui seront utilisées.
// La fonction se structure de la manière suivante:
// <----------document.write permettra d'afficher sur la page html un tableau, mis en forme par les balises (tr, td, table border..) en incluant la valeur de la varibale a (+a+) ---->
// <----------Introduction d'une boucle avec for, l'instruction (opération de multiplication) s'exécutera, dans cette mise en forme, en respection les 3 paramètres------>
var a;
function multiplication () { 
    document.write("<h4>La table de multiplication de "+a+" est :</h4>")
    document.write("<table border >");
   
    for(var i=1;i<=10;i++){
       document.write("<tr>");
       document.write("<td>"+a+" x "+i+" =</td>");
       document.write("<td>"+a*i+"</td>");
       document.write("</tr>");
    }
    }



    // Faire ("do") une demande à l'utilisateur définie entre les guillements, dont la valeur saisie sera affecté à la variable a 
do{
    a=prompt("Saisissez un nombre entier");
 } 
    
    // Tant que (While) la variable a est un entier différent de 0...
while(isNaN(a) || a%1!==0);

// ... alors exécuter la fonction multiplication () conformément à ce qui lui a été assigné comme instruction
   multiplication (); {
 document.write("</table>");
   }

