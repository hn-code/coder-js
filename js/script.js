//Figuras a comprar
const figuresOnShop = [
    {
        id: 1,
        nombre: 'Goku SSJ3',
        precio: 160,
        light: true,
        tags: ['goku', 'ssj3', 'light', 'led', 'dbz'],
        img: './img/Goku/goku1.jpg'
    },
    {
        id: 2,
        nombre: 'Goku Ultra Instinct',
        precio: 200,
        light: true,
        tags: ['goku', 'ui', 'light', 'led', 'dbs', 'ultra instinct'],
        img: './img/Goku/goku2.jpg'
    },
    {
        id: 3,
        nombre: 'Goku SSJ2',
        precio: 200,
        light: false,
        tags: ['goku', 'ssj2', 'dbz'],
        img: './img/Goku/goku3.jpg'
    },
    {
        id: 4,
        nombre: 'Goku Genkidama',
        precio: 190,
        light: true,
        tags: ['goku', 'genkidama', 'light', 'led', 'dbz'],
        img: './img/Goku/goku4.jpg'
    },
    {
        id: 5,
        nombre: 'Majin Vegeta',
        precio: 200,
        light: false,
        tags: ['vegeta', 'ssj2', 'majin', 'dbz'],
        img: './img/Vegeta/vegeta1.jpg'
    },
    {
        id: 6,
        nombre: 'Vegeta Big Bang Attack', 
        precio: 230,
        light: true,
        tags: ['vegeta', 'ssj', 'big', 'bang', 'dbz', 'light', 'led'],
        img: './img/Vegeta/vegeta2.jpg'
    },
    {
        id: 7,
        nombre: 'Vegeta Final Flash',
        precio: 160,
        light: false,
        tags: ['vegeta', 'ssj', 'final', 'flash', 'dbz'],
        img: './img/Vegeta/vegeta3.jpg'
    },
    {
        id: 8,
        nombre: 'Vegeta SSJB',
        precio: 100,
        light: false,
        tags: ['vegeta', 'ssjb', 'dbs'],
        img: './img/Vegeta/vegeta4.jpg'
    },
    {
        id: 9,
        nombre: 'Broly Berserk Fists',
        precio: 220,
        light: true,
        tags: ['broly', 'green', 'berserk', 'dbs', 'light', 'led', 'fist', 'fists'],
        img: './img/Broly/broly1.jpg'
    },
    {
        id: 10,
        nombre: 'Broly SSJ',
        precio: 130,
        light: false,
        tags: ['broly', 'berserk', 'dbs', 'ssj'],
        img: './img/Broly/broly2.jpg'
    },
    {
        id: 11,
        nombre: 'Broly Omega Blaster',
        precio: 230,
        light: true,
        tags: ['broly', 'green', 'berserk', 'dbz', 'light', 'led', 'omega', 'blaster'],
        img: './img/Broly/broly3.jpg'
    },
    {
        id: 12,
        nombre: 'Broly SSJL',
        precio: 200,
        light: true,
        tags: ['broly', 'green', 'berserk', 'dbz', 'light', 'led', 'legendary', 'ssjl'],
        img: './img/Broly/broly4.jpg'
    },
    {
        id: 13,
        nombre: 'Vegetto SSJB Final Kamehameha',
        precio: 180,
        light: true,
        tags: ['vegetto', 'final', 'kamehameha', 'ssjb', 'dbs'],
        img: './img/Vegetto/vegetto1.jpg'
    },
    {
        id: 14,
        nombre: 'Vegetto Kick', 
        precio: 120,
        light: false,
        tags: ['vegetto', 'kick', 'ssj', 'dbz'],
        img: './img/Vegetto/vegetto2.jpg'
    },
    {
        id: 15,
        nombre: 'Vegetto SSJB', 
        precio: 130,
        light: false,
        tags: ['vegetto', 'ssjb', 'dbs'],
        img: './img/Vegetto/vegetto3.jpg'
    },
    {
        id: 16,
        nombre: 'Vegetto SSJB Ki Sword', 
        precio: 150,
        light: false,
        tags: ['vegetto', 'ki', 'sword', 'ssjb', 'dbs'],
        img: './img/Vegetto/vegetto4.jpg'
    },
    {
        id: 17,
        nombre: 'Gogeta Stardust Breaker', 
        precio: 220,
        light: true,
        tags: ['gogeta', 'ssj', 'stardust', 'breaker', 'dbz' ,'light', 'led'],
        img: './img/Gogeta/gogeta1.jpg'
    },
    {
        id: 18,
        nombre: 'Gogeta SSJ4 Kamehameha',
        precio: 190,
        light: true,
        tags: ['gogeta', 'ssj4', 'kamehameha', 'dbgt', 'light', 'led'],
        img: './img/Gogeta/gogeta2.jpg'
    },
    {
        id: 19,
        nombre: 'Gogeta SSJB',
        precio: 100,
        light: false,
        tags: ['gogeta', 'ssjb', 'dbs'],
        img: './img/Gogeta/gogeta3.jpg'
    },
    {
        id: 20,
        nombre: 'Gogeta SSJB Stardust Breaker',
        precio: 250,
        light: true,
        tags: ['gogeta', 'ssjb', 'stardust', 'breaker', 'dbs', 'light', 'led'],
        img: './img/Gogeta/gogeta4.jpg'
    },
    {
        id: 21,
        nombre: 'Gohan Kaio',
        precio: 130,
        light: false,
        tags: ['gohan', 'kaio', 'dbz'],
        img: './img/Gohan/gohan1.jpg'
    },
    {
        id: 22,
        nombre: 'Future Gohan',
        precio: 120,
        light: false,
        tags: ['gohan', 'future', 'ssj'],
        img: './img/Gohan/gohan2.jpg'
    },
    {
        id: 23,
        nombre: 'Ultimate Gohan',
        precio: 140,
        light: false,
        tags: ['gohan', 'ultimate', 'dbz'],
        img: './img/Gohan/gohan3.jpg'
    },
    {
        id: 24,
        nombre: 'Goku-Gohan Father-Son Kamehameha',
        precio: 200,
        light: true,
        tags: ['gohan', 'goku', 'father', 'son', 'kamehameha', 'dbz', 'light', 'led'],
        img: './img/Gohan/gohan4.jpg'
    },
    {
        id: 25,
        nombre: 'Future Trunks',
        precio: 130,
        light: false,
        tags: ['trunks', 'future', 'dbz'],
        img: './img/Trunks/trunks1.jpg'
    },
    {
        id: 26,
        nombre: 'Future Trunks LH',
        precio: 140,
        light: false,
        tags: ['trunks', 'future', 'dbz'],
        img: './img/Trunks/trunks2.jpg'
    },
    {
        id: 27,
        nombre: 'Future Trunks SSJ Ki',
        precio: 150,
        light: false,
        tags: ['trunks', 'future', 'ssj', 'ki'],
        img: './img/Trunks/trunks3.jpg'
    },
    {
        id: 28,
        nombre: 'Future Trunks SSJ Sword Attack', 
        precio: 140,
        light: false,
        tags: ['trunks', 'future', 'ssj', 'sword', 'attack'],
        img: './img/Trunks/trunks4.jpg'
    }
];

//Se crea una clase con un constructor que 
//permite tener metodos relacionados a las figuras
//en este caso el aumento del impuesto al producto
class Figure {
    constructor (id, nombre, precio, light, tags, img) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.light = light;
        this.tags = tags;
        this.img = img;
    }
    priceWithTaxes(){
        return Math.round(this.precio*1.22);
    }
}

//Se almacenan las figuras en un array para no trabajarlas
//directamente de la fuente desde donde se esten trayendo y permitiendole
//crear a cada objeto sus propios metodos como el priceWithTaxes() por ejemplo
const figures = [];
for (const i of figuresOnShop) {
    const figure = new Figure (i.id, i.nombre, i.precio, i.light, i.tags, i.img)
    figures.push(figure);
}

//Carrito
const cart = [];
let finalPrice = 0;
//En caso de filtrar figuras se guardan aqui
//ya que sera necesario tenerlas en un array
//para bindear el boton de "Agregar al carrito"
//a cada figura
const arrayFiltrado = [];

//Muestra las figuras
const showFigures = () => {
    arrayFiltrado.length = 0;
    for (const element of figures) {
        mainContainer.innerHTML += 
        `<div class="col-md-3 card p-0 my-2 mx-2">
            <img src="${element.img}" alt="">
            <div class="card-body">
                <h4 class="card-title">${element.nombre}</h4>
                <h5>$${element.priceWithTaxes()}</h5>
                <button class="btn btn-primary btnCart" id="${element.id}">Agregar al carrito</button>
                <input type="number" id="quantity${element.id}" name="quantity" min="1" max="5">
            </div>
        </div>`
    }
}

//Muestra las figuras filtradas
const showFiguresFiltered = (word) => {
    arrayFiltrado.length = 0;
    //Se vacia el contenedor principal para mostrar
    //solo lo que la persona busca filtrando el array principal
    //que funciona como base de datos
    mainContainer.innerHTML='';
    figures.filter((element)=>element.tags.includes(word)).forEach(element => {
        arrayFiltrado.push(element);
    });

    //En caso de encontrar los renderiza, en caso de no encontrar
    //le avisa de manera sencilla al cliente que no hay lo que esta buscando
    /************************************************************************************************************** */
    /************************************************************************************************************** */
    /************************************************************************************************************** */
    if(arrayFiltrado==''){
        mainContainer.innerHTML=
        `<div class="text-light bg-dark">
            <h3>No se encontraron los productos x_x</h3>
        </div>`
    }

    //Estupido error 
    arrayFiltrado == '' && mainContainer = `<div class="text-light bg-dark">
    <h3>No se encontraron los productos x_x</h3>
    </div>`
    /************************************************************************************************************** */
    /************************************************************************************************************** */
    /************************************************************************************************************** */
    for (const element of arrayFiltrado) {
        mainContainer.innerHTML += 
        `<div class="col-md-3 card p-0 my-2 mx-2">
            <img src="${element.img}" alt="">
            <div class="card-body">
                <h4 class="card-title">${element.nombre}</h4>
                <h5>$${element.priceWithTaxes()}</h5>
                <button class="btn btn-primary btnCart" id="${element.id}">Agregar al carrito</button>
                <input type="number" id="quantity" name="quantity" min="1" max="5">
            </div>
        </div>`
    }
}

//Asigna el evento de AGREGAR a sessionStore a cada boton
const btnCartAddEvent = () => {
    for (const element of btnCart) {
        element.addEventListener('click', () => {
            //Se guarda la figura que el usuario selecciono en el sessionStorage
            sessionStorage.setItem(element.id, JSON.stringify(figures[(element.id-1)]));
            updateStorageToCart();
            calcPrice();
        });
    }
}
//Asigna el evento de QUITAR de sessionStore a cada boton
const btnCartOutEvent = () => {
    for (const element of btnCartOut) {
        element.addEventListener('click', () => {
            sessionStorage.removeItem(element.id);
            updateStorageToCart();
            calcPrice();
            printCart();
        });
    };
};

//Esta funcion ACTUALIZA las figuras del carrito segun 
//el sessionStore y las agrega desde figures[] segun su id
//para no perder el metodo que calcula el impuesto
const updateStorageToCart = () => {
    cart.length = 0;
    for (let i = 0; i < sessionStorage.length; i++) {
        let key = sessionStorage.key(i);
        if(!isNaN(parseInt(key))){
            cart.push(figures[key-1]);
        }
    }
}

//Calcula el precio final
const calcPrice = () => {
    if(cart.length > 0) {
        for (const it of cart) {
            finalPrice = cart.reduce((acc,el)=>acc + el.priceWithTaxes(), 0);
        }
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
            </div>
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
showFigures();
btnCartAddEvent();
btnCartOutEvent();

//Agrega el volver a ver todas las figuras del inicio
logoHome.addEventListener('click', ()=>{
    mainContainer.innerHTML='';
    showFigures();
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
            showFigures();
            btnCartAddEvent();
        }
    }
});

//Escucha al logo del carrito y carga lo que la persona tenga en el carrito
//segun el sessionStorage
cartView.addEventListener('click', () => {
    printCart();
});