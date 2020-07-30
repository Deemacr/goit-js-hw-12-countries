import refs from './refs.js'
import tmp from './template.js'
import toastr from './toastr.js'

// const searchAlert = () => { toastr.warning('My name is Inigo Montoya. You killed my father, prepare to die!') }

refs.searchBox.addEventListener('input', (event) => {
	refs.wrapper.innerHTML = '<ul class="countries-list"></ul>';
	const inputValue = event.currentTarget.value;
	debouncedRes(inputValue);
})

const searchRes = function (data) {
	if (data.length > 10) {
		toastr.searchAlert();
		return;
	} else if (data.length === 1) {
		tmp.countryUpdateMarkup(data[0]);
		return;
	} else if (data.message === 'Not Found') {
		return;
	} else {
		tmp.updateCountriesMarkupList(data);
	}
}

const fetchCountries = function (name) {
	const url = `https://restcountries.eu/rest/v2/name/${name}`;
	fetch(url).then(response => {
		return response.json();
	}).then(countryData => {
		searchRes(countryData);
	})
}

const debouncedRes = _.debounce(fetchCountries, 500);

