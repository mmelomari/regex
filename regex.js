function converterData(dataAmericana) {

  var padrao = /(\d{4})-(\d{2})-(\d{2})/;
  var dataBrasileira = dataAmericana.replace(padrao, '$3/$2/$1');  
  return dataBrasileira;
}

var dataAmericana = "2022-11-30";
var dataBrasileira = converterData(dataAmericana);
console.log("Data Americana:", dataAmericana);
console.log("Data Brasileira:", dataBrasileira);