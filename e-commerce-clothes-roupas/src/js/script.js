//const nameProduct = 'Tênis Pop Multi';
//const nameBrand = 'Vans';
//const productPrice = 549;
//const nameAssetsImg = 'product1.webp' && 'tshirt1.webp'

// const product1 = {
//     id: 1,
//     name: 'Tênis colorido',
//     brand: 'Vans',
//     price: 549,
//     nameAssetsImg: "product1.webp" 
// };

// const product2 = {
   //  id: 2,
    // name: 'Tênis amarelo',
    // brand: 'Vans',
    // price: 349,
    // nameAssetsImg: "product2.webp" 
// };
// const list = ['info1', 'info2', 'info3', 'info4'];

const catalog = [{
    id: 1,
    name: 'Tênis colorido',
    brand: 'Vans',
    price: 549,
    img: "product1.webp", 
    unissex: true,
},
{
    id: 2,
    name: 'Tênis Amarelo Queimado',
    brand: 'Vans',
    price: 349,
    img: "product2.webp",
    unissex: true,
},
{
    id: 3,
    name: 'Tênis Verde com Branco',
    brand: 'Vans',
    price: 349,
    img: "product3.webp",
    unissex: true, 
},
{
    id: 4,
    name: 'Tênis Preto Brilha no Escuro',
    brand: 'Vans',
    price: 349,
    img: "product4.webp",
    unissex: true, 
},
{
    id: 5,
    name: 'Tênis Amarelo Ultra Range',
    brand: 'Vans',
    price: 549,
    img: "product5.webp",
    unissex: true,
},
{
    id: 6,
    name: 'T-shirt Preta',
    brand: 'Vans',
    price: 349,
    img: "tshirt1.webp",
    unissex: true, 
},
{
    id: 7,
    name: 'T-shirt Branca',
    brand: 'Vans',
    price: 349,
    img: "tshirt2.webp",
    unissex: true, 
},
{
    id: 8,
    name: 'T-shirt Branca',
    brand: 'Vans',
    price: 349,
    img: "tshirt3.webp",
    unissex: true,
},
{
    id: 9,
    name: 'T-shirt Branca',
    brand: 'Vans',
    price: 349,
    img: "tshirt4.webp",
    unissex: true, 
},
{
    id: 10,
    name: 'Chapéu Bucket Preto',
    brand: 'Vans',
    price: 149,
    img: "bucket1.webp",
    unissex: true,
},
];

for(const productCatalog of catalog) {
    
    const productCard = `<div id="card-product-1">
    <img class="products" src="./src/assets/${productCatalog.img}" 
    alt="Sneaker Old School Colorful Pop Multi">
    <p>${productCatalog.brand}</p>
    <p>${productCatalog.name}</p>
    <p>$${productCatalog.price}</p>
    <button>Adicionar</button>
    </div>`;
    
    document.getElementById('container-product').innerHTML += productCatalog;
}