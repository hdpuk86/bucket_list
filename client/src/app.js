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
  console.log(array);
};

window.addEventListener("load", function(){
  new CountrySearch('united', renderCountries);
	loadBucketList();
});
