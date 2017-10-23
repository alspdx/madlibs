$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    var blanks = ["holiday", "building", "verb1", "creature", "clothing", "figure", "plural-noun1", "past-tense-verb", "food", "plural-noun2"];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });

    $("#story").show();
  });
});
