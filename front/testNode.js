var formdata = new FormData();
formdata.append("nom_arret", "kany@password.com");
formdata.append("commune", "password");
formdata.append("categ_arret", "password");
formdata.append("lignes_pas", "password");
formdata.append("Latitude", "password");
formdata.append("Longitude", "password");
formdata.append("directions", "password");

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

fetch("http://163.172.183.165:1337/arrets", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));