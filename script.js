// let countryName=document.querySelector("input.val");
// window.onload = function(){  
//   countryName="Palestine"
// };


fetch('https://corona.lmao.ninja/v2/countries/Palestine')
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data);
  document.getElementById("flag").src = data.countryInfo.flag;
//   document.getElementById("country").innerHTML = data.country;
  document.getElementById("cases").innerHTML = data.cases.toLocaleString();
  document.getElementById("death").innerHTML = data.deaths.toLocaleString();
  document.getElementById("recovered").innerHTML = data.recovered.toLocaleString();
});
