// Debut Initalisation de ma courbe
const datapoints = [1200, 750, 775, 760, 2560];
const DATA_COUNT = datapoints.length;
// const DATA_COUNT = datapoints.length + 2; on a supprimé le 2
const labels = [];
for (let i = 0; i < DATA_COUNT; ++i) {
  labels.push(i.toString());
}
const data = {
  labels: labels,
  datasets: [
    {
      label: "Compte", //nom de chaque point de la courbe
      data: datapoints, // nom tableau de point
      borderColor: "purple", // couleur de la courbe
      fill: true, // colore le dessous de la courbe
      cubicInterpolationMode: "monotone", // arrondir la courbe
    },
  ],
};
//  Fin Initalisation de ma courbe

// <block:config:0>
const config = {
  type: "line",
  data: data,
  options: {
    elements: {
      point: {
        radius: 0, //gere les cercles des points en donnant rayon ou diametre
      },
    },
    responsive: true,
    plugins: {
      legend: false,
      //   title: {
      //     display: true,
      //     text: "Chart.js Line Chart - Cubic interpolation mode",
      //   },
    },
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  },
};

/*Le contexte du canevas HTML */
let context = document.getElementById("myChart").getContext("2d");
/* Création du graphique */
let chart = new Chart(context, config);

// /* Générer des données aléatoires */
// function generateData() {
//   randomthune = (Math.random() * Math.floor(50)).toFixed(2); // Deux chiffres après la virgule
//   addTemperature(new Date().toLocaleTimeString(), randomTemperature);
// }

function addOperator(positionX, thune) {
  /* Ajoute la valeur en X */
  config.data.labels.push(positionX);

  /* Ajoute la valeur */
  config.data.datasets[0].data.push(thune);

  /* Rafraichir le graphique */
  chart.update();
}

//Bouton credit filtre D C// changement rajout ID sur html l77 env
// btn all operation
let btnAllOpe = document.getElementById("allOperation");
// integralité des div operation
let allOpe = document.querySelectorAll(".operation");

//////////////////////////////////////////////// Travail de ma Team ( Foriane, Ronee Josselin et Soéli)//////////////////////////////////////////////////////////

// recuperer grace a la saisie utilisateur notre ajout client
// le mieux dans ce cas let userChoice = document.getElemementByClasseName("")
let userChoice = document.querySelector(".btSubmit");
//aller chercher si la saisie et plus ou moins)
let operateur = document.getElementById("operator");
// declarer le solde
let solde = document.getElementById("solde");
// récuperer le vrai solde (le montant)
let montant = document.getElementById("montant");

// pour nous on a fait une fonction totalOp ou si l'operateue est positif ca ajoute au montant la derniere op si autre ca le soustrait
function totalOp() {
  if (operateur.value == "+") {
    solde += montant;
  } else {
    solde -= montant;
  }
}

// idee pour une formule plus compact qui reconnaisse le + ou le - pour le rentrer directement dans le calcul
// function totalOP2() {
//   solde = solde operateur.value userChoice.value ;
// }
//
// faire un truc comme ca pour faire la fonction a chaque click d'ajout d'op
//boutonvalider.addEventListener("click", comparaison); ca ca vient du chiffre mystere
//
userChoice.addEventListener("click", totalOp);
//
//Faire un inner HTML pour mettre a jour l'endroit du titre ou apparait le solde

//////////////////////////////////////////////// Travail de ma Team ( Foriane, Ronee Josselin et Soéli)///////FIN///////////////////////////////////////////////////
