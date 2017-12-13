var BucketListView = function(bucketlist){
  this.render(bucketlist);
};

BucketListView.prototype = {
  render: function(bucketlist){
    bucketlist.forEach(country){
      var li = document.createElement('li');
      li.innerText = country.name;
      var deletebtn = document.createElement('button');
      deletebtn.innerText = "Remove";
      var visited = document.createElement('input');
      visited.setAttribute("type", "checkbox");
      var div = document.getElementById('bucket-list');
      var ul = document.createElement('ul');
      deletebtn.appendChild(visited);
      li.appendChild(deletebtn);
      ul.appendChild(li);
      div.appendChild(ul);
    }
  }
};

module.exports = BucketListView;
