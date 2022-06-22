//Se hace un fetch a una base de datos de Firebase
//y se guardan las figuras en un array llamado dbFiguresFirebase
//para trabajar con ellas
const getFirebase = async () => {
  const response = await fetch(urlDB);
  const data = await response.json();
  for (const i of data) {
    const figure = new Figure(
      i.id,
      i.nombre,
      i.precio,
      i.light,
      i.tags,
      i.img,
      i.cantidad
    );
    dbFiguresFirebase.push(figure);
  }
  showCards(dbFiguresFirebase, 'Figuras');
  btnCartAddEvent();
  btnCartOutEvent();
  updateStorageToCart();
  calcPrice();
};

//Se crea una clase con un constructor que
//permite tener metodos relacionados a las figuras
//en este caso el aumento del impuesto al producto
class Figure {
  constructor(id, nombre, precio, light, tags, img, cantidad) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.light = light;
    this.tags = tags;
    this.img = img;
    this.cantidad = cantidad;
  }
  priceWithTaxes() {
    return Math.round(this.precio * 1.22);
  }
  changeQuantity(n) {
    this.cantidad = this.cantidad * n;
  }
}

//Array donde se guardan los objetos traidos de la base de datos
//y ya modificados para que no sean "objetos" sino "Figuras" (convertidos a esa clase)
//para permitirle usar los diferentes metodos con los que cuentan cada figura
const dbFiguresFirebase = [];

//Carrito
const cart = [];
let finalPrice = 0;
let valueSelected = 0;

//URL de la base de datos con JSON
const urlDB = "https://tiendaz-7b058-default-rtdb.firebaseio.com/figures.json";

//En caso de filtrar figuras se guardan aqui
//ya que sera necesario tenerlas en un array
//para bindear el boton de "Agregar al carrito"
//a cada figura
const arrayFiltered = [];

//Muestra las figuras
const showCards = (array, section) => {
  if(section) {
    mainContainer.innerHTML += `<p class="sectionTitle">${section}</p>`
  }
  for (const element of array) {
    mainContainer.innerHTML += `<div class="col-md-3 card p-0 my-2 mx-2">
            <img src="${element.img}" alt="">
            <div class="card-body">
                <h4 class="card-title">${element.nombre}</h4>
                <h5>$${element.priceWithTaxes()}</h5>
                <button type="button" class="btn btn-primary btnCart"
                id="${element.id}">Agregar al carrito</button>
            </div>
        </div>`;
  }
};

//Muestra las figuras filtradas
const showFiguresFiltered = (word) => {
  arrayFiltered.length = 0;
  //Se vacia el contenedor principal para mostrar
  //solo lo que la persona busca filtrando el array principal
  mainContainer.innerHTML = "";
  dbFiguresFirebase
    .filter((element) => element.tags.includes(word))
    .forEach((element) => {
      arrayFiltered.push(element);
    });

  //En caso de encontrar los renderiza, en caso de no encontrar
  //le avisa de manera sencilla al cliente que no hay lo que esta buscando
  if (arrayFiltered == "") {
    mainContainer.innerHTML += `<div class="text-light info">
            <p>No se encontraron los productos (x_x)</p>
        </div>`;
  } else {
    //Si todo esta ok con la palabra buscada y esta relacionada con las figuras
    //se muestran las figuras relacionadas
    showCards(arrayFiltered, 'Figuras Encontradas');
  }
  
};

//Esta funcion asincrona permite abrir un modal
//para poder elegir la cantidad de figuras a comprar
const chooseQuantity = async (element) => {
  const { value: value } = await Swal.fire({
    title: `¿Cuantas figuras de ${
      dbFiguresFirebase[parseInt(element.id) - 1].nombre
    } quiere?`,
    input: "select",
    inputOptions: { 1: "1", 2: "2", 3: "3", 4: "4", 5: "5" },
    inputPlaceholder: "Elija una cantidad",
    confirmButtonColor: "#0d6efd",
    showCancelButton: true,
    cancelButtonText: "Cancelar",
    inputValidator: (value) => {
      return new Promise((resolve) => {
        if (value <= 5 || value >= 1) {
          resolve();
        } else {
          resolve("Seleccione un valor correcto");
        }
      });
    },
  });
  if (value == 1) {
    Swal.fire({
      icon: "success",
      title: `Se agregó ${value} figura al carrito`,
      confirmButtonColor: "#0d6efd",
    });
  } else if (value > 1) {
    Swal.fire({
      icon: "success",
      title: `Se agregaron ${value} figuras al carrito`,
      confirmButtonColor: "#0d6efd",
    });
  }
  //El !localStorage.getItem() se usa para no modificar la cantidad que hay en el carrito
  if (value <= 5 && value >= 1) {
    //Se selecciona la figura del array que tenemos en la tienda
    const figureToAdd = dbFiguresFirebase[element.id - 1];
    //Se le modifica la cantidad que se quiere agregar al carrito
    figureToAdd.changeQuantity(value);
    //Se le agrega una propiedad llamada priceForQuantity
    figureToAdd.priceForQuantity =
      figureToAdd.priceWithTaxes() * figureToAdd.cantidad;
    //Y se agrega al localStorage ya modificada la cantidad
    localStorage.setItem(element.id, JSON.stringify(figureToAdd));
    updateStorageToCart();
    calcPrice();
    //Se vuelve la cantidad de nuevo a 1 para evitar acumulaciones al agregar y quitar
    //la figura del carrito (no sabia como resolverlo de otra manera :c)
    figureToAdd.cantidad = 1;
  }
};

//Asigna el evento de AGREGAR a localStorage a cada boton
const btnCartAddEvent = () => {
  for (const element of btnCart) {
    element.addEventListener("click", () => {
      if (!localStorage.getItem(element.id)) {
        chooseQuantity(element);
      } else {
        Swal.fire({
          title: "Ya tienes la figura en el carrito!",
          text: "¿Quieres cambiar la cantidad?",
          showCancelButton: true,
          cancelButtonText: "Cancelar",
          confirmButtonColor: "#0d6efd",
          confirmButtonText: "Cambiar",
        }).then(async (result) => {
          //Si la persona elige cambiar la cantidad
          //se ejecuta nuevamente la funcion de cambiar la cantidad - sugar syntax
          result.isConfirmed && chooseQuantity(element);
        });
      }
    });
  }
};
//Asigna el evento de QUITAR de localStorage a cada boton
const btnCartOutEvent = () => {
  for (const element of btnCartOut) {
    element.addEventListener("click", () => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Se quitó la figura del carrito`,
        showConfirmButton: false,
        timer: 1500,
      });
      localStorage.removeItem(element.id);
      updateStorageToCart();
      calcPrice();
      printCart();
    });
  }
};

//Esta funcion ACTUALIZA las figuras del carrito segun
//el localStorage
const updateStorageToCart = () => {
  cart.length = 0;
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    //Aqui se agregan al carrito - sugar syntax
    !isNaN(parseInt(key)) && cart.push(JSON.parse(localStorage.getItem(key)));
  }
};

//Calcula el precio final
const calcPrice = () => {
  if (cart.length > 0) {
    //Se crea un array que se le acumularan los precios de las figuras
    //multiplicado por la cantidad que la persona quiera agregar
    const arrayPrices = [];
    for (const element of cart) {
      arrayPrices.push(element.priceForQuantity);
    }
    finalPrice = arrayPrices.reduce((acc, el) => acc + el, 0);
  } else finalPrice = 0;
  cartPrice.innerHTML = `$${finalPrice}`;
};

//Imprime en pantalla lo que contenga el carrito
const printCart = () => {
  mainContainer.innerHTML = "";
  if (cart.length == 0) {
    mainContainer.innerHTML += `<div class="text-light info">
        <p>No tienes nada en el carrito (u_u)</p>
        </div>`;
  } else {
    mainContainer.innerHTML += '<p class="sectionTitle">Carrito</p>'
    for (const element of cart) {
      mainContainer.innerHTML += `<div class="col-md-3 card p-0 my-2 mx-2">
              <img src="${element.img}" alt="">
              <div class="card-body">
                  <h4 class="card-title">${element.nombre}</h4>
                  <h5>$${element.priceForQuantity / element.cantidad}</h5>
                  <button class="btn btn-danger btnCartOut" id="${
                    element.id
                  }">Quitar del carrito</button>
                  <h5>x${element.cantidad}</h5>
              </div>
          </div>`;
      }
    }
  btnCartOutEvent();
};

//Funcion que se encarga de procesar un 
//pago con tarjeta de credito
const paymentWithCard = (payCard) => {
  payCard.addEventListener("click", () => {
    //Formulario para completar los datos de la tarjeta de credito
    mainContainer.innerHTML = `
    <button class="backBtn btn-warning" id="backBtn">Atras</button>
      <div class="payContainerCard">
      <form>
        <input type="text" class="nameForm" placeholder="Titular" id="nameCard"></input>
        <input type="text" class="creditCardNum" placeholder="N° de tarjeta" id="numberCard"></input>
        <div>
          <select type="select" class="creditCardMonth" placeholder="Month" id="selectMonth"></select>
          <select type="select" class="creditCardYear" placeholder="Year" id="selectYear"></select>
          <input type="text" class="creditCardCode" placeholder="CVV" maxlength="4" id="cvvCard"></input>
        </div>
        <button type="submit" id="btnConfirm" class="btn-primary p-2 mt-5 btnConfirm">Confirmar Compra</button>
      </form>
      <div class="paymentReceipt">
        <img src="./img/logo.png" alt="logo de la tienda">
        <p id="paymentReceiptList"></p>
        <p class="paymentPrice">$${finalPrice}</p>
      </div>
      </div>`;
    
      const nameCard = document.getElementById('nameCard');
      const numberCard = document.getElementById('numberCard');
      const cvvCard = document.getElementById('cvvCard');
      const selectMonth = document.getElementById('selectMonth');
      const selectYear = document.getElementById('selectYear');
      const paymentReceiptList = document.getElementById('paymentReceiptList');
      const btnConfirm = document.getElementById('btnConfirm');
      const backBtn = document.getElementById('backBtn');
        backBtn.addEventListener('click', () => {
          choosePaymentMethod();
        });

      month.forEach(el => {
        let option = `<option>${el}</option>`;
        selectMonth.innerHTML += option;
      });

      year.forEach(el => {
        let option = `<option>${el}</option>`;
        selectYear.innerHTML += option;
      })
    
      //Se le asigna el estilo de N° de tarjeta de credito con la libreria CleaveJs
      new Cleave(".creditCardNum", {
        creditCard: true,
      });

      cart.forEach(el => {
        paymentReceiptList.innerHTML += `<p> - ${el.nombre} x${el.cantidad} --- ${el.priceForQuantity}<p>`;
      });

      //Se simula una validacion de una tarjeta de credito a muy groso modo
      btnConfirm.addEventListener('click', (e) => {
        e.preventDefault();
        if(nameCard.value.length<1 || cvvCard.value.length<3 || numberCard.value.length<16){
            Toast = Swal.mixin({
            toast: true,
            position: 'center',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
          })
          Toast.fire({
            icon: 'error',
            title: 'Campos no válidos'
          });
        } else {
          Swal.fire({
            title: 'Chequeando la tarjeta',
            html: 'Comprobando que los datos sean válidos',
            timer: 5000,
            showConfirmButton: false,
            timerProgressBar: true,
          }).then(()=>{
            Swal.fire({
              icon: 'success',
              title: 'Finalizado!',
              html: 'Gracias por su compra!',
              showConfirmButton: true
            })
          }).then( () => {
            localStorage.clear();
            updateStorageToCart();
            calcPrice();
            mainContainer.innerHTML = '';
            showCards(dbFiguresFirebase, 'Figuras');
            btnCartAddEvent();
            btnCartOutEvent();
          })
        }
      });
      backBtn.addEventListener('click', () => {
      });
  });
}

//Funcion que se encarga de dar los datos de la 
//cuenta bancaria para hacer un deposito
const paymentWithBank = (payBank) => {
  payBank.addEventListener("click", () => {
    //Pago con cuenta de banco
    mainContainer.innerHTML = `
    <button class="backBtn btn-warning" id="backBtn">Atras</button>
    <div class="payContainerBank">
    <div class="infoBank">
      <p>Depósito Cuenta Bancaria:</p>
      <p>Para realizar la transferencia basta con que realice el depósito y nos envíe via mail o Whatsapp el comprobante de depósito.</p>
      <p>Una vez confirmada la compra, se le reserva su contenido del carrito de compras por 72hs, de no haberse abonado el depósito, estas volverán al stock de la tienda</p>
      <p>Nuestro número de cuenta es: <p><b>N° 03-03-456-11111</b></p></p>
      <p>Nuestro mail es: <p><b>tiendaz@uncorreofalso.com</b></p></p>
      <p>Nuestro Whatsapp es: <p><b>(+123) 45678910</b></p></p>
      <button type="submit" id="btnConfirm" class="btn-primary p-2 btnConfirm">Confirmar Compra</button>
    </div>
    <div class="paymentReceipt">
      <img src="./img/logo.png" alt="logo de la tienda">
      <p id="paymentReceiptList"></p>
      <p class="paymentPrice">$${finalPrice}</p>
      </div>
    </div>
    `;

    const paymentReceiptList = document.getElementById('paymentReceiptList');
    const backBtn = document.getElementById('backBtn');
    const btnConfirm = document.getElementById('btnConfirm');

    //Informacion del recibo
    cart.forEach(el => {
      paymentReceiptList.innerHTML += `<p> - ${el.nombre} x${el.cantidad} --- ${el.priceForQuantity}<p>`;
    });
    
    //Boton de atras para poder cambiar el metodo de pago
    backBtn.addEventListener('click', () => {
      choosePaymentMethod();
    });

    //Boton de confirmación de pago
    btnConfirm.addEventListener('click', () => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Su pedido se reservará por 72hs',
        showConfirmButton: true,
      })
      localStorage.clear();
      updateStorageToCart();
      calcPrice();
      mainContainer.innerHTML = '';
      showCards(dbFiguresFirebase, 'Figuras');
      btnCartAddEvent();
      btnCartOutEvent();
    });
  });
}


//Funcion que ofrece los metodos de pago
const choosePaymentMethod = () => {
  mainContainer.innerHTML = `
    <div class="payContainer">
      <button id="payCard">Tarjeta de crédito</button>
      <button id="payBank">Depósito a cuenta bancaria</button>
    </div>`;

    //Se pueden elegir entre dos metodos de pago
    const payCard = document.getElementById("payCard");
    const payBank = document.getElementById("payBank");

    paymentWithBank(payBank);
    paymentWithCard(payCard);

}


//Obtencion de elementos del HTML
const mainContainer = document.getElementById("mainContainer");
const search = document.getElementById("search");
const cartPrice = document.getElementById("cartPrice");
const btnCart = document.getElementsByClassName("btnCart");
const cartView = document.getElementById("cartView");
const btnCartOut = document.getElementsByClassName("btnCartOut");
const logoHome = document.getElementById("logoHome");
const easterEggBtn = document.getElementById('easterEggBtn');
const btnPay = document.getElementById("btnPay");
const month = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const year = [2022, 2023, 2024, 2025, 2026, 2027, 2028];

//Se ejecuta la funcion que carga las figuras en el array principal
//denominado dbFiguresFirebase, para poder trabajar con ellas en la pagina
getFirebase();

//Agrega el volver a ver todas las figuras del inicio
logoHome.addEventListener("click", () => {
  mainContainer.innerHTML = "";
  arrayFiltered.length = 0;
  showCards(dbFiguresFirebase, 'Figuras');
  btnCartAddEvent();
});

//Escucha el buscador y renderiza segun la busqueda
search.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    //Se realiza la busqueda si al menos hay un caracter
    //en caso de no haber ningun caracter carga todas las figuras
    //y se bindea el boton segun su indice a su figura
    if (search.value.length > 0) {
      showFiguresFiltered(search.value.toLowerCase());
      btnCartAddEvent();
    } else {
      mainContainer.innerHTML = "";
      arrayFiltered.length = 0;
      showCards(dbFiguresFirebase, 'Figuras');
      btnCartAddEvent();
    }
  }
});

//Escucha al logo del carrito y carga lo que la persona tenga en el carrito
//segun el localStorage
cartView.addEventListener("click", () => {
  printCart();
});

//Easter Egg de gratis (?
easterEggBtn.addEventListener('click', () => {
   if(cartView.src == 'http://127.0.0.1:5500/img/cart.png'){
      cartView.src = 'http://127.0.0.1:5500/img/cart3.png'
    } else {
      cartView.src = 'http://127.0.0.1:5500/img/cart.png'
    } 
});

//Boton de finalizacion de compra / pago
btnPay.addEventListener("click", () => {
  if (cart.length == 0) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 1500,
    });

    Toast.fire({
      icon: "info",
      title: "El carrito esta vacio!",
    });
  } else {
    printCart();
    Swal.fire({
      title: "¿Querés confirmar la compra?",
      showCancelButton: true,
      cancelButtonText: "Aún no",
      confirmButtonText: "Pagar",
      confirmButtonColor: "#0d6efd",
    }).then((result) => {
      if (result.isConfirmed) {
        //Eleccion del metodo de pago
        choosePaymentMethod();
      } else if (result.isDenied) {
        resolve();
      }
    });
  }
});
