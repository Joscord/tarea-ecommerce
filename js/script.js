fetchBtn = document.getElementById('fetch-btn');
fetchDummyBtn = document.getElementById('fetch-dummy');
const contentDiv = document.getElementById('content');

const dummyProducts = [
	{
		id: 1,
		title: 'Smartphone Oneplus CE2 Lite 5G 128GB',
		price: 349990,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis.',
		thumbnail:
			'https://falabella.scene7.com/is/image/Falabella/16474100_1?wid=1500&hei=1500&qlt=70',
	},
	{
		id: 2,
		title: 'HP 14-cf2529la Intel i3-10110U 8GB RAM 256GB',
		price: 499990,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis.',
		thumbnail:
			'https://falabella.scene7.com/is/image/Falabella/16259203_1?wid=1500&hei=1500&qlt=70',
	},
	{
		id: 3,
		title: 'Audifono Inalambrico HiFi Rolling Stone Latitude Blancophone',
		price: 1200,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis.',
		thumbnail:
			'https://falabella.scene7.com/is/image/Falabella/gsc_112919227_459188_1?wid=1500&hei=1500&qlt=70',
	},
	{
		id: 4,
		title: 'Ventilador Pedestal Ventilador Indoor',
		price: 44990,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis.',
		thumbnail:
			'https://falabella.scene7.com/is/image/Falabella/gsc_114377088_987723_1?wid=1500&hei=1500&qlt=70',
	},
	{
		id: 5,
		title: 'Pantalon ecocuero negro elasticado tiro alto',
		price: 25990,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis.',
		thumbnail:
			'https://falabella.scene7.com/is/image/Falabella/115250107_1?wid=1500&hei=1500&qlt=70',
	},
	{
		id: 6,
		title: 'Tableta Digitalizadora Huion Kamvas 13 ',
		price: 259990,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis.',
		thumbnail:
			'https://falabella.scene7.com/is/image/Falabella/gsc_113277639_601510_1?wid=1500&hei=1500&qlt=70',
	},
	{
		id: 7,
		title: 'Bebeglo Silla De Auto Convertible Azul Bxs-213',
		price: 99990,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis.',
		thumbnail:
			'https://falabella.scene7.com/is/image/Falabella/6549933_1?wid=1500&hei=1500&qlt=70',
	},
	{
		id: 8,
		title: 'Mesa de Comedor Empoli',
		price: 399990,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis.',
		thumbnail:
			'https://falabella.scene7.com/is/image/Falabella/881999730_1?wid=1500&hei=1500&qlt=70',
	},
	{
		id: 9,
		title: 'Parlante Bluetooth Soundflow',
		price: 59990,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis.',
		thumbnail:
			'https://falabella.scene7.com/is/image/Falabella/15961503_1?wid=1500&hei=1500&qlt=70',
	},
	{
		id: 10,
		title: 'Parrilla Eléctrica con Vidrio TH-224',
		price: 59990,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis.',
		thumbnail:
			'https://falabella.scene7.com/is/image/Falabella/14399853_1?wid=1500&hei=1500&qlt=70',
	},
];

const isOkay = true;

const fetchDummyProducts = products => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (isOkay) {
				resolve(products);
			} else {
				reject('Error');
			}
		}, 1);
	});
};

const fetchNotebooks = async () => {
	const response = await axios.get(
		'https://api.mercadolibre.com/sites/MLC/search?q=notebook'
	);
	const { results: notebooks } = response.data;
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
	contentDiv.innerHTML = '';
	const products = await fetchNotebooks();
	products.map(product => {
		contentDiv.appendChild(createProductCard(product));
	});
};

const showDummyProducts = () => {
	contentDiv.innerHTML = '';
	const promise = fetchDummyProducts(dummyProducts);
	promise.then(products =>
		products.map(product => {
			contentDiv.appendChild(createProductCard(product));
		})
	);
};

fetchBtn.addEventListener('click', showProducts);
fetchDummyBtn.addEventListener('click', showDummyProducts);
