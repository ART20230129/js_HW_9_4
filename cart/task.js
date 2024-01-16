
const plusProduct = document.querySelectorAll(".product__quantity-control_inc");
const minusProduct = document.querySelectorAll(".product__quantity-control_dec");
const productAdd = document.querySelectorAll(".product__add");
const cartProducts = document.querySelector(".cart__products")

//увеличиваем продукты, пр инажатии на кнопку "+" 
plusProduct.forEach((elem) => {
    elem.addEventListener("click", ()=> {
        const product = elem.parentElement; // находим родительский элемент
        const valueProduct = product.querySelector(".product__quantity-value");// находим в родительском элементе 
                                                                                //значение количества выбранных продуктов
        valueProduct.textContent = parseInt(valueProduct.textContent) + 1; //перед прибавлением переводим полученные данные в число
    } )
})

//уменьшаем продукты, при нажатии на кнопку "-" 
minusProduct.forEach((elem) => {
    elem.addEventListener("click", ()=> {
        const product = elem.closest(".product__quantity-controls"); 
        const valueProduct = product.querySelector(".product__quantity-value");
        valueProduct.textContent = Number(valueProduct.textContent) - 1; //предварительно переводим в число полученные данные
        
        if (Number(valueProduct.textContent) < 1){ // проверяем, что число выбранного продукта не менее одного (условие задания)
            valueProduct.textContent = 1;
        }                                                                               
    } )
})

//добавление продукта в корзину
productAdd.forEach((elem) => {
    elem.addEventListener("click", () => { 
        const product = elem.closest(".product"); //определяем выбранный для добавления в корзину продукт
        const id = product.dataset.id; //определяем id выбранного в корзину продукта
        const img = product.querySelector(".product__image").getAttribute("src");//вычленяем картинку продукта
        const count = parseInt(product.querySelector(".product__quantity-value").textContent);//количество товара

        //определяе продукт с какой data-id направляется в корзину при нажатии на кнопку "Добавить в корзину"
        const cartProduct = Array.from(document.querySelectorAll(".cart__product"));
        const productExs = cartProduct.find((item) => item.dataset.id === id);
        
        //вариант 2
        //const productExs = document.querySelector(`.cart__product[data-id="${id}"]`);
   
        if(!productExs){ //если продукта нет в коризне добавляем его в крзину
            cartProducts.insertAdjacentHTML("beforeend",
              `<div class="cart__product" data-id=${id}>
                    <img class="cart__product-image" src=${img}>
                    <div class="cart__product-count">${count}</div>
              </div>`
            )
        } else { //иначе увеличиваем количество продукта в корзине
            const productExsCount = parseInt(productExs.querySelector(".cart__product-count").textContent);
            productExs.querySelector(".cart__product-count").textContent = productExsCount + count;
            
        } 

    })
})

