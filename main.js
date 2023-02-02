const menuEmail = document.querySelector('.navbar-email');
const burguerMenu = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const productDetailContainer = document.querySelector('.product-detail-secondary');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
    aside.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    aside.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside () {
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    aside.classList.toggle('inactive');
}

function toggleProductDetailContainer () {
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    aside.classList.add('inactive');
    productDetailContainer.classList.toggle('inactive');
}

function openProductDetailAside() {
    desktopMenu.classList.add('inactive');
    aside.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
    desktopMenu.classList.add('inactive');
    aside.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}



const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Compu',
    price: 620,
    image: 'https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push ({
    name:'Sunglasses',
    price: 60,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
});
productList.push ({
    name:'Bicycle seat bag',
    price: 76,
    image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
}); 
productList.push ({
    name:'Seat',
    price: 30,
    image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
});



function renderProducts(array) {
    for (product of array) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        // product = {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productCard.append(productImg, productInfo);
        productInfo.append(productInfoDiv, productInfoFigure);
        productInfoDiv.append(productPrice, productName);
        productInfoFigure.appendChild(productImgCart);
        cardsContainer.appendChild(productCard);
    
    }
}

renderProducts(productList);
//Ahora, gracias a esta función, podemos ejecutarla cuando hagamos click en algún botón, o cuando acabe de cargar la página el elemento DOM...
// El array lo podemos llamar desde backend, por ejemplo.


