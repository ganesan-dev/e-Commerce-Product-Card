const sources = [{
    image: 'src/product-1.jpg',
    name: 'shoes',
    model: 'Nike 150',
    price: '₹849'
},
{
    image: 'src/product-2.jpg',
    name: 'shoes',
    model: 'Nike 256',
    price: '₹1049' 
},
{
    image: 'src/product-3.jpg',
    name: 'shoes',
    model: 'Puma 120',
    price: '₹749'
},
{
    image: 'src/product-4.jpg',
    name: 'shoes',
    model: 'Adidas 600',
    price: '₹1999'
},
{
    image: 'src/product-5.jpg',
    name: 'shoes',
    model: 'Nike 200',
    price: '₹999'
},
{
    image: 'src/product-6.jpg',
    name: 'shoes',
    model: 'K-Swiss',
    price: '₹1299'
},
{
    image: 'src/product-7.jpg',
    name: 'shoes',
    model: 'Adidas 580',
    price: '₹999'
},
{
    image: 'src/product-8.jpg',
    name: 'shoes',
    model: 'Puma 560',
    price: '₹1499'
},];

function renderProducts(){

    let productCardHTML = ''

    for(let i = 0; i < sources.length; i++){
        const product = sources[i];
        const productCard = `
        <div class="img">
        <img src="${product.image}" class="card" alt="${sources.name}">
        <div class="info">
            <h2>${product.model}</h2>
            <h3>${product.price}</h3>
        </div>
        <button type="submit" class="delete-btn" data-index = "${i}">delete</button>
        </div>
        </div>
        `;
        productCardHTML += productCard
}
    document.getElementById("product-card").innerHTML += productCardHTML;

    const deleteButtons = document.querySelectorAll(".delete-btn");
    for(let i = 0; i < deleteButtons.length; i++){
        deleteButtons[i].addEventListener('click', deleteProduct);
    }
}

function deleteProduct(event){
    const index = event.target.dataset.index;
    const productCard = event.target.parentNode;
    productCard.parentNode.removeChild(productCard)
    sources.splice(index, 1);
}

renderProducts()