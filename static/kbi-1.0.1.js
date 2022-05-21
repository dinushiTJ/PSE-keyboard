// Initialize Default Properties of Keyboard Interface
var kbi_props = Object();
function KeyboardInterfaceInit(properties) {
    kbi_props = properties;
    console.log(kbi_props);
}

$(document).ready(function () {
    var text;
    var nVowels;
    var consonants = new Array()
    var consonantsUni = new Array()
    var vowels = new Array()
    var vowelsUni = new Array()
    var vowelModifiersUni = new Array()
    var specialConsonants = new Array()
    var specialConsonantsUni = new Array()
    var specialCharUni = new Array()
    var specialChar = new Array()

    vowelsUni[0] = 'ඌ'; vowels[0] = 'uu'; vowelModifiersUni[0] = 'ූ';
    vowelsUni[1] = 'ඕ'; vowels[1] = 'oo'; vowelModifiersUni[1] = 'ෝ';
    vowelsUni[2] = 'ඕ'; vowels[2] = 'oe'; vowelModifiersUni[2] = 'ෝ';
    vowelsUni[3] = 'ආ'; vowels[3] = 'aa'; vowelModifiersUni[3] = 'ා';
    vowelsUni[4] = 'ඈ'; vowels[4] = 'AA'; vowelModifiersUni[4] = 'ෑ';
    vowelsUni[5] = 'ඈ'; vowels[5] = 'Aa'; vowelModifiersUni[5] = 'ෑ';
    vowelsUni[6] = 'ඈ'; vowels[6] = 'ae'; vowelModifiersUni[6] = 'ෑ';
    vowelsUni[7] = 'ඊ'; vowels[7] = 'ii'; vowelModifiersUni[7] = 'ී';
    vowelsUni[8] = 'ඊ'; vowels[8] = 'ie'; vowelModifiersUni[8] = 'ී';
    vowelsUni[9] = 'ඒ'; vowels[9] = 'ee'; vowelModifiersUni[9] = 'ේ';
    vowelsUni[10] = 'ඒ'; vowels[10] = 'ea'; vowelModifiersUni[10] = 'ේ';
    vowelsUni[11] = 'ඒ'; vowels[11] = 'ei'; vowelModifiersUni[11] = 'ේ';
    vowelsUni[12] = 'ඌ'; vowels[12] = 'uu'; vowelModifiersUni[12] = 'ූ';
    vowelsUni[13] = 'ඖ'; vowels[13] = 'au'; vowelModifiersUni[13] = 'ෞ';
    vowelsUni[14] = 'ඖ'; vowels[14] = 'O'; vowelModifiersUni[14] = 'ෞ';
    vowelsUni[15] = 'අ'; vowels[15] = 'a'; vowelModifiersUni[15] = '';
    vowelsUni[16] = 'ඇ'; vowels[16] = 'A'; vowelModifiersUni[16] = 'ැ';
    vowelsUni[17] = 'ඉ'; vowels[17] = 'i'; vowelModifiersUni[17] = 'ි';
    vowelsUni[18] = 'එ'; vowels[18] = 'e'; vowelModifiersUni[18] = 'ෙ';
    vowelsUni[19] = 'උ'; vowels[19] = 'u'; vowelModifiersUni[19] = 'ු';
    vowelsUni[20] = 'ඔ'; vowels[20] = 'o'; vowelModifiersUni[20] = 'ො';
    vowelsUni[21] = 'ඓ'; vowels[21] = 'E'; vowelModifiersUni[21] = 'ෛ';
    vowelsUni[22] = 'ඓ'; vowels[22] = 'I'; vowelModifiersUni[22] = 'ෛ';
    nVowels = 22;

    //special charachers
    specialConsonantsUni[0] = 'ර්' + '\u200D'; specialConsonants[0] = /\\r/g;
    specialConsonantsUni[1] = 'ං' + '\u200D'; specialConsonants[1] = 'x';
    specialConsonantsUni[2] = 'ඃ' + '\u200D'; specialConsonants[2] = 'H';


    consonantsUni[0] = 'ඳ'; consonants[0] = 'nndh';
    consonantsUni[1] = 'ඬ'; consonants[1] = 'nnd';
    consonantsUni[2] = 'ඟ'; consonants[2] = 'nng';
    consonantsUni[3] = 'ඹ'; consonants[3] = 'mmb';
    consonantsUni[4] = 'ථ'; consonants[4] = 'Th';
    consonantsUni[5] = 'ධ'; consonants[5] = 'Dh';
    consonantsUni[6] = 'ඝ'; consonants[6] = 'gh';
    consonantsUni[7] = 'ඡ'; consonants[7] = 'Ch';
    consonantsUni[8] = 'ඵ'; consonants[8] = 'ph';
    consonantsUni[9] = 'භ'; consonants[9] = 'bh';
    consonantsUni[10] = 'ශ'; consonants[10] = 'sh';
    consonantsUni[11] = 'ෂ'; consonants[11] = 'Sh';
    consonantsUni[12] = 'ඥ'; consonants[12] = 'GN';
    consonantsUni[13] = 'ඤ'; consonants[13] = 'KN';
    consonantsUni[14] = 'ළු'; consonants[14] = 'Lu';
    consonantsUni[15] = 'ද'; consonants[15] = 'dh';
    consonantsUni[16] = 'ච'; consonants[16] = 'ch';
    consonantsUni[17] = 'ඛ'; consonants[17] = 'kh';
    consonantsUni[18] = 'ත'; consonants[18] = 'th';
    consonantsUni[19] = 'ට'; consonants[19] = 't';
    consonantsUni[20] = 'ක'; consonants[20] = 'k';
    consonantsUni[21] = 'ඩ'; consonants[21] = 'd';
    consonantsUni[22] = 'න'; consonants[22] = 'n';
    consonantsUni[23] = 'ප'; consonants[23] = 'p';
    consonantsUni[24] = 'බ'; consonants[24] = 'b';
    consonantsUni[25] = 'ම'; consonants[25] = 'm';
    consonantsUni[26] = '‍ය'; consonants[26] = 'Y';
    consonantsUni[27] = 'ය'; consonants[27] = 'y';
    consonantsUni[28] = 'ජ'; consonants[28] = 'j';
    consonantsUni[29] = 'ල'; consonants[29] = 'l';
    consonantsUni[30] = 'ව'; consonants[30] = 'v';
    consonantsUni[31] = 'ව'; consonants[31] = 'w';
    consonantsUni[32] = 'ස'; consonants[32] = 's';
    consonantsUni[33] = 'හ'; consonants[33] = 'h';
    consonantsUni[34] = 'ණ'; consonants[34] = 'N';
    consonantsUni[35] = 'ළ'; consonants[35] = 'L';
    consonantsUni[36] = 'ඛ'; consonants[36] = 'K';
    consonantsUni[37] = 'ඝ'; consonants[37] = 'G';
    consonantsUni[38] = 'ඨ'; consonants[38] = 'T';
    consonantsUni[39] = 'ඪ'; consonants[39] = 'D';
    consonantsUni[40] = 'ඵ'; consonants[40] = 'P';
    consonantsUni[41] = 'භ'; consonants[41] = 'B';
    consonantsUni[42] = 'ෆ'; consonants[42] = 'f';
    consonantsUni[43] = 'ඣ'; consonants[43] = 'q';
    consonantsUni[44] = 'ග'; consonants[44] = 'g';
    consonantsUni[45] = 'ඡ'; consonants[45] = 'C';
    consonantsUni[46] = 'ච'; consonants[46] = 'c';
    consonantsUni[47] = 'ඞ'; consonants[47] = 'X';
    consonantsUni[48] = 'ඍ'; consonants[48] = 'R';
    //last because we need to ommit this in dealing with Rakaransha
    consonantsUni[49] = 'ර'; consonants[49] = 'r';

    specialCharUni[0] = 'ෲ'; specialChar[0] = 'ruu';
    specialCharUni[1] = 'ෘ'; specialChar[1] = 'ru';


    function startText(text) {
        var s, r, v;
        //special consonents
        for (var i = 0; i < specialConsonants.length; i++) {
            text = text.replace(specialConsonants[i], specialConsonantsUni[i]);
        }
        //consonents + special Chars
        for (var i = 0; i < specialCharUni.length; i++) {
            for (var j = 0; j < consonants.length; j++) {
                s = consonants[j] + specialChar[i];
                v = consonantsUni[j] + specialCharUni[i];
                r = new RegExp(s, "g");
                text = text.replace(r, v);
            }
        }
        //consonants + Rakaransha + vowel modifiers
        for (var j = 0; j < consonants.length; j++) {
            for (var i = 0; i < vowels.length; i++) {
                s = consonants[j] + "r" + vowels[i];
                v = consonantsUni[j] + "්‍ර" + vowelModifiersUni[i];
                r = new RegExp(s, "g");
                text = text.replace(r, v);
            }
            s = consonants[j] + "r";
            v = consonantsUni[j] + "්‍ර";
            r = new RegExp(s, "g");
            text = text.replace(r, v);
        }
        //consonents + vowel modifiers
        for (var i = 0; i < consonants.length; i++) {
            for (var j = 0; j < nVowels; j++) {
                s = consonants[i] + vowels[j];
                v = consonantsUni[i] + vowelModifiersUni[j];
                r = new RegExp(s, "g");
                text = text.replace(r, v);
            }
        }

        //consonents + HAL
        for (var i = 0; i < consonants.length; i++) {
            r = new RegExp(consonants[i], "g");
            text = text.replace(r, consonantsUni[i] + "්");
        }

        //vowels
        for (var i = 0; i < vowels.length; i++) {
            r = new RegExp(vowels[i], "g");
            text = text.replace(r, vowelsUni[i]);
        }

        // console.log(text);
        return (text);
    }


    var previous_input_text = "";
    var new_input_text = "";
    var outofscope_text = "";

    // TextBox Keys
    $(document).on('keypress', kbi_props["textMessageElement"], function (event) {
        switch_check = $('#flexSwitchCheckChecked').is(":checked");
        var key = (event.keyCode ? event.keyCode : event.which);

        if (switch_check) {

            if (key >= 20 && key <= 126) {
                previous_input_text += String.fromCharCode(key);
            }
            console.log("Accumilated: " + previous_input_text);
        }
    });

    // Handling Special Keys
    $(document).on('keydown', kbi_props["textMessageElement"], function (event) {
        // Only activates if the language is Sinhala
        switch_check = $('#flexSwitchCheckChecked').is(":checked");
        var key = (event.keyCode ? event.keyCode : event.which);


        // Handling the Backspace for Sinhalese
        if (switch_check) {
            if (key == 8) {

                var selection = window.getSelection();
                var selectedText = selection.toString();

                if (!selectedText) {
                    previous_input_text = "";
                    var current_val = $(  kbi_props["textMessageElement"]).val();
                    current_val = current_val.substring(current_val.length - 1, -1);
                    outofscope_text = current_val;
                } else {
                    previous_input_text = "";
                    var current_val = $(  kbi_props["textMessageElement"]).val();
                    var textComponent = document.getElementsByClassName('rw-new-message')[0];

                    var startPos = textComponent.selectionStart;
                    var endPos = textComponent.selectionEnd;
                    var selectedText = textComponent.value.substring(startPos, endPos);

                    // console.log(startPos, endPos, selectedText);
                    outofscope_text = current_val.substring(0, startPos) + current_val.substring(endPos,);
                }
            }
        }

        // Handling Enter (Submitting Text when Enter is pressed)
        if (key == 13) {
            $(kbi_props["sendMessageElement"]).trigger("click");
        }
        // console.log(new_input_text);
    });


    // Filling the Text-box with the new value
    $(document).on('keyup', kbi_props["textMessageElement"], function (event) {
        // Only activates if the language is Sinhala
        switch_check = $('#flexSwitchCheckChecked').is(":checked");

        if (switch_check) {
            new_input_text = startText(previous_input_text);
            // console.log(new_input_text);
            $(  kbi_props["textMessageElement"]).val(outofscope_text + new_input_text);
        }
    });


    // Doc Keys
    // CTRL+Q Shortcut for switching languages
    var keys = {};

    $(document).keydown(function (event) {
        var key = (event.keyCode ? event.keyCode : event.which);

        if (key == 17) {
            if (81 in keys) {
                delete keys[81];
            }
        }
        if (key == 17 || key == 81) {
            keys[key] = true;
        } else {
            keys = {};
        }

        // console.log(keys);
        switch_check = $('#flexSwitchCheckChecked').is(":checked");

        if (17 in keys && 81 in keys) {
            if (switch_check) {
                $("#flexSwitchCheckChecked").prop('checked', false);
                buildToast("bg-danger", "Switched to English", "Press CTRL+Q to Switch back to Sinhala.", "", "media/lang.png");
                $('.toast').toast('show');
                outofscope_text = "";
            } else {
                $("#flexSwitchCheckChecked").prop('checked', true);
                buildToast("bg-danger", "Switched to Sinhala", "Press CTRL+Q to Switch back to English.", "", "media/lang.png");
                $('.toast').toast('show');
                previous_input_text = "";
                outofscope_text = $(  kbi_props["textMessageElement"]).val();
            }
        }
    });

    $(document).keyup(function (event) {
        var key = (event.keyCode ? event.keyCode : event.which);
        delete keys[key];
    });

});
