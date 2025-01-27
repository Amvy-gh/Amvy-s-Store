const products = [
    {
        id: 1,
        name: "Gibson Les Paul Standard",
        price: 2499.99,
        image: "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?w=400&h=300"
    },
    {
        id: 2,
        name: "Fender Stratocaster",
        price: 1899.99,
        image: "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?w=400&h=300"
    },
    {
        id: 3,
        name: "Martin D-28",
        price: 3299.99,
        image: "https://images.unsplash.com/photo-1556449895-a33c9dba33dd?w=400&h=300"
    },
];

let cartCount = 0;
const cartCountElement = document.querySelector('.cart-count');

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

const productsGrid = document.getElementById('productsGrid');

products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-price">$${product.price.toLocaleString()}</p>
            <button class="add-to-cart" onclick="addToCart(${product.id})">
                Add to Cart
            </button>
        </div>
    `;
    productsGrid.appendChild(productCard);
});

function addToCart(productId) {
    cartCount++;
    cartCountElement.textContent = cartCount;
    
    const cartIcon = document.querySelector('.cart-icon');
    cartIcon.style.transform = 'scale(1.2)';
    setTimeout(() => {
        cartIcon.style.transform = 'scale(1)';
    }, 200);
}