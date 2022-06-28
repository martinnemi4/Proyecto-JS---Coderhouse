//SIMULADOR DE PRESTAMOS CON TASA DE INTERES

//Se solicita la edad del usuario, menores de 18 años no podran acceder al simulador
let edad;
while (true) {
    edad = parseInt(prompt("Ingresa tu edad"))
    if (edad < 18){
        alert("Para calcular las cuotas de un prestamo debes ser mayor de edad")
    } else {
        break
    }
}


//Se le solicita al usuario ingresar la cantidad de cuotas, el precio y la tasa de interés
let nombreusuario = prompt("Ingresa tu nombre y apellido");
let preciototal = parseInt(prompt("Ingrese la cantidad de dinero"));
let cuotas = parseInt(prompt ("Cantidad de cuotas a pagar"));
let tasainteres = parseInt(prompt("Tasa de interés (numero entero)"))/100;

let interesgenerado = (preciototal*tasainteres);
let valorcuota = (interesgenerado + preciototal) / cuotas;


//El programa nos indica la cantidad de dinero a pagar en cada cuota
console.log("Deberas pagar " + cuotas + " cuotas de $" + valorcuota);
alert("Deberas pagar " + cuotas + " cuotas de $" + valorcuota);


//Creacion del Array con los datos del usuario
let DatosDeUsuarios= [];


//Cantidad maxima de usuarios a almacenar (PROXIMAMENTE)
let cantidadmaxima = 20;


//El programa incorpora los datos ingresados por el usuario a un Array
DatosDeUsuarios.push("Edad: "+ edad + " años","Nombre: "+ nombreusuario, "Préstamo: $" + preciototal, "Cantidad de cuotas: " + cuotas, "Tasa de Interés: " + tasainteres*100 +"%");


//El programa nos muestra una lista con los datos del usuario
console.log(DatosDeUsuarios);
alert(DatosDeUsuarios.join("\n"));

//Busqueda y filtrado de datos del usuario
DatosDeUsuarios.forEach( (num)=> {
    console.log(num)
} )







