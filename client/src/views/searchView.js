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
      var ul = document.getElementById = "search-list";
      li.appendChild(button);
      ul.appendChild(li);
    }
  }
};

module.exports = SearchView;
