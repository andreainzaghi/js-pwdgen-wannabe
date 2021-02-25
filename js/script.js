// 
//
// function genera()
// {
//    var consonanti=String("bcdfglmnprstvz");
//    var vocali    =String("aeiou");
//    var nc=consonanti.length;
//    var nv=vocali.length;
//    var str="";
//    for(var i=1; i <= 4; i++)
//    {
//       x1=Math.floor(nc*Math.random());
//       x2=Math.floor(nv*Math.random());
//       c1=consonanti.charAt(x1);
//       c2=vocali.charAt(x2);
//       str=str+c1+c2;
//    }
//    document.form_class.class.value=str;
// }



// COMPITO RICHIESTO
// variabili
var nome = prompt('Qual è il tuo nome?');
var cognome = prompt('Qual è il tuo cognome?');
var colore = prompt('Qual è il tuo colore preferito?');
var password = nome + cognome + colore;

//write line/print
document.writeln(password + '27'); //1 modo
document.writeln(nome + cognome + colore + '27'); //2 modo
