const fetchNotebooks = async () => {
	const response = await axios.get(
		'https://api.mercadolibre.com/sites/MLC/search?q=notebook'
	);
	const { results: notebooks } = response.data;
	return notebooks;
};

const createProductCard = product => {
	const { title, price, thumbnail } = product;
	const card = document.createElementById('div');
	card.className = 'card';
	card.style.width = '18rem';
	card.innerHtml = `
    <img src="${thumbnail}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    <div class="card-body">
        <a href="#" class="card-link">${price}</a>
        <a href="#" class="card-link">Buy Now</a>
    </div>
    `;
	return card;
};
