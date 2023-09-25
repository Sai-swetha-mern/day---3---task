

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var result = JSON.parse(request.response);
for(i=0; i<result.length; i++)
 
var country = result[i];
var name = country.name.common;
var region = country.region;
var subRegion = country.subregion;
var population = country.population;

    console.log(`Country: ${name}`);
    console.log(`Region: ${region}`);
    console.log(`Subregion:${subRegion}`);
    console.log(`Population: ${population}`);
   
}
