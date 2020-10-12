const axios = require('axios');
// const data = require('tao_arrets');
const data = require('./tao_arrets');

// import  data from "";
let nb=0;




for ( arret of data){
    //console.log(arret)
    setTimeout(function(){
      axios
      .post('http://163.172.183.165:1337/arrets/', {
        nom_arret: arret["fields"]["nom_generi"] || "",
        commune: arret["fields"]["commune"] || "",
        categ_arret: arret["fields"]["categ_arret"],
        lignes_pas: arret["fields"]["lignes_pas"],
        Latitude: arret["fields"]["geo_point_2d"][0].toString(),
        Longitude: arret["fields"]["geo_point_2d"][1].toString(),
        directions: arret["fields"]["directions"] || "",
      })
      .then(response => {
        // Handle success.
    
        // console.log('User profile', response.data.user);
        // console.log('User token', response.data);
        nb+=1;
        console.log(nb);
       
      })
      .catch(error => {
        // Handle error.
        console.log('An error occurred:', error);
      });
    
    }, 5000)

}
// Request API.
// axios
//   .post('http://localhost:1337/arrets', {
//     identifier: 'kany',
//     password: 'password',
//   })
//   .then(response => {
//     // Handle success.
//     console.log('Well done!');
//     console.log('User profile', response.data.user);
//     console.log('User token', response.data.jwt);
//   })
//   .catch(error => {
//     // Handle error.
//     console.log('An error occurred:', error);
//   });