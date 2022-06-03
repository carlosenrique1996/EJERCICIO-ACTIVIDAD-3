let empresa=prompt("ingrese la empresa a la cual desea llamar: ");
let costo=parseFloat(prompt("Ingrese costo x min de llamada: "));
let minutos=parseFloat(prompt("cuanto minutos desea hablar: "));
let fijo=0.20;
let claro=0.40;
let movistar=0.60;
let entel=1;
let total=costo*minutos;

if(fijo=minutos*0.20){
    document.write(`La empresa a la cual desea llamar es: ${empresa} <br>
    El costo x min de llamda es: ${costo} <br>
    Cuantos minutos desea hablar: ${minutos} <br>
    El monto total a pagar es: ${total}`);
}else if(claro=minutos*0.40){
    document.write(`La empresa a la cual desea llamar es: ${empresa} <br>
    El costo x min de llamda es: ${costo} <br>
    Cuantos minutos desea hablar: ${minutos} <br>
    El monto total a pagar es: ${total}`);
}else if(movistar=minutos*0.60){
    document.write(`La empresa a la cual desea llamar es: ${empresa} <br>
    El costo x min de llamda es: ${costo} <br>
    Cuantos minutos desea hablar: ${minutos} <br>
    El monto total a pagar es: ${total}`);
}else if(entel=minutos*1){
    document.write(`La empresa a la cual desea llamar es: ${empresa} <br>
    El costo x min de llamda es: ${costo} <br>
    Cuantos minutos desea hablar: ${minutos} <br>
    El monto total a pagar es: ${total}`);
}
