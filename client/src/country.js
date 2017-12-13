var Country = function(options){
  this.name = options.name;
  this.latlng = options.latlng;
  this.api_index = options.api_index;
  this.capital = options.capital;
  this.subregion = options.subregion;
  // this.flag = options.flag;
  this.visited = false;

}


module.exports = Country;
