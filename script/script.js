let currentCategory = 'All Trees';
let cart = [];

const categories = [
    'All Trees',
    'Fruit Trees', 
    'Flowering Trees',
    'Shade Trees',
    'Medicinal Trees',
    'Timber Trees',
    'Evergreen Trees',
    'Ornamental Plants',
    'Bamboo',
    'Climbers',
    'Aquatic Plants'
];

const trees = [
    {
        id: 1,
        name: 'Mango Tree',
        description: 'A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green foliage provides excellent shade.',
        category: 'Fruit Tree',
        price: 500,
        image: 'https://images.unsplash.com/photo-1553279453-d97b9bb1f2ef?w=300&h=200&fit=crop'
    },
    {
        id: 2,
        name: 'Guava Tree',
        description: 'A hardy fruit tree known for its nutritious fruits and medicinal properties. Easy to grow and maintain.',
        category: 'Fruit Tree', 
        price: 350,
        image: 'https://images.unsplash.com/photo-1574856344991-aaa31b6f4ce3?w=300&h=200&fit=crop'
    },
    {
        id: 3,
        name: 'Jackfruit Tree',
        description: 'Large tropical tree producing the worlds largest tree fruit. Known for its sweet taste and nutritional value.',
        category: 'Fruit Tree',
        price: 600,
        image: 'https://images.unsplash.com/photo-1601047083194-3bb70c85844a?w=300&h=200&fit=crop'
    },
    {
        id: 4,
        name: 'Rose Plant',
        description: 'Beautiful flowering plant with fragrant blooms. Perfect for gardens and ornamental purposes.',
        category: 'Flowering Trees',
        price: 200,
        image: 'https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=300&h=200&fit=crop'
    },
    {
        id: 5,
        name: 'Neem Tree',
        description: 'Sacred medicinal tree with antibacterial properties. Provides natural pest control and health benefits.',
        category: 'Medicinal Trees',
        price: 400,
        image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=200&fit=crop'
    },
    {
        id: 6,
        name: 'Banyan Tree',
        description: 'Majestic shade tree with extensive canopy. Symbol of longevity and provides excellent natural cooling.',
        category: 'Shade Trees',
        price: 800,
        image: 'https://images.unsplash.com/photo-1574687253531-526cfc1c50b0?w=300&h=200&fit=crop'
    },
    {
        id: 7,
        name: 'Coconut Tree',
        description: 'Tall tropical palm tree producing coconuts. Excellent for coastal areas and provides multiple uses.',
        category: 'Fruit Tree',
        price: 450,
        image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=300&h=200&fit=crop'
    },
    {
        id: 8,
        name: 'Jasmine Plant',
        description: 'Fragrant flowering plant with white blooms. Perfect for aromatic gardens and natural decoration.',
        category: 'Flowering Trees',
        price: 150,
        image: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?w=300&h=200&fit=crop'
    },
    {
        id: 9,
        name: 'Tulsi Plant',
        description: 'Sacred medicinal herb with numerous health benefits. Essential for traditional medicine and worship.',
        category: 'Medicinal Trees',
        price: 100,
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop'
    },
    {
        id: 10,
        name: 'Teak Tree',
        description: 'Premium hardwood tree valued for its durability. Excellent for timber and long-term investment.',
        category: 'Timber Trees',
        price: 700,
        image: 'https://images.unsplash.com/photo-1582193906649-cb84848bc4fa?w=300&h=200&fit=crop'
    },
    {
        id: 11,
        name: 'Pine Tree',
        description: 'Evergreen coniferous tree with needle-like leaves. Great for mountainous regions and landscaping.',
        category: 'Evergreen Trees',
        price: 550,
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop'
    },
    {
        id: 12,
        name: 'Bougainvillea',
        description: 'Colorful ornamental plant with vibrant bracts. Perfect for decorative gardens and fencing.',
        category: 'Ornamental Plants',
        price: 180,
        image: 'https://images.unsplash.com/photo-1595461899929-5e55b4118eed?w=300&h=200&fit=crop'
    }
];

function showLoading() {
    document.getElementById('treesContainer').innerHTML = `
        <div class="col-span-3 flex justify-center items-center h-64">
            <span class="loading loading-bars loading-xl"></span>
        </div>
    `;
}

function renderCategories() {
    const categoriesHTML = categories.map(category => `
        <li class="category-item ${category === currentCategory ? 'active' : ''}" onclick="selectCategory('${category}')">
            ${category}
        </li>
    `).join('');

    document.getElementById('categoriesList').innerHTML = categoriesHTML;
}

function selectCategory(category) {
    currentCategory = category;
    renderCategories();
    showLoading();
    
    setTimeout(() => {
        renderTrees();
    }, 500);
}

function renderTrees() {
    const filteredTrees = currentCategory === 'All Trees' 
        ? trees 
        : trees.filter(tree => tree.category === currentCategory);

    const treesHTML = filteredTrees.map(tree => `
        <div class="tree-card">
            <div class="tree-image">
                <img src="${tree.image}" alt="${tree.name}" class="tree-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                <div class="placeholder-image" style="display: none;"></div>
            </div>
            <div class="tree-info">
                <h3 class="tree-name" onclick="showTreeModal(${tree.id})">${tree.name}</h3>
                <p class="tree-description">${tree.description}</p>
                <div class="tree-meta">
                    <span class="tree-category">${tree.category}</span>
                    <span class="tree-price">৳${tree.price}</span>
                </div>
                <button class="add-to-cart-btn" onclick="addToCart(${tree.id})">Add to Cart</button>
            </div>
        </div>
    `).join('');

    document.getElementById('treesContainer').innerHTML = treesHTML || '<div class="col-span-3 text-center text-gray-500">No trees found in this category</div>';
}

function showTreeModal(treeId) {
    const tree = trees.find(t => t.id === treeId);
    if (!tree) return;

    const modal = document.createElement('div');
    modal.className = 'tree-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>${tree.name}</h2>
                <button class="close-btn" onclick="closeModal()">&times;</button>
            </div>
            <div class="modal-body">
                <div class="modal-image">
                    <img src="${tree.image}" alt="${tree.name}" class="modal-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                    <div class="placeholder-image" style="display: none;"></div>
                </div>
                <div class="modal-info">
                    <h3>Description</h3>
                    <p>${tree.description}</p>
                    <div class="modal-meta">
                        <div>
                            <strong>Category:</strong>
                            <span class="tree-category">${tree.category}</span>
                        </div>
                        <div>
                            <strong>Price:</strong>
                            <span class="tree-price">৳${tree.price}</span>
                        </div>
                    </div>
                    <button class="add-to-cart-btn" onclick="addToCart(${tree.id}); closeModal()">Add to Cart</button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
}

function closeModal() {
    const modal = document.querySelector('.tree-modal');
    if (modal) {
        document.body.removeChild(modal);
    }
}

function addToCart(treeId) {
    const tree = trees.find(t => t.id === treeId);
    if (!tree) return;

    const existingItem = cart.find(item => item.id === treeId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: treeId,
            name: tree.name,
            price: tree.price,
            quantity: 1
        });
    }

    updateCart();
}

function removeFromCart(treeId) {
    cart = cart.filter(item => item.id !== treeId);
    updateCart();
}

function updateCart() {
    const cartItemsHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-details">৳${item.price} x ${item.quantity}</div>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">×</button>
        </div>
    `).join('');

    document.getElementById('cartItems').innerHTML = cartItemsHTML || '<div class="empty-cart">Cart is empty</div>';

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('cartTotal').textContent = `৳${total}`;
}

function initializeApp() {
    const appHTML = `
        <section class="tree-selection-section">
            <div class="container">
                <h2 class="section-title">Choose Your Trees</h2>
                <div class="main-content">
                    <div class="sidebar">
                        <div class="categories">
                            <h3>Categories</h3>
                            <ul id="categoriesList"></ul>
                        </div>
                    </div>
                    <div class="content">
                        <div id="treesContainer" class="trees-grid"></div>
                    </div>
                    <div class="cart-sidebar">
                        <div class="cart">
                            <h3>Your Cart</h3>
                            <div id="cartItems"></div>
                            <div class="cart-total">
                                <strong>Total: <span id="cartTotal">৳0</span></strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;

    const targetSection = document.querySelector('section.bg-\\[\\#CFF0DC\\]');
    targetSection.insertAdjacentHTML('afterend', appHTML);

    const styles = `
        <style>
        .tree-selection-section {
            background: rgba(240,253,244,1);
            padding: 2rem 0;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
        }
        
        .section-title {
            text-align: center;
            font-size: 1.5rem;
            font-weight: 600;
            color: #1F2937;
            margin-bottom: 2rem;
        }
        
        .main-content {
            display: grid;
            grid-template-columns: 200px 1fr 250px;
            gap: 2rem;
        }
        
        .sidebar {
            background: white;
            border-radius: 8px;
            padding: 1rem;
            height: fit-content;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        
        .categories h3 {
            font-weight: 600;
            margin-bottom: 1rem;
            color: #1F2937;
        }
        
        .categories ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        
        .category-item {
            padding: 0.75rem;
            cursor: pointer;
            border-radius: 6px;
            transition: all 0.2s;
            color: #4B5563;
            margin-bottom: 0.25rem;
        }
        
        .category-item:hover {
            background: #F3F4F6;
        }
        
        .category-item.active {
            background: #15803D;
            color: white;
        }
        
        .trees-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
        }
        
        .tree-card {
            background: white;
            border-radius: 8px;
            padding: 1rem;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
            transition: transform 0.2s;
        }
        
        .tree-card:hover {
            transform: translateY(-2px);
        }
        
        .tree-image {
            height: 150px;
            margin-bottom: 1rem;
        }
        
        .tree-img, .modal-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 6px;
        }
        
        .placeholder-image {
            width: 100%;
            height: 100%;
            background: #E5E7EB;
            border-radius: 6px;
        }
        
        .tree-name {
            font-weight: 600;
            color: #1F2937;
            margin-bottom: 0.5rem;
            cursor: pointer;
        }
        
        .tree-name:hover {
            color: #15803D;
        }
        
        .tree-description {
            font-size: 0.875rem;
            color: #6B7280;
            margin-bottom: 1rem;
            line-height: 1.4;
        }
        
        .tree-meta {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
        }
        
        .tree-category {
            background: #DCFCE7;
            color: #15803D;
            padding: 0.25rem 0.75rem;
            border-radius: 1rem;
            font-size: 0.75rem;
            font-weight: 500;
        }
        
        .tree-price {
            font-weight: 600;
            font-size: 1.125rem;
            color: #1F2937;
        }
        
        .add-to-cart-btn {
            width: 100%;
            background: #15803D;
            color: white;
            border: none;
            padding: 0.75rem;
            border-radius: 6px;
            font-weight: 500;
            cursor: pointer;
            transition: background 0.2s;
        }
        
        .add-to-cart-btn:hover {
            background: #166534;
        }
        
        .cart-sidebar {
            background: white;
            border-radius: 8px;
            padding: 1rem;
            height: fit-content;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        
        .cart h3 {
            font-weight: 600;
            margin-bottom: 1rem;
            color: #1F2937;
        }
        
        .cart-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.75rem 0;
            border-bottom: 1px solid #F3F4F6;
        }
        
        .cart-item-name {
            font-weight: 500;
            color: #1F2937;
            font-size: 0.875rem;
        }
        
        .cart-item-details {
            font-size: 0.75rem;
            color: #6B7280;
        }
        
        .remove-btn {
            background: none;
            border: none;
            color: #EF4444;
            cursor: pointer;
            font-size: 1.25rem;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .remove-btn:hover {
            background: #FEF2F2;
            border-radius: 50%;
        }
        
        .cart-total {
            margin-top: 1rem;
            padding-top: 1rem;
            border-top: 1px solid #F3F4F6;
            font-size: 1.125rem;
            color: #1F2937;
        }
        
        .empty-cart {
            text-align: center;
            color: #6B7280;
            font-size: 0.875rem;
            padding: 2rem 0;
        }
        
        .tree-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
        }
        
        .modal-content {
            background: white;
            border-radius: 8px;
            width: 90%;
            max-width: 600px;
            max-height: 90vh;
            overflow-y: auto;
        }
        
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.5rem;
            border-bottom: 1px solid #F3F4F6;
        }
        
        .modal-header h2 {
            font-weight: 600;
            color: #1F2937;
        }
        
        .close-btn {
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: #6B7280;
        }
        
        .close-btn:hover {
            color: #374151;
        }
        
        .modal-body {
            padding: 1.5rem;
        }
        
        .modal-image {
            height: 200px;
            margin-bottom: 1.5rem;
        }
        
        .modal-info h3 {
            font-weight: 600;
            color: #1F2937;
            margin-bottom: 0.5rem;
        }
        
        .modal-info p {
            color: #6B7280;
            line-height: 1.6;
            margin-bottom: 1.5rem;
        }
        
        .modal-meta {
            margin-bottom: 1.5rem;
        }
        
        .modal-meta > div {
            margin-bottom: 1rem;
        }
        
        .modal-meta strong {
            color: #1F2937;
            margin-right: 0.5rem;
        }
        
        @media (max-width: 768px) {
            .main-content {
                grid-template-columns: 1fr;
                gap: 1rem;
            }
            
            .trees-grid {
                grid-template-columns: 1fr;
            }
        }
        </style>
    `;

    document.head.insertAdjacentHTML('beforeend', styles);

    renderCategories();
    renderTrees();
    updateCart();
}

document.addEventListener('DOMContentLoaded', initializeApp);