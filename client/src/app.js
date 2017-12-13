const onCountriesRequestLoad = function(event) {
  const resultString = event.target.responseText;
  let searchResults = JSON.parse(resultString);
  console.log(searchResults);
};

const makeCountriesRequest = function(searchString) {
  const url = `https://restcountries.eu/rest/v2/name/${searchString}`;
  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.addEventListener('load', onCountriesRequestLoad);
  request.send();
};

const countrySearch = function(searchString) {
  makeCountriesRequest(searchString);
};

window.addEventListener('load', function() {
  countrySearch('united');
});
