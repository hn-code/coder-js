alert("Bienvenido/a a nuestra tienda!");
let codeDiscount = prompt("Si cuenta con un codigo de descuento ingreselo \nahora para su compra final!");
let dbz10 = false, dbz15 = false;
let figCartOk = 0;

//Funciones

//Verifica si el cliente coloca un codigo para aplicar algun descuento
const verifyCode = (code) => {
    if(code.toLowerCase() == "dbz15"){
        alert("Genial! Se le realizará un descuento del 15% en una figura");
        dbz15 = true;
    } else if (code.toLowerCase() == "dbz10"){
        alert("Genial! Se le realizará un descuento del 10% en una figura");
        dbz10 = true;
    } else {
        alert("Codigo no válido");
    }
}
//Verifica la cantidad de productos ingresados al carrito para al 
//final establecen un pago total
const verifyCart = (cartOk) => {
    let cart = false;
    while (!cart){
    let figCart = parseInt(prompt("Cuantas figuras agrego al carrito?"));
        if(Number.isNaN(figCart) || figCart <= 0){
            alert("Pusiste un numero equivocado, ingrese nuevamente el numero");
        } else {
            alert("Ok! Pasemos al paso final");
            cartOk = figCart;
            cart = true;
            return cartOk;
        }
    }
}
//Aplica el descuento basado en el codigo y en la cantidad de lo comprado 
//y mostrando el costo de toda la compra en total
const applyDisc = (d15, d10, cart) => {
    if(d15){
        alert("El pago a realizar del total es de: "+ (100*cart - disc15(100)));
    } else if (d10) {
        alert("El pago a realizar del total es de: "+ (100*cart - disc10(100)));
    } else {
        alert("El pago a realizar del total es de: "+ 100*cart);
    }
}
//Realizan el calculo de cuanto se le descuenta del precio original
const disc15 = x => x*0.15
const disc10 = x => x*0.10


verifyCode(codeDiscount);
figCartOk = verifyCart(figCartOk);

alert("(Suponiendo que todas las figuras que entran \nen el descuento valen 100 dolares)");
alert("Ha comprado "+figCartOk+" figuras");

applyDisc(dbz15, dbz10, figCartOk);
