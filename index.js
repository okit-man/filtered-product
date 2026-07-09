
let filteredProduct = [...productCollection];
const productContainer = document.querySelector(".products-container");

const displayProduct = () => {
    productContainer.innerHTML = filteredProduct
    .map(({id, title, price, img, company}) => {
        return `<article class="product" data-id="${id}">
                <img src="${img}"  class="product-img img>
                <footer>
                    <h5 class="product-name">${title}</h5>
                    <span product-price>$${price}</span>
                </footer>
            </article>`;
    }).join(' ');
}
displayProduct();
