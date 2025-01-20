import readline from 'readline/promises';
import fs from 'fs/promises';


// 2. Demander a l'utilisateur de vous donner : nom, prmnom et age
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function createUser() {
  try {
    const prenom = await rl.question('Quel est votre prénom ? ');
    const nom = await rl.question('Quel est votre nom ? ');
    const age = await rl.question('Quel est votre âge ? ');

    const userData = `Nom: ${nom}\nPrénom: ${prenom}\nÂge: ${age}`;

      // Pour creer un fichier txt user nom prenom et age
      // permet a chque utilisateur davoir son fichier
      fs.writeFile(`${nom}_${prenom}.txt`, userData, (err) =>{
        console.log('err', err)
        return;
      });

    console.log(`Bonjour ${prenom} ${nom}, vous avez ${age} ans.`);

  } finally {
    rl.close();
  }
}

createUser();