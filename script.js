// let countryName=document.querySelector("input.val");
// window.onload = function(){  
//   countryName="Palestine"
// // };
let submit = document.getElementById("submit")
let input = document.getElementById("country")
submit.addEventListener('click',()=>{
  fetch(`https://corona.lmao.ninja/v2/countries/${input.value}`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    document.getElementById("countryName").innerHTML = data.country;
    document.getElementById("flag").src=data.countryInfo.flag;
    document.getElementById("cases").innerHTML = data.cases.toLocaleString();
    document.getElementById("death").innerHTML = data.deaths.toLocaleString();
    document.getElementById("recovered").innerHTML = data.recovered.toLocaleString();
  });
  input.value="";
}
)

