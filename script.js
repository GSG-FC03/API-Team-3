fetch('https://corona.lmao.ninja/v2/countries/usa')
.then(function(response)  {
    return response.json();
  })
  .then(function(data){
    console.log(data);
    // document.getElementById("country").innerHTML = data.country
    document.getElementById("#flag ").src = data.countryInfo.flag;
    document.getElementById("cases").innerHTML = data.cases;
    document.getElementById("recovered").innerHTML = data.recovered;
    document.getElementById("death").innerHTML = data.death;
  });