import http from "http";

const serveur = http.createServer((requete, response) => {
  console.log(requete.method);
  console.log(requete.url);
  console.log(requete.headers);
  response.end( 'Hello ! Tu es sur mon port Bienvenue à toi! Viens on est bien')
});

serveur.listen(3001, () => {
  console.log(`Serveur lancé sur: http://localhost:3001`)
});