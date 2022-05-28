//Figuras a comprar
const figuresOnShop = [
    {
        nombre: 'Goku SSJ3',
        precio: 210,
        ligth: true,
        tags: ['goku', 'ssj3', 'light', 'led', 'dbz'],
        img: './img/Goku/goku1.jpg'
    },
    {
        nombre: 'Goku Ultra Instinct',
        precio: 250,
        ligth: true,
        tags: ['goku', 'ui', 'light', 'led', 'dbs', 'ultra instinct'],
        img: './img/Goku/goku2.jpg'
    },
    {
        nombre: 'Goku SSJ2',
        precio: 250,
        light: false,
        tags: ['goku', 'ssj2', 'dbz'],
        img: './img/Goku/goku3.jpg'
    },
    {
        nombre: 'Goku Genkidama',
        precio: 240,
        light: true,
        tags: ['goku', 'genkidama', 'light', 'led', 'dbz'],
        img: './img/Goku/goku4.jpg'
    },
    {
        nombre: 'Majin Vegeta',
        precio: 250,
        light: false,
        tags: ['vegeta', 'ssj2', 'majin', 'dbz'],
        img: './img/Vegeta/vegeta1.jpg'
    },
    {
        nombre: 'Vegeta Big Bang Attack', 
        precio: 280,
        light: true,
        tags: ['vegeta', 'ssj', 'big', 'bang', 'dbz', 'light', 'led'],
        img: './img/Vegeta/vegeta2.jpg'
    },
    {
        nombre: 'Vegeta Final Flash',
        precio: 200,
        light: false,
        tags: ['vegeta', 'ssj', 'final', 'flash', 'dbz'],
        img: './img/Vegeta/vegeta3.jpg'
    },
    {
        nombre: 'Vegeta SSJB',
        precio: 140,
        light: false,
        tags: ['vegeta', 'ssjb', 'dbs'],
        img: './img/Vegeta/vegeta4.jpg'
    },
    {
        nombre: 'Broly Berserk Fists',
        precio: 270,
        light: true,
        tags: ['broly', 'green', 'berserk', 'dbs', 'light', 'led', 'fist', 'fists'],
        img: './img/Broly/broly1.jpg'
    },
    {
        nombre: 'Broly SSJ',
        precio: 180,
        light: false,
        tags: ['broly', 'berserk', 'dbs', 'ssj'],
        img: './img/Broly/broly2.jpg'
    },
    {
        nombre: 'Broly Omega Blaster',
        precio: 280,
        ligth: true,
        tags: ['broly', 'green', 'berserk', 'dbz', 'light', 'led', 'omega', 'blaster'],
        img: './img/Broly/broly3.jpg'
    },
    {
        nombre: 'Broly SSJL',
        precio: 250,
        light: true,
        tags: ['broly', 'green', 'berserk', 'dbz', 'light', 'led', 'legendary', 'ssjl'],
        img: './img/Broly/broly4.jpg'
    },
    {
        nombre: 'Vegetto SSJB Final Kamehameha',
        precio: 200,
        ligth: true,
        tags: ['vegetto', 'final', 'kamehameha', 'ssjb', 'dbs'],
        img: './img/Vegetto/vegetto1.jpg'
    },
    {
        nombre: 'Vegetto Kick', 
        precio: 150,
        light: false,
        tags: ['vegetto', 'kick', 'ssj', 'dbz'],
        img: './img/Vegetto/vegetto2.jpg'
    },
    {
        nombre: 'Vegetto SSJB', 
        precio: 170,
        light: false,
        tags: ['vegetto', 'ssjb', 'dbs'],
        img: './img/Vegetto/vegetto3.jpg'
    },
    {
        nombre: 'Vegetto SSJB Ki Sword', 
        precio: 200,
        light: false,
        tags: ['vegetto', 'ki', 'sword', 'ssjb', 'dbs'],
        img: './img/Vegetto/vegetto4.jpg'
    },
    {
        nombre: 'Gogeta Stardust Breaker', 
        precio: 270,
        light: true,
        tags: ['gogeta', 'ssj', 'stardust', 'breaker', 'dbz' ,'light', 'led'],
        img: './img/Gogeta/gogeta1.jpg'
    },
    {
        nombre: 'Gogeta SSJ4 Kamehameha',
        precio: 240,
        light: true,
        tags: ['gogeta', 'ssj4', 'kamehameha', 'dbgt', 'light', 'led'],
        img: './img/Gogeta/gogeta2.jpg'
    },
    {
        nombre: 'Gogeta SSJB',
        precio: 150,
        light: false,
        tags: ['gogeta', 'ssjb', 'dbs'],
        img: './img/Gogeta/gogeta3.jpg'
    },
    {
        nombre: 'Gogeta SSJB Stardust Breaker',
        precio: 320,
        ligth: true,
        tags: ['gogeta', 'ssjb', 'stardust', 'breaker', 'dbs', 'light', 'led'],
        img: './img/Gogeta/gogeta4.jpg'
    },
    {
        nombre: 'Gohan Kaio',
        precio: 180,
        light: false,
        tags: ['gohan', 'kaio', 'dbz'],
        img: './img/Gohan/gohan1.jpg'
    },
    {
        nombre: 'Future Gohan',
        precio: 170,
        light: false,
        tags: ['gohan', 'future', 'ssj'],
        img: './img/Gohan/gohan2.jpg'
    },
    {
        nombre: 'Ultimate Gohan',
        precio: 190,
        light: false,
        tags: ['gohan', 'ultimate', 'dbz'],
        img: './img/Gohan/gohan3.jpg'
    },
    {
        nombre: 'Goku-Gohan Father-Son Kamehameha',
        precio: 250,
        light: true,
        tags: ['gohan', 'goku', 'father', 'son', 'kamehameha', 'dbz', 'light', 'led'],
        img: './img/Gohan/gohan4.jpg'
    },
    {
        nombre: 'Future Trunks',
        precio: 180,
        light: false,
        tags: ['trunks', 'future', 'dbz'],
        img: './img/Trunks/trunks1.jpg'
    },
    {
        nombre: 'Future Trunks LH',
        precio: 190,
        light: false,
        tags: ['trunks', 'future', 'dbz'],
        img: './img/Trunks/trunks2.jpg'
    },
    {
        nombre: 'Future Trunks SSJ Ki',
        precio: 200,
        light: false,
        tags: ['trunks', 'future', 'ssj', 'ki'],
        img: './img/Trunks/trunks3.jpg'
    },
    {
        nombre: 'Future Trunks SSJ Sword Attack', 
        precio: 190,
        light: false,
        tags: ['trunks', 'future', 'ssj', 'sword', 'attack'],
        img: './img/Trunks/trunks4.jpg'
    }
];
//Carrito
const cart = [];

const divGallery = document.getElementById('mainContainer');


for (const element of figuresOnShop) {
    divGallery.innerHTML += 
    `<div class="card p-0 my-2 mx-2">
        <img src="${element.img}" alt="">
        <div class="card-body">
            <h4 class="card-title">${element.nombre}</h4>
            <h5>$${element.precio}</h5>
            <button class="btn btn-primary">Agregar al carrito</button>
        </div>
    </div>`
}