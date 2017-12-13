var SearchView = function(countries){
  this.render(countries);
};

SearchView.prototype = {
  render: function(countries){
    countries.forEach(country){
      var li = document.createElement('li');
      li.innerText = country.name;
      var button = document.createElement('button');
      button.innerText = "Add";
      var div = document.getElementById = "search-list";
      var ul = document.createElement('ul');
      li.appendChild(button);
      ul.appendChild(li);
      div.appendChild(ul);
    }
  }
};

module.exports = SearchView;
