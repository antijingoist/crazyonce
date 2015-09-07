$(document).on("pageinit", "#crazyPage", function(event) {

    var crazyStatement = 'Crazy? I was crazy once. They stuck me in a padded room with rats. Rats! Rats drive me crazy!';

    var theSisko      = ["But my story...",
                         "I don't want to rest. I want to tell my stories.",
                         "It is to me. If I don't finish my story... if Sisko doesn't open the Orb box... he can't contact the Prophets...",
                         "You want me to paint over my story?",
                         "Got to cover it up... bury it...",
                         "But I haven't finished my story. Captain Sisko has found the Orb of the Emissary...",
                         "But he hasn't opened it yet.",
                         "No one will give me any paper...",
                         "I want to go home. I don't belong here.",
                         "I feel fine.",
                         "Then give me a typewriter.",
                         "Dangerous? To whom?",
                         "What for?"
                        ];

    var mrVulcan      = ['I know you.',
                         "You're an impostor.",
                         "It is difficult with so many interruptions.",
                         "The Doctor comes on Wednesdays.",
                         "Commander Barclay's visits are erratic.",
                         "71 53 53 31 71 53 53 31 71 53",
                         "Long range sensors have detected no trace. Her disappearance remains a mystery. I am deeply concerned.",
                         "Her disappearance.",
                         "53 31 71 53",
                         "Her disappearance remains a mystery.",
                         "I am deeply concerned, deeply concerned.",
                         "She's never coming back! Her disappearance remains a mystery. I'm deeply concerned. Deeply concerned."
                        ];

    $("input").change();

    $("input").change(function(event, ui) {
        var fullCrazy = '';
        var siskotizeIt = $('#siskotize').is(':checked');
        var tuvoktizeIt = $('#tuvoktize').is(':checked');

        var siskoQuote = 0;
        var tuvokQuote = 0;
        var grammer = 0;

        for (var i = 0; i < $("#crazySldr").val(); i++) {
            grammer = Math.floor(Math.random() * (100 - 1) + 1);

            if ((grammer < 30) && (fullCrazy !== '')) {
               fullCrazy = '</p><p>' + fullCrazy;
            }

            if (grammer > 90) {
               fullCrazy = '<b>' + crazyStatement + '</b>' + " " + fullCrazy;
            } else {
               fullCrazy = crazyStatement + " " + fullCrazy;
            }

            if (siskotizeIt) {
               fullCrazy = dropQuote(theSisko) + fullCrazy;
            }

            if (tuvoktizeIt) {
               fullCrazy = dropQuote(mrVulcan) + fullCrazy;
            }
        }
        fullCrazy = '<p>' + fullCrazy + '</p>';
        $("#crazyText").html(fullCrazy);
    });

    function dropQuote(quoteArray) {
      var quoteNumber = 0;
      var totalText = "";
      var grammer = 0;

      grammer = (Math.random() * (100 - 1) + 1);

      if ((Math.random() * (100 - 1) + 1) < 25) {
         quoteNumber = Math.floor(Math.random() * (quoteArray.length - 1) + 0);
         totalText = quoteArray[quoteNumber] + totalText + " ";
         if (grammer < 20) {
            totalText = '<b>' + totalText + '</b>';
         }
      }

      return totalText;
    }

});