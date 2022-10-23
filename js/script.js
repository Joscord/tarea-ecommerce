fetchBtn = document.getElementById('fetch-btn');

const fetchNotebooks = async () => {
	const response = await axios.get(
		'https://api.mercadolibre.com/sites/MLC/search?q=notebook'
	);
	const { results: notebooks } = response.data;
	console.log(notebooks[0]);
	return notebooks;
};

const createProductCard = product => {
	const { title, price, thumbnail } = product;
	const card = document.createElement('div');
	card.className = 'card';
	card.style.width = '18rem';
	card.innerHTML = `
    <img src="${thumbnail}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">lorem ipsum</p>
    </div>
    <div class="card-body">
        <a href="#" class="card-link">${price}</a>
        <a href="#" class="card-link">Buy Now</a>
    </div>
    `;
	return card;
};

const showProducts = async () => {
	const contentDiv = document.getElementById('content');
	const products = await fetchNotebooks();
	products.map(product => {
		contentDiv.appendChild(createProductCard(product));
	});
};

fetchBtn.addEventListener('click', showProducts);
