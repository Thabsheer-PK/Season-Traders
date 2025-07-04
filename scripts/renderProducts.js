import { products } from "./data.js";

function renderProducts(){
  let html = '';
  products.forEach((product)=> {
    html += `
      <div class="product-card col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
        <img src="${product.image}" alt="Hammer" class="img-fluid">
        <p class="product-name">${product.name}</p>
        <p class="price-tag">&#8377; ${product.price}</p>
      </div>
    `;
  })
  document.querySelector('.js-products-grid').innerHTML = html;
}
renderProducts();

