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
  makeRequest(url, requestComplete);
};

window.addEventListener("load", function(){
	alert("Loaded!");
	loadBucketList();


});
