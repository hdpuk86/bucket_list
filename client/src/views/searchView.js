var SearchView = function(countries){
  this.render(countries);
};

SearchView.prototype = {
  render: function(countries){
    var div = document.getElementById("search-list");
    div.innerText = "";
    countries.forEach(function(country){
      var li = document.createElement('li');
      li.innerText = country.name;

      var button = document.createElement('button');
      button.innerText = "Add";

      var ul = document.createElement('ul');
      li.appendChild(button);
      ul.appendChild(li);
      div.appendChild(ul);
    })

  }

};

module.exports = SearchView;
