var searchView = require('./views/searchView');
const CountrySearch = require('./countrySearch');

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

const renderCountries = function(array) {
  new searchView(array);
};

window.addEventListener("load", function(){
  loadBucketList();

  document.getElementById('search-form').addEventListener('submit', function(event){
    event.preventDefault();
    var text = document.getElementById('search-text').value;
    if (text !== '') {
      new CountrySearch(text, renderCountries);
    }
  });




});
