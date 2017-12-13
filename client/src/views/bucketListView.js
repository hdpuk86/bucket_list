var BucketListView = function(bucketlist){
  this.render(bucketlist);
};

BucketListView.prototype = {
  render: function(bucketlist){
    var div = document.getElementById('bucket-list');
    div.innerText = "";
    bucketlist.forEach(function(country{
      var li = document.createElement('li');
      li.innerText = country.name;

      var deletebtn = document.createElement('button');
      deletebtn.innerText = "Remove";

      var visited = document.createElement('input');
      visited.setAttribute("type", "checkbox");

      var ul = document.createElement('ul');
      li.appendChild(visited);
      li.appendChild(deletebtn);
      ul.appendChild(li);
      div.appendChild(ul);
    })

  }

};

module.exports = BucketListView;
