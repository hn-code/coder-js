//Figuras a comprar
const figuresOnShop = [
    {
        id: 1,
        nombre: 'Goku SSJ3',
        precio: 160,
        light: true,
        tags: ['goku', 'ssj3', 'light', 'led', 'dbz'],
        img: './img/Goku/goku1.jpg',
        cantidad: 1
    },
    {
        id: 2,
        nombre: 'Goku Ultra Instinct',
        precio: 200,
        light: true,
        tags: ['goku', 'ui', 'light', 'led', 'dbs', 'ultra instinct'],
        img: './img/Goku/goku2.jpg',
        cantidad: 1
    },
    {
        id: 3,
        nombre: 'Goku SSJ2',
        precio: 200,
        light: false,
        tags: ['goku', 'ssj2', 'dbz'],
        img: './img/Goku/goku3.jpg',
        cantidad: 1
    },
    {
        id: 4,
        nombre: 'Goku Genkidama',
        precio: 190,
        light: true,
        tags: ['goku', 'genkidama', 'light', 'led', 'dbz'],
        img: './img/Goku/goku4.jpg',
        cantidad: 1
    },
    {
        id: 5,
        nombre: 'Majin Vegeta',
        precio: 200,
        light: false,
        tags: ['vegeta', 'ssj2', 'majin', 'dbz'],
        img: './img/Vegeta/vegeta1.jpg',
        cantidad: 1
    },
    {
        id: 6,
        nombre: 'Vegeta Big Bang Attack', 
        precio: 230,
        light: true,
        tags: ['vegeta', 'ssj', 'big', 'bang', 'dbz', 'light', 'led'],
        img: './img/Vegeta/vegeta2.jpg',
        cantidad: 1
    },
    {
        id: 7,
        nombre: 'Vegeta Final Flash',
        precio: 160,
        light: false,
        tags: ['vegeta', 'ssj', 'final', 'flash', 'dbz'],
        img: './img/Vegeta/vegeta3.jpg',
        cantidad: 1
    },
    {
        id: 8,
        nombre: 'Vegeta SSJB',
        precio: 100,
        light: false,
        tags: ['vegeta', 'ssjb', 'dbs'],
        img: './img/Vegeta/vegeta4.jpg',
        cantidad: 1
    },
    {
        id: 9,
        nombre: 'Broly Berserk Fists',
        precio: 220,
        light: true,
        tags: ['broly', 'green', 'berserk', 'dbs', 'light', 'led', 'fist', 'fists'],
        img: './img/Broly/broly1.jpg',
        cantidad: 1
    },
    {
        id: 10,
        nombre: 'Broly SSJ',
        precio: 130,
        light: false,
        tags: ['broly', 'berserk', 'dbs', 'ssj'],
        img: './img/Broly/broly2.jpg',
        cantidad: 1
    },
    {
        id: 11,
        nombre: 'Broly Omega Blaster',
        precio: 230,
        light: true,
        tags: ['broly', 'green', 'berserk', 'dbz', 'light', 'led', 'omega', 'blaster'],
        img: './img/Broly/broly3.jpg',
        cantidad: 1
    },
    {
        id: 12,
        nombre: 'Broly SSJL',
        precio: 200,
        light: true,
        tags: ['broly', 'green', 'berserk', 'dbz', 'light', 'led', 'legendary', 'ssjl'],
        img: './img/Broly/broly4.jpg',
        cantidad: 1
    },
    {
        id: 13,
        nombre: 'Vegetto SSJB Final Kamehameha',
        precio: 180,
        light: true,
        tags: ['vegetto', 'final', 'kamehameha', 'ssjb', 'dbs'],
        img: './img/Vegetto/vegetto1.jpg',
        cantidad: 1
    },
    {
        id: 14,
        nombre: 'Vegetto Kick', 
        precio: 120,
        light: false,
        tags: ['vegetto', 'kick', 'ssj', 'dbz'],
        img: './img/Vegetto/vegetto2.jpg',
        cantidad: 1
    },
    {
        id: 15,
        nombre: 'Vegetto SSJB', 
        precio: 130,
        light: false,
        tags: ['vegetto', 'ssjb', 'dbs'],
        img: './img/Vegetto/vegetto3.jpg',
        cantidad: 1
    },
    {
        id: 16,
        nombre: 'Vegetto SSJB Ki Sword', 
        precio: 150,
        light: false,
        tags: ['vegetto', 'ki', 'sword', 'ssjb', 'dbs'],
        img: './img/Vegetto/vegetto4.jpg',
        cantidad: 1
    },
    {
        id: 17,
        nombre: 'Gogeta Stardust Breaker', 
        precio: 220,
        light: true,
        tags: ['gogeta', 'ssj', 'stardust', 'breaker', 'dbz' ,'light', 'led'],
        img: './img/Gogeta/gogeta1.jpg',
        cantidad: 1
    },
    {
        id: 18,
        nombre: 'Gogeta SSJ4 Kamehameha',
        precio: 190,
        light: true,
        tags: ['gogeta', 'ssj4', 'kamehameha', 'dbgt', 'light', 'led'],
        img: './img/Gogeta/gogeta2.jpg',
        cantidad: 1
    },
    {
        id: 19,
        nombre: 'Gogeta SSJB',
        precio: 100,
        light: false,
        tags: ['gogeta', 'ssjb', 'dbs'],
        img: './img/Gogeta/gogeta3.jpg',
        cantidad: 1
    },
    {
        id: 20,
        nombre: 'Gogeta SSJB Stardust Breaker',
        precio: 250,
        light: true,
        tags: ['gogeta', 'ssjb', 'stardust', 'breaker', 'dbs', 'light', 'led'],
        img: './img/Gogeta/gogeta4.jpg',
        cantidad: 1
    },
    {
        id: 21,
        nombre: 'Gohan Kaio',
        precio: 130,
        light: false,
        tags: ['gohan', 'kaio', 'dbz'],
        img: './img/Gohan/gohan1.jpg',
        cantidad: 1
    },
    {
        id: 22,
        nombre: 'Future Gohan',
        precio: 120,
        light: false,
        tags: ['gohan', 'future', 'ssj'],
        img: './img/Gohan/gohan2.jpg',
        cantidad: 1
    },
    {
        id: 23,
        nombre: 'Ultimate Gohan',
        precio: 140,
        light: false,
        tags: ['gohan', 'ultimate', 'dbz'],
        img: './img/Gohan/gohan3.jpg',
        cantidad: 1
    },
    {
        id: 24,
        nombre: 'Goku-Gohan Father-Son Kamehameha',
        precio: 200,
        light: true,
        tags: ['gohan', 'goku', 'father', 'son', 'kamehameha', 'dbz', 'light', 'led'],
        img: './img/Gohan/gohan4.jpg',
        cantidad: 1
    },
    {
        id: 25,
        nombre: 'Future Trunks',
        precio: 130,
        light: false,
        tags: ['trunks', 'future', 'dbz'],
        img: './img/Trunks/trunks1.jpg',
        cantidad: 1
    },
    {
        id: 26,
        nombre: 'Future Trunks LH',
        precio: 140,
        light: false,
        tags: ['trunks', 'future', 'dbz'],
        img: './img/Trunks/trunks2.jpg',
        cantidad: 1
    },
    {
        id: 27,
        nombre: 'Future Trunks SSJ Ki',
        precio: 150,
        light: false,
        tags: ['trunks', 'future', 'ssj', 'ki'],
        img: './img/Trunks/trunks3.jpg',
        cantidad: 1
    },
    {
        id: 28,
        nombre: 'Future Trunks SSJ Sword Attack', 
        precio: 140,
        light: false,
        tags: ['trunks', 'future', 'ssj', 'sword', 'attack'],
        img: './img/Trunks/trunks4.jpg',
        cantidad: 1
    }
];

//Se crea una clase con un constructor que 
//permite tener metodos relacionados a las figuras
//en este caso el aumento del impuesto al producto
class Figure {
    constructor (id, nombre, precio, light, tags, img, cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.light = light;
        this.tags = tags;
        this.img = img;
        this.cantidad = cantidad;
    }
    priceWithTaxes(){
        return Math.round(this.precio*1.22);
    }
    changeQuantity(n){
        this.cantidad = this.cantidad*n;
    }
}

//Se almacenan las figuras en un array para no trabajarlas
//directamente de la fuente desde donde se esten trayendo y permitiendole
//crear a cada objeto sus propios metodos como el priceWithTaxes() por ejemplo
const figures = [];
for (const i of figuresOnShop) {
    const figure = new Figure (i.id, i.nombre, i.precio, i.light, i.tags, i.img, i.cantidad)
    figures.push(figure);
}

//Carrito
const cart = [];
let finalPrice = 0;
let valueSelected = 0;
//En caso de filtrar figuras se guardan aqui
//ya que sera necesario tenerlas en un array
//para bindear el boton de "Agregar al carrito"
//a cada figura
const arrayFiltered = [];

//Muestra las figuras
const showCards = (array) => {
    for (const element of array) {
        mainContainer.innerHTML += 
        `<div class="col-md-3 card p-0 my-2 mx-2">
            <img src="${element.img}" alt="">
            <div class="card-body">
                <h4 class="card-title">${element.nombre}</h4>
                <h5>$${element.priceWithTaxes()}</h5>
                <button type="button" class="btn btn-primary btnCart"
                id="${element.id}">Agregar al carrito</button>
            </div>
        </div>`
    }
};

//Muestra las figuras filtradas
const showFiguresFiltered = (word) => {
    arrayFiltered.length = 0;
    //Se vacia el contenedor principal para mostrar
    //solo lo que la persona busca filtrando el array principal
    //que funciona como base de datos
    mainContainer.innerHTML='';
    figures.filter((element)=>element.tags.includes(word)).forEach(element => {
        arrayFiltered.push(element);
    });

    //En caso de encontrar los renderiza, en caso de no encontrar
    //le avisa de manera sencilla al cliente que no hay lo que esta buscando
    if(arrayFiltered == ''){
        mainContainer.innerHTML += 
        `<div class="text-light bg-dark info">
        <h3>No se encontraron los productos x_x</h3>
        </div>`
    }
    //Si todo esta ok con la palabra buscada y esta relacionada con las figuras
    //se muestran las figuras relacionadas
    showCards(arrayFiltered);
}

//Esta funcion asincrona permite abrir un modal
//para poder elegir la cantidad de figuras a comprar
const chooseQuantity = async (element) => {
    const {value : value} = await Swal.fire({
        title: `¿Cuantas figuras de ${element.nombre} quiere?`,
        input: 'select',
        inputOptions: {1:'1', 2:'2', 3:'3', 4:'4', 5:'5' },
        inputPlaceholder: 'Elija una cantidad',
        showCancelButton: true,
        inputValidator: (value) => {
          return new Promise((resolve) => {
            if (value<=5 || value>=1) {
              resolve()
            } else {
              resolve('Seleccione un valor correcto')
            }
          })
        }
      })
    if (value == 1) {
        Swal.fire(`Se agregó ${value} figura al carrito`);
    } else if (value>1) {
        Swal.fire(`Se agregaron ${value} figuras al carrito`)
    }
    //El !localStorage.getItem() se usa para no modificar la cantidad que hay en el carrito
    if(value<=5 && value>=1){
        //Se selecciona la figura del array que tenemos en la tienda
        const figureToAdd = figures[(element.id-1)];
        //Se le modifica la cantidad que se quiere agregar al carrito
        figureToAdd.changeQuantity(value);
        //Y se agrega al localStorage ya modificada la cantidad
        localStorage.setItem(element.id, JSON.stringify(figureToAdd));
        updateStorageToCart();
        calcPrice();
        //Se vuelve la cantidad de nuevo a 1 para evitar acumulaciones al agregar y quitar
        //la figura del carrito (no sabia como resolverlo de otra manera :c)
        figureToAdd.cantidad=1;
    }
}

//Asigna el evento de AGREGAR a localStorage a cada boton
const btnCartAddEvent = () => {
    for (const element of btnCart) {
        element.addEventListener('click', () => {
            if(!localStorage.getItem(element.id)){
                chooseQuantity(element);
            } else {
                Swal.fire({
                    title: 'Ya tienes la figura en el carrito!',
                    text: '¿Quieres cambiar la cantidad?',
                    showCancelButton: true,
                    confirmButtonText: 'Cambiar',
                    }).then( async (result) => {
                    if (result.isConfirmed) {
                        //Si la persona elige cambiar la cantidad
                        //se ejecuta nuevamente la funcion de cambiar la cantidad
                        chooseQuantity(element);
                    } 
                })
            }
        });
    }
}
//Asigna el evento de QUITAR de localStorage a cada boton
const btnCartOutEvent = () => {
    for (const element of btnCartOut) {
        element.addEventListener('click', () => {
            localStorage.removeItem(element.id);
            updateStorageToCart();
            calcPrice();
            printCart();
        });
    };
};

//Esta funcion ACTUALIZA las figuras del carrito segun 
//el localStorage y las agrega desde figures[] segun su id
//para no perder el metodo que calcula el impuesto
const updateStorageToCart = () => {
    cart.length = 0;
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if(!isNaN(parseInt(key))){
            let quantity = JSON.parse(localStorage.getItem(key)).cantidad;
            console.log(quantity); //Al estar dentro del for, el clg lee todas las cantidades y las imprime
            //////////////Aqui hay que agregar la cantidad de figuras... creo
            //////////////Segun indique el localStorage
            //////////////Lo que esta pasando es que se agregan del array de figures donde la cantidad es 1
            cart.push(figures[key-1]);
        }  
    }
}

//Calcula el precio final
const calcPrice = () => {
    if(cart.length > 0) {
        //Se crea un array que se le acumularan los precios de las figuras
        //multiplicado por la cantidad que la persona quiera agregar
        const arrayPrices = [];
        for (const element of cart) {
            arrayPrices.push(element.priceWithTaxes());
        }
        finalPrice = arrayPrices.reduce((acc,el)=>acc + el, 0);
    } else finalPrice = 0;
    cartPrice.innerHTML = `$${finalPrice}`
};

//Imprime en pantalla lo que contenga el carrito
const printCart = () => {
    mainContainer.innerHTML = '';
    for (const element of cart) {
        mainContainer.innerHTML += 
        `<div class="col-md-3 card p-0 my-2 mx-2">
            <img src="${element.img}" alt="">
            <div class="card-body">
                <h4 class="card-title">${element.nombre}</h4>
                <h5>$${element.priceWithTaxes()}</h5>
                <button class="btn btn-danger btnCartOut" id="${element.id}">Quitar del carrito</button>
                <p>x${element.cantidad}</p>
            </div>
        </div>`
    }
    
    if(cart.length == 0) {
        mainContainer.innerHTML += `<div class="text-light bg-dark info">
        <h3>No tienes nada en el carrito!</h3>
        </div>`
    }
    btnCartOutEvent();

};

const mainContainer = document.getElementById('mainContainer');
const search = document.getElementById('search');
const cartPrice = document.getElementById('cartPrice');
const btnCart = document.getElementsByClassName('btnCart');
const cartView = document.getElementById('cartView');
const btnCartOut = document.getElementsByClassName('btnCartOut');
const logoHome = document.getElementById('logoHome');


//Muestra todas las figuras
showCards(figures);
btnCartAddEvent();
btnCartOutEvent();
updateStorageToCart();
calcPrice();

//Agrega el volver a ver todas las figuras del inicio
logoHome.addEventListener('click', ()=>{
    mainContainer.innerHTML='';
    arrayFiltered.length = 0;
    showCards(figures);
    btnCartAddEvent();
});

//Escucha el buscador y renderiza segun la busqueda
search.addEventListener('keypress', (e)=>{
    if(e.key === 'Enter') {
        //Se realiza la busqueda si al menos hay un caracter
        //en caso de no haber ningun caracter carga todas las figuras
        //y se bindea el boton segun su indice a su figura
        if(search.value.length>0) {
            showFiguresFiltered(search.value.toLowerCase());
            btnCartAddEvent();
        } else {
            mainContainer.innerHTML='';
            arrayFiltered.length = 0;
            showCards(figures);
            btnCartAddEvent();
        }
    }
});

//Escucha al logo del carrito y carga lo que la persona tenga en el carrito
//segun el localStorage
cartView.addEventListener('click', () => {
    printCart();
});