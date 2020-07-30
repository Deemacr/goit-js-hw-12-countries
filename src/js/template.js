import countriesTemplate from '../template1.hbs'
import countryTemplate from '../template2.hbs'
import refs from './refs.js'

export default {
	updateCountriesMarkupList(countries) {
		refs.wrapper.innerHTML = ""
		const markup = countriesTemplate(countries);
		refs.wrapper.insertAdjacentHTML('beforeend', markup);
	},
	countryUpdateMarkup(country) {
		const markup = countryTemplate(country);
		refs.wrapper.innerHTML = markup;
	},
	searchAlert() {
		const markup = '<div class="alert" role="alert">' +
			'<span class="alert-message"> Too many matches found. Please, enter more specific query. </span>' +
			'</div>';
		refs.wrapper.innerHTML = markup;
	}
};




