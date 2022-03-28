// Pour commencer à écrire du JS avec JQuery, il est recommandé de toujours débuter avec un document ready
// $ représente l'outil JQuery, lorsque l'on utilise JQuery, on commence toujours par $.
// Attention, en cas de conflit dû à l'appel de plusieurs bibliothèques JavaScript dans une page web, cela créer un conflit et
// et le $() ne focntionne plus. Dans ce cas il est possible d'utiliser jQuery()

$(document).ready(function () {
  // quand le document est entièrement chargé

  // --------------------------
  // Selection par l'id
  // --------------------------

  // exercice selectionner l'élement qui a l'id "maSection",
  // remplacer le texte d'origine par "<h2>Bonjour à tous</h2>"

  var maSection = $("#maSection");

  console.log(maSection.text());

  maSection.html("<h2>Bonjour à tous</h2>");

  // --------------------------------------
  // Selection par la classe
  // --------------------------------------

  // exercice : selectionner les div qui ont la classe mesDivs
  // appliquer du css :
  /*
    padding: 20px,
    backgroundcolor :'red',
    margin-top: 10px,
    color : navy
  */

  var mesDivs = $(".mesDivs");
  mesDivs.css("padding", "20px");
  mesDivs.css({ backgroundColor: "red", "margin-top": "10px", color: "navy" });

  // -----------------------------------
  // Selection par le nom de balise
  // -----------------------------------

  //exercice sur les p appliquer le css :
  /*
    font-family : 'calibri',
    font-size : "21px",
    color : "orange",
    background-color : 'lightblue',
    padding : '10px'
  */

  $("p").css({
    "font-family": "calibri",
    fontSize: "21px",
    color: "orange",
    "background-color": "lightblue",
    padding: "10px",
  });

  // ------------------------------------
  // SELECTEUR MULTIPLE
  // ------------------------------------

  console.log($("span, div, p"));
});
