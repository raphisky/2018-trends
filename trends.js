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

var subjects = "{Booba|Elon Musk|Cardi B|Macron|Trump|Deschamps|Theresa May|Une IA|Un•e ministr•e|Rihanna|Mbappé|Un millennial}";

var verbs = "{financera|lancera|plaquera tout pour|annoncera|interdira|commencera|adoptera|soutiendra|investira dans|bannira|s’attaquera à|révolutionnera}";

var complements = "{un pure player|la paix dans le monde|une fat mixtape|du pâté de campagne|du crossfit|l’arbitre|une course en sac|sa startup|Jul|la blockchain|l’huile de palme|une soirée electroswing};";

var adverbs = "{et cassera internet.|sans état d’âme.|toujours debout.|par amour du beau jeu.|sans autre forme de procès.|contre l’avis de sa mère.|jusqu’à la fin des temps.|sans gluten.|contre toute attente.|faisant fi des convenances.|réalisant son rêve d’enfant.|si le temps le permet.|ça promet.};";


  document.getElementById('generate').onclick = function() {
      var subj = document.getElementById('subject');
      subj.innerText = spin(subjects) + " " + spin(verbs) + " " + spin(complements) + ", " + spin(adverbs);
  }
