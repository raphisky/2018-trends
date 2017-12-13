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

var subjects = "{Niska|Elon Musk|Cardi B|Macron|Trump|Deschamps|Theresa May|Une IA|Un•e ministre|Rihanna|Mbappé|Un millennial}";

var verbs = "{plaque tout pour|émet des doutes sur|investit dans|disrupte|soutient|révolutionne|dénonce|fait la promo pour|acclame|se passionne pour|découvre|soûle tout le monde avec}";

var complements = "{la K-Pop|la paix dans le monde|le crossfit|la bière sans alcool|le bitcoin|le monde des startups|la rédaction de poèmes X|les voitures autonomes|le tatouage stick’n’poke|le binge watching|le réchauffement climatique|l’écriture inclusive}";

var adverbs = "{et casse internet.|parce que #goals.|en VR.|par amour du beau jeu.|selon un site complotiste.|contre l’avis de sa mère.|jusqu’à la fin des temps.|avec le sourire.|contre toute attente.|faisant fi des convenances.|réalisant son rêve d’enfant.|si le temps le permet.}";


  document.getElementById('generate').onclick = function() {
      var subj = document.getElementById('subject');
      subj.innerText = spin(subjects) + " " + spin(verbs) + " " + spin(complements) + ", " + spin(adverbs);
  }
