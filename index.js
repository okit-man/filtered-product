
let filteredProduct = [...productCollection];
const productContainer = document.querySelector(".products-container");
const form = document.querySelector(".input-form");
const searchInput = document.querySelector(".search-input");

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

// text filter
form.addEventListener("keyup", () => {
    // if statement
    if(filteredProduct.length < 1) {
        productContainer.innerHTML =`<h6>sorry, no product matched your search!!! </h6>`
        return
    }
    const inputValue = searchInput.value;
    // console.log(inputValue);
    filteredProduct = productCollection.filter((item) => {
        return item.title.toLowerCase().includes(inputValue)
    })
    displayProduct();
    
})
