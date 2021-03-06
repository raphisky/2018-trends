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

// FRENCH

var subjects = "{Super|Géniale|Incroyable|Fantastique}"
// var subjects = "{Niska|Elon Musk|Cardi B|Emmanuel Macron|Donald Trump|Didier Deschamps|Theresa May|Une IA|Un•e ministre|Rihanna|Kylian Mbappé|Un millennial}";

// var verbs = "{plaquera tout pour|émettra des doutes sur|investira dans|disruptera|soutiendra|révolutionnera|dénoncera|promouvra|acclamera|se passionnera pour|découvrira|saoûlera tout le monde avec}";
var verbs = "{aprem|moment|parenthèse de rire|instant Quiz|célébration du capitalisme}"

// var complements = "{la K-Pop|la paix dans le monde|le crossfit|la bière sans alcool|le bitcoin|le monde des startups|la rédaction de poèmes X|les voitures autonomes|le tatouage stick’n’poke|le binge watching|le réchauffement climatique|l’écriture inclusive}";
var complements = "{chez Konbini|au 48 avenue Claude Vellefaux|dans les locaux de Konbini}"

// var adverbs = "{et casse internet.|parce que #goals.|en VR.|par amour du beau jeu.|selon un site complotiste.|contre l’avis de sa mère.|jusqu’à la fin des temps.|avec le sourire.|contre toute attente.|faisant fi des convenances.|réalisant son rêve d’enfant.|si le temps le permet.}";
var adverbs = "{quelle marrade quand même.|qu'est-ce qu'on a ri !|c'était hyper chouette.|Konbini c'est vraiment des belles personnes.}"

var hashtags = "{#quelelol|#fun|#nofilter|#allpopeverything|#vivementlundi|#culture|#quiz|#casualfriday|#teambuilding}"

// ENGLISH

// var subjects_en = "{Donald Glover|Elon Musk|Cardi B|Emmanuel Macron|Donald Trump|Floyd Mayweather|Angela Merkel|An AI|Serena Williams|Kendrick Lamar|Selena Gomez|A millennial}";

// var verbs_en = "{will fund|will make a diss track against|will oppose|will hack|will only snap about|will speak against|will discover|will give up on|will promote|will disrupt|won’t shut up about|will moan about}";

// var complements_en = "{world peace|Bitcoin|Emo-rap|acroyoga|several baby otters|avocado lattes|palm oil|global warming|root beer|space exploration|millennial pink|man buns}";

// var adverbs_en = "{and breaks the internet.|going the extra mile.|as one does.|leaving nothing to chance.|despite Mother’s advice.|to the surprise of no one.|against all odds.|ignoring all criticism.|realising a childhood dream.|experts forecast.|in VR though.|because #goals.}";


  document.getElementById('generate').onclick = function() {
      var subj = document.getElementById('subject');
      var subj_en = document.getElementById('subject_en');
      subj.innerText = spin(subjects) + " " + spin(verbs) + " " + spin(complements) + ", " + spin(adverbs) + " " + spin(hashtags);
      subj_en.innerText = spin(subjects_en) + " " + spin(verbs_en) + " " + spin(complements_en) + ", " + spin(adverbs_en);
  }
