var SPINTAX_PATTERN = /\{[^"\r\n\}]*\}/;
var spin = function (spun) {
  var match;
  while (match = spun.match(SPINTAX_PATTERN)) {
   match = match[0];
   var candidates = match.substring(1, match.length - 1).split("|");
   spun = spun.replace(match, candidates[Math.floor(Math.random() * candidates.length)])
  }
  return spun;
 }
var spin_countVariations = function (spun) {
  spun = spun.replace(/[^{|}]+/g, '1');
  spun = spun.replace(/\{/g, '(');
  spun = spun.replace(/\|/g, '+');
  spun = spun.replace(/\}/g, ')');
  spun = spun.replace(/\)\(/g, ')*(');
  spun = spun.replace(/\)1/g, ')*1');
  spun = spun.replace(/1\(/g, '1*(');
  return eval(spun);
 }

var subjects = "{Booba|Elon Musk|Taylor Swift|Kanye|Macron|Trump|Deschamps|Cyril Hanouna|Céline Dion|Theresa May|Une intelligence artificielle|Konbini|La classe politique|Une illustre inconnue|Rihanna|Un truc jaune qui attend|Un panda roux|Mbappé|Un millennial|Une dominatrice}";

var verbs = "{lancera|plaquera tout pour|prendra position pour|fera barrage à|fera tout pour|fera tout contre|va arrêter de|commencera|sortira|soutiendra|s’illustrera par|investira dans|bannira|s’attaquera à}";

var complements = "{un pure player|l’ONU|la paix dans le monde|sa mixtape de 2018|un porc vietnamien|du pâté de campagne|sa gym suédoise|un joueur du Bayern|une course en sac|sa startup|une portée de chatons|une calvitie rampante|un restaurant arménien|cinéma flamand|Jul|la blockchain|un abribus|l’huile de palme|une soirée electroswing|un jeu de mölki}";

var adverbs = "{et cassera internet.|si Dieu le veut.|pourquoi pas, après tout ?.|sans état d’âme.|toujours debout.|de façon exponentielle .|sans autre forme de procès.|le tout, sans les mains.|contre l’avis de sa mère.|et ce, chaque mois.|jusqu’à la fin des temps.|si on ne fait rien pour l’en empêcher.|sans qu’on puisse y faire quoi que ce soit.|sans gluten.|contre toute attente.|tant sur le plan tactique que sur le plan technique.|au grand dam de la génération Z.|Avec un flegme tout britannique.|faisant fi des convenances.|réalisant son rêve d’enfant.|en dépit de la conjoncture.|si le temps le permet.}";

  document.getElementById('generate').onclick = function() {
      var subj = document.getElementById('subject');
      subj.innerText = spin(subjects) + " " + spin(verbs) + " " + spin(complements) + ", " + spin(adverbs);
  }
