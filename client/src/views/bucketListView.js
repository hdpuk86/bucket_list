var BucketListView = function(bucketlist){
  this.render(bucketlist);
};

BucketListView.prototype = {
  render: function(bucketlist){
    var div = document.getElementById('bucket-list');
    div.innerText = "";
    bucketlist.forEach(function(country){
      var li = document.createElement('li');
      li.innerText = country.name;

      var form = document.createElement('form');
      form.method = "POST";
      form.action = "/bucketlist/remove/" + country.name;

      var deletebtn = document.createElement('button');
      deletebtn.innerText = "Remove";
      deletebtn.type = "submit";


      var visited = document.createElement('input');
      visited.setAttribute("type", "checkbox");

      var ul = document.createElement('ul');
      form.appendChild(deletebtn);
      li.appendChild(visited);
      li.appendChild(form);
      ul.appendChild(li);
      div.appendChild(ul);
    })

  }

};

module.exports = BucketListView;
