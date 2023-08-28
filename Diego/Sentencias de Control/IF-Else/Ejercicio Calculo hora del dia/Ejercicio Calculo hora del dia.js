/**
 * 6:00am a 11:00am  -- Buenos dias
 * 12:00am a 18:00am  -- Buenos Tardes
 * 19:00am a 24:00am  -- Buenos Noches
 * 0:00am a 6:00am  -- Durmiendo
 */

let horaDia = 15;
let mensaje;

if(horaDia >= 6 && horaDia <= 11){
    mensaje = "Buenos dias";
}else if(horaDia >= 12 && horaDia <= 18){
    mensaje = "Buenas tardes";
}else if (horaDia >= 19 && horaDia <= 24){
    mensaje = "Buenas noches";
}else if (horaDia >= 0 && horaDia < 6){
    mensaje = "Durmiendo";
}

console.log(mensaje);