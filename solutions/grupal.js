// /////////// ------------------ ejercicio el uno
function sumar(valor)
    {
        var suma=0;
        for(var i=0;i<valor.length;i++)
        {
            return suma+=parseInt(valor[i]);
        }
        module.exports = suma
    }
// /////////// ------------------ ejercicio el dos Daniel

function candies(n,m)
   {
       var n=n;
       var m=m;
       var dul=parseInt(m/n);
       var sobra=m%n;
       var total=n*dul;
       document.write("Cantidad de niños: " + n + "<br>");
       document.write("Cantidad de Dulces: " + m + "<br>");
       document.write("Cantidad de dulces por niño: " + parseInt(dul) + "<br>");
       document.write("Total dulces repartidos: " + total +"<br>");
       if (sobra==0){
       	document.write("No hay residuos");
       }
       else {
       document.write("Dulces que sobran: " + sobra + " Y no se puede repartir");
       }

   }
   candies(3,10);

// /////////// ------------------ ejercicio el tres
// /////////// ------------------ ejercicio el cuatro
// /////////// ------------------ ejercicio el cinco
