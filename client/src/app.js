
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

var makeBucketListRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener("load", callback);
  request.send();
};

var bucketListRequestComplete = function(){
  if(this.status !== 200){
    return;
  }
  var jsonString = this.responseText;
  var bucketList = JSON.parse(jsonString);
};

var loadBucketList = function(){
  var url = "/bucket_list";
  makeBucketListRequest(url, bucketListRequestComplete);
};

window.addEventListener("load", function(){
  countrySearch('united');
	loadBucketList();
});
