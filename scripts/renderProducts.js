import { products } from "./data.js";

function renderProducts(){
  let html = '';
  products.forEach((product)=> {
    html += `
      <div class="product-card">
        <img src="${product.image}" alt="Hammer">
        <p class="product-name">${product.name}</p>
        <p class="price-tag">&#8377; ${product.price}</p>
      </div>
    `;
  })
  document.querySelector('.js-products-grid').innerHTML = html;
}
renderProducts();