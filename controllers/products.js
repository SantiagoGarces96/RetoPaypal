export const products = [
  {
    id: 1,
    name: "Producto 1",
    price: 1500,
    img: "./img/prod.jpeg",
  },
  {
    id: 2,
    name: "Producto 2",
    price: 2500,
    img: "./img/prod1.png",
  },
  {
    id: 3,
    name: "Producto 3",
    price: 3500,
    img: "./img/prod3.jpg",
  },
  {
    id: 4,
    name: "Producto 4",
    price: 4500,
    img: "./img/prod4.jpg",
  },
  {
    id: 5,
    name: "Producto 5",
    price: 5500,
    img: "./img/prod5.jpg",
  },
  {
    id: 6,
    name: "Producto 6",
    price: 6500,
    img: "./img/prod6.jpg",
  },
  {
    id: 7,
    name: "Producto 7",
    price: 7500,
    img: "./img/prod.jpeg",
  },
  {
    id: 8,
    name: "Producto 8",
    price: 8500,
    img: "./img/prod1.png",
  },
  {
    id: 9,
    name: "Producto 9",
    price: 9500,
    img: "./img/prod3.jpg",
  },
  {
    id: 10,
    name: "Producto 10",
    price: 10500,
    img: "./img/prod4.jpg",
  },
];

const printProducts = (products) => {
  let html = "";

  products.forEach(({ id, name, price, img }) => {
    let code = `<div class="product-card" id=${id}>
        <img src=${img} alt=${name} />
        <h3>${name}</h3>
        <p class="price">${price}</p>
        <button id="boton" class=${"btn" + id}>Comprar</button>
      </div>`;

    html += code;
  });

  return html;
};

document.getElementById("001").innerHTML = printProducts(products);
