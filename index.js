
let filteredProduct = [...productCollection];
const productContainer = document.querySelector(".products-container");
const form = document.querySelector(".input-form");
const searchInput = document.querySelector(".search-input");
// const companyBtns = document.querySelectorAll(".company-btn");
const companyDom = document.querySelector(".companies")

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

// companybtns filters 
const displayBtn = () => {
    const companyBtn = ['all', ...new Set(productCollection.map((item) => item.company))]
    // const companyBtn = productCollection.map((item) => item.company)
    // console.log(companyBtn);
    companyDom.innerHTML = companyBtn.map((company) => {
        return `<button class="company-btn" data-id='${company}'>${company}</button>`;
    }). join(' ');
    
}
displayBtn()

companyDom.addEventListener('click', (e) => {
    // console.log(e.target);
    const el = e.target
    if (el.classList.contains("company-btn")) {
        if(el.dataset.id === 'all') {
            filteredProduct = [...productCollection]
        } else {
            filteredProduct = productCollection.filter((item) => {
                return item.company === el.dataset.id;
            })
        }
        searchInput.value = "";
        displayProduct();
    }
})













// companyDom.addEventListener('click', (e) => {
//     const el = e.target
//     if (el.classList.contains("company-btn")) {
//         if (el.dataset.id === "all") {
//             filteredProduct = [...productCollection];
//         } else {
//             filteredProduct = productCollection.filter((product) => {
//                 return product.company === el.dataset.id;
//             });
//         }
//         searchInput.value = '';
//         displayProduct();

//     }
// })








// companyBtns.addEventListener('click', (e) => {
//     // console.log(e.target);
//     const el = e.target
//     if (el.classList.contains("company-btn")) {
//       if (el.dataset.id === "all") {
//         filteredProduct = [...productCollection];
//       } else {
//         filteredProduct = productCollection.filter((product) => {
//           return product.company === el.dataset.id;
//         });
//       }
//       searchInput.value = ' ';
//       displayProduct();
//     }
// });