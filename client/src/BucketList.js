var BucketList = function(){
  this.getList();
};

BucketList.prototype = {
  makeRequest: function(){
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.addEventListener("load", callback);
    request.send();
  },
  requestComplete: function(){
    if(this.status !== 200){
      return;
    }
    var jsonString = this.responseText;
    var bucketList = JSON.parse(jsonString);
    return bucketList;
  },
  var getList = function(){
    var url = "/bucket_list";
    this.makeRequest(url, this.requestComplete);
  }
};

module.exports = BucketList;
