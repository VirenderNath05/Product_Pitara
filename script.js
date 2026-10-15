// Array of products - Easily add more items here!
const products = [
    {
        name: "Aesthetic Mirror",
        price: "₹499",
        image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&q=80",
        flipkartLink: "#",
        meeshoLink: "#"
    },
    {
        name: "Gift Box Set",
        price: "₹899",
        image: "https://images.unsplash.com/photo-1549439602-43ebca2327af?w=500&q=80",
        flipkartLink: "#",
        meeshoLink: "#"
    },
    {
        name: "Cute Tumbler",
        price: "₹349",
        image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&q=80",
        flipkartLink: "#",
        meeshoLink: "#"
    },
    {
        name: "Skincare Combo",
        price: "₹599",
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&q=80",
        flipkartLink: "#",
        meeshoLink: "#"
    }
];

// Function to generate the HTML for each product
function renderProducts() {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = ''; // Clear loading state

    products.forEach(product => {
        const cardHtml = `
            <div class="glass product-card flex flex-col justify-between hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div>
                    <img src="${product.image}" alt="${product.name}" class="w-full product-img mb-3">
                    <h3 class="text-sm font-bold mb-1 line-clamp-1">${product.name}</h3>
                    <p class="text-yellow-300 font-bold text-sm mb-3">${product.price}</p>
                </div>
                <div class="flex flex-col gap-2">
                    <a href="${product.flipkartLink}" class="bg-blue-600 hover:bg-blue-700 text-white text-xs py-2 px-2 rounded-lg text-center font-semibold transition"><i class="fas fa-shopping-cart mr-1"></i> Flipkart</a>
                    <a href="${product.meeshoLink}" class="bg-pink-600 hover:bg-pink-700 text-white text-xs py-2 px-2 rounded-lg text-center font-semibold transition"><i class="fas fa-shopping-bag mr-1"></i> Meesho</a>
                </div>
            </div>
        `;
        grid.innerHTML += cardHtml;
    });
}

// Run when page loads
document.addEventListener('DOMContentLoaded', renderProducts);
