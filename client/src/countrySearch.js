const CountrySearch = function(searchString, callback) {
  const onCountriesRequestLoad = function(event) {
    if (this.status !== 200) return callback([]);
    const resultString = event.target.responseText;
    let searchResults = JSON.parse(resultString);
    callback(searchResults);
  };

  const makeCountriesRequest = function() {
    const url = `https://restcountries.eu/rest/v2/name/${searchString}`;
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load', onCountriesRequestLoad);
    request.send();
  };

  makeCountriesRequest();
};

module.exports = CountrySearch;
