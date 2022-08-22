 
let entrada = prompt("tipos usuarios estandar , premiun , medio");
while ( entrada != "visitante") {
    switch (entrada) {
         case "estandar":
             alert("cuota baja");
             break;
         case "medio":
             alert("cuota media");
             break;
    
         case "premiun":
             alert("cuota alta");
             break;    
    
         default:
           alert("no aceptado")
            break;
    }
    usuarios = prompt("ingresa tu nombre")
    
}
