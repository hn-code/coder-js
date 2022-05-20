//Funciones
//Se chequea si el codigo es valido y se almacena
//en un booleano para establecer el descuento del 10 o del 15
const discountCodeControl = (disc) => {
    let code = prompt("Ingrese el codigo").toLowerCase();
    if(code == "dbz10"){
        alert("Recibirá un descuento del 10% en esta compra!");
        disc = true;
        dbz10 = true;
    } else if (code == "dbz15"){
        alert("Recibirá un descuento del 15% en esta compra!");
        disc = true;
        dbz15 = true;
    } else {
        alert("Codigo Erroneo");
    }
    return disc;
}

//En base al tipo de descuento, se calcula el precio
//final de la compra
const applyDiscount = (totalCost)=>{
    if(dbz10){
        alert("El costo a pagar con el descuento \ndel 10% es un total de: "+totalCost*0.9);
    } else if (dbz15){
        alert("El costo a pagar con el descuento \ndel 15% es un total de: "+totalCost*0.85);
    } else {
        alert("El costo a pagar es un total de: "+totalCost);
    }
}

//Figuras a comprar
const figuresOnShop = [
    {
        nombre: 'Goku Ultra Instinct',
        precio: 250
    },
    {
        nombre: 'Vegeta Big Bang Attack',
        precio: 250
    },
    {
        nombre: 'Broly Omega Blaster',
        precio: 250
    },
    {
        nombre: 'Vegetto SSJB Final Kamehameha',
        precio: 220
    },
    {
        nombre: 'Gogeta SSJB Stardust Breaker',
        precio: 320
    },
    {
        nombre: 'Goku-Gohan Father-Son Kamehameha',
        precio: 250
    },
    {
        nombre: 'Future Trunks SSJ Ki',
        precio: 220
    }
];
//Carrito
const cart = [];
//Otras Variables globales
let dbz10 = false, dbz15 = false, discApplicated = false;

//Menu de opciones del usuario
let welcomeMessage = 'Bienvenido a nuestra tienda!\n';
welcomeMessage += 'Que accion desea realizar?\n\n';
welcomeMessage += '1- Agregar productos a carrito\n';
welcomeMessage += '2- Ver los productos en el carrito\n';
welcomeMessage += '3- Aplicar código de descuento\n';
welcomeMessage += '4- Proceder a pagar\n';
welcomeMessage += '0- Salir';

let menuState = false;
while(!menuState) {
    const userOption = parseInt(prompt(welcomeMessage));
    switch (userOption) {
        case 1:
            //Se muestra el contenido de las figuras en la tienda
            //en un string para que el alert() lo represente para el cliente
            let showProd = '';
            let i = 1;
            for (const prop of figuresOnShop) {
                showProd += i + '- ' + prop.nombre + ' - '+ prop.precio+'\n';
                i++;
            }
            showProd += '0- Salir';
            //Se toma la decision del cliente y se evitan errores de tipeo
            let buy = parseInt(prompt(showProd));
            if(buy ==0 || isNaN(buy)){
                break;
            } else {
                //Se toma el array de la tienda y se agrega el elemento
                //(segun su posicion) al carrito
                let figureBought = figuresOnShop[buy-1];
                cart.push(figureBought);
            }
            break;
        case 2:
            //Se recorre el carrito y se muestra el contenido
            let showCart = '';
            cart.forEach((el)=>{
                showCart += '-'+el.nombre+' - '+el.precio+'\n';
            });
            alert(showCart);
            break;
        case 3:
            //Se chequea si se le aplico un descuento ya
            //para no tener que aplicarlo dos veces
            if(discApplicated){
                alert("Ya cuentas con un codigo de descuento aplicado");
            } else {
                discApplicated = discountCodeControl(discApplicated);
            }
            break;
        case 4:
            //Se toma el carrito y se separan los precios en un array
            //el cual luego se le aplica el .reduce() para una sumatoria
            //del precio total
            const costEveryFigure = [];
            cart.forEach(element => {
                costEveryFigure.push(element.precio);
            });
            const costAllFigure = costEveryFigure.reduce((ac,el)=> ac + el, 0);
            applyDiscount(costAllFigure);
            break;
        case 0: 
            alert("Vuelva pronto!");
            menuState = true;
            break;
        default:
            alert("Elija una opcion correcta");
            break;
    }
}