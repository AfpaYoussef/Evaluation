
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


do{
    a=prompt("Saisissez un nombre entier");
 } 

 while(isNaN(a) || a%1!==0);
   multiplication (); {
 document.write("</table>");
   }

