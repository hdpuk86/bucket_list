var Country = require('../country');

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

      var form = document.createElement('form');
      form.method = "POST";
      var newCountry = new Country(country);
      console.log(country);

      form.action = "/bucketlist/new/" + JSON.stringify(newCountry);

      var button = document.createElement('button');
      button.innerText = "Add";
      button.type = "submit";

      var ul = document.createElement('ul');
      form.appendChild(button);
      li.appendChild(form);
      ul.appendChild(li);
      div.appendChild(ul);
    })

  }

};

module.exports = SearchView;
