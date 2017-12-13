const CountrySearch = function(searchString) {
  let result;

  const makeRequest = function() {
    const url = `https://restcountries.eu/rest/v2/name/${searchString}`;
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load', onRequestLoad);
    request.send();
  };

  makeRequest();
};

module.exports = CountrySearch;
