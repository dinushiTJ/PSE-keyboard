// // Char replacing logic
// var sinhala_vowels = [
//     'a', 'aa', 'A', 'AA', 'Aa', 'i', 'ii', 'u', 'uu', 'R', 'RR', 'Rr', 'Q', 'QQ', 'Qq', 'e',
//     'ee', 'E', 'o', 'oo', ' O', 'x', 'H'
// ];

// var sinhala_vowel_spc = ['aa', 'A', 'AA', 'i', 'ii', 'u', 'uu', 'R', 'RR', 'Rr', 'e', 'ee', 'E', 'o', 'oo', 'O']

// var sinhala_consonants = [
//     'k', 'K', 'g', 'G', 'KN', 'nng', 'ch', 'Ch', 'j', 'J', 'KJ', 'GN', '??', 't', 'T', 'd',
//     'D', 'N', 'nnd', 'th', 'Th', 'd', 'Dh', 'n', 'nndh', 'p', 'P', 'b', 'B', 'm', 'mmb', 'y',
//     'r', 'l', 'w', 'sh', 'Sh', 's', 'h', 'L', 'f'
// ];

// // Char Mapping [Common]
// var sinhala_vowel_map = {
//     'a': 'අ', 'aa': 'ආ', 'A': 'ඇ ', 'AA': 'ඈ', 'Aa': 'ඈ', 'i': 'ඉ', 'ii': 'ඊ', 'u': 'උ',
//     'uu': 'ඌ', 'R': 'ඍ', 'RR': 'ඎ', 'Rr': 'ඎ', 'Q': 'ඏ', 'QQ': 'ඐ', 'Qq': 'ඐ',
//     'e': 'එ', 'ee': 'ඒ', 'E': 'ඓ', 'o': 'ඔ', 'oo': 'ඕ', ' O': 'ඖ', 'x': 'ං', 'H': 'ඃ'
// };

// var sinhala_vowel_spc_map = {
//     'aa': 'ා', 'A': ' ැ', 'AA': ' ෑ', 'i': ' ි', 'ii': ' ී', 'u': ' ු', 'uu': ' ූ', 'R': ' ෘ',
//     'RR': ' ෲ', 'Rr': ' ෲ', 'e': ' ෙ', 'ee': ' ේ', 'E': 'ෛ', 'o': ' ො', 'oo': ' ෝ ',
//     'O': ' ෞ', 'Oo': ' ෟ'
// }

// var sinhala_consonant_map = {
//     'k': 'ක්', 'K': 'ඛ්', 'g': 'ග්', 'G': 'ඝ්', 'X': 'ඞ', 'nng': 'ඟ්',
//     'ch': 'ච්', 'Ch': 'ඡ්', 'j': 'ජ්', 'J': 'ඣ්', 'KJ': 'ඤ්', 'GN': 'ඥ්', '??': 'ඦ',
//     't': 'ට්', 'T': 'ඨ්', 'd': 'ඩ්', 'D': 'ඪ්', 'N': 'ණ්', 'nnd': 'ඬ්',
//     'th': 'ත්', 'Th': 'ථ්', 'dh': 'ද්', 'Dh': 'ධ්', 'n': 'න්', 'nndh': 'ඳ',
//     'p': 'ප්', 'P': 'ඵ්', 'b': 'බ්', 'B': 'භ්', 'm': 'ම්', 'mmb': 'ඹ්',
//     'y': '‍ය්', 'Y': '‍ය්', 'r': 'ර්', 'l': 'ල්', 'w': 'ව්', 'sh': 'ශ්', 'Sh': 'ෂ්',
//     's': 'ස්', 'h': 'හ්', 'L': 'ල්', 'f': 'ෆ්'
// };

// var sinhala_all_posibilities = {    
//     'a': 'අ', 'aa': 'ආ', 'A': 'ඇ ', 'AA': 'ඈ', 'Aa': 'ඈ', 'i': 'ඉ', 'ii': 'ඊ', 'u': 'උ',
//     'uu': 'ඌ', 'R': 'ඍ', 'RR': 'ඎ', 'Rr': 'ඎ', 'Q': 'ඏ', 'QQ': 'ඐ', 'Qq': 'ඐ',
//     'e': 'එ', 'ee': 'ඒ', 'E': 'ඓ', 'o': 'ඔ', 'oo': 'ඕ', ' O': 'ඖ', 'x': 'ං', 'H': 'ඃ',
//     'k': 'ක්', 'K': 'ඛ්', 'g': 'ග්', 'G': 'ඝ්', 'X': 'ඞ', 'nng': 'ඟ්',
//     'ch': 'ච්', 'Ch': 'ඡ්', 'j': 'ජ්', 'J': 'ඣ්', 'KJ': 'ඤ්', 'GN': 'ඥ්', '??': 'ඦ',
//     't': 'ට්', 'T': 'ඨ්', 'd': 'ඩ්', 'D': 'ඪ්', 'N': 'ණ්', 'nnd': 'ඬ්',
//     'th': 'ත්', 'Th': 'ථ්', 'dh': 'ද්', 'Dh': 'ධ්', 'n': 'න්', 'nndh': 'ඳ',
//     'p': 'ප්', 'P': 'ඵ්', 'b': 'බ්', 'B': 'භ්', 'm': 'ම්', 'mmb': 'ඹ්',
//     'y': '‍ය්', 'Y': '‍ය්', 'r': 'ර්', 'l': 'ල්', 'w': 'ව්', 'sh': 'ශ්', 'Sh': 'ෂ්',
//     's': 'ස්', 'h': 'හ්', 'L': 'ල්', 'f': 'ෆ්',
// }

// var special_chars = {
//     " ": " ", ".": ".", ",": ",", "<": "<", ">": ">", "?": "?", "/": "/", "'": "'", "\"": "\"",
//     ":": ":", ";": ";", "[": "[", "]": "]", "{": "{", "}": "}", "|": "|", "\\": "\\", "0": "0",
//     "1": "1", "2": "2", "3": "3", "4": "4", "5": "5", "6": "6", "7": "7", "8": "8", "9": "9",
//     "+": "+", "-": "-", "*": "*", "=": "=", "_": "_", "(": "(", ")": ")", "&": "&", "^": "^",
//     "%": "%", "$": "$", "#": "#", "@": "@", "!": "!", "~": "~", "`": "`"
// };

// // Char Mapping [Length]
// var sinhala_len_1 = { 'Q': 'ඏ', 'x': 'ං', 'H': 'ඃ', 'O': 'ඖ', 'E': 'ඓ' }
// var sinhala_len_2 = {
//     'aa': 'ආ', 'AA': 'ඈ', 'Aa': 'ඈ', 'ii': 'ඊ',
//     'uu': 'ඌ', 'RR': 'ඎ', 'Rr': 'ඎ', 'QQ': 'ඐ',
//     'Qq': 'ඐ', 'ee': 'ඒ', 'oo': 'ඕ', 'X': 'ඞ'
// }

var sinhala_vowel_map = {
    'a': 'අ',
    'aa': 'ආ',
    'A': 'ඇ',
    'AA': 'ඈ',
    'Aa': 'ඈ',
    'i': 'ඉ',
    'ii': 'ඊ',
    'u': 'උ',
    'uu': 'ඌ',
    'R': 'ඍ',
    'RR': 'ඎ',
    'Rr': 'ඎ',
    'Q': 'ඏ',
    'QQ': 'ඐ',
    'Qq': 'ඐ',
    'e': 'එ',
    'ee': 'ඒ',
    'E': 'ඓ',
    'o': 'ඔ',
    'oo': 'ඕ',
    'O': 'ඖ'
};

var sinhala_vowel_modified_map = {
    'a': '',
    'aa': 'ා',
    'A': 'ැ',
    'AA': 'ෑ',
    'Ae': 'ෑ',
    'i': 'ි',
    'ii': 'ී',
    'u': 'ූ',
    'uu': 'ූ',
    'R': 'ෘ',
    'RR': 'ෲ',
    'Rr': 'ෲ',
    'e': 'ෙ',
    'ee': 'ේ',
    'E': 'ෛ',
    'o': 'ො',
    'oo': 'ෝ',
    'O': 'ෞ',
    'Oo': 'ෞ'
};

var sinhala_special_map = {
    'x': 'ං',
    'H': 'ඃ',
    'GN': 'ඥ',
    'RG': 'ර්' + '\u200D'
};

var consonent_set_1_map = {
    'k': 'ක', 'K': 'ඛ', 'g': 'ග', 'G': 'ඝ', 'X': 'ඞ', 'nng': 'ඟ',
    'ch': 'ච', 'Ch': 'ඡ', 'j': 'ජ', 'J': 'ඣ', 'KJ': 'ඤ', 'KG': 'ඦ',
    't': 'ට', 'T': 'ඨ', 'd': 'ඩ', 'D': 'ඪ', 'N': 'ණ', 'nnd': 'ඬ',
    'th': 'ත', 'Th': 'ථ', 'dh': 'ද', 'Dh': 'ධ', 'n': 'න', 'nndh': 'ඳ',
    'p': 'ප', 'P': 'ඵ', 'b': 'බ', 'B': 'භ', 'm': 'ම', 'mmb': 'ඹ',
    'y': '‍ය', 'Y': '‍ය', 'r': 'ර', 'l': 'ල', 'w': 'ව',
    'sh': 'ශ', 'Sh': 'ෂ', 's': 'ස', 'h': 'හ', 'L': 'ළ', 'f': 'ෆ'
};

var consonent_set_2_map = {

};

var consonent_set_3_map = {

}




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


vowelsUni[0] = 'ඌ'; vowels[0] = 'oo'; vowelModifiersUni[0] = 'ූ';
vowelsUni[1] = 'ඕ'; vowels[1] = 'o\\)'; vowelModifiersUni[1] = 'ෝ';
vowelsUni[2] = 'ඕ'; vowels[2] = 'oe'; vowelModifiersUni[2] = 'ෝ';
vowelsUni[3] = 'ආ'; vowels[3] = 'aa'; vowelModifiersUni[3] = 'ා';
vowelsUni[4] = 'ආ'; vowels[4] = 'a\\)'; vowelModifiersUni[4] = 'ා';
vowelsUni[5] = 'ඈ'; vowels[5] = 'Aa'; vowelModifiersUni[5] = 'ෑ';
vowelsUni[6] = 'ඈ'; vowels[6] = 'A\\)'; vowelModifiersUni[6] = 'ෑ';
vowelsUni[7] = 'ඈ'; vowels[7] = 'ae'; vowelModifiersUni[7] = 'ෑ';
vowelsUni[8] = 'ඊ'; vowels[8] = 'ii'; vowelModifiersUni[8] = 'ී';
vowelsUni[9] = 'ඊ'; vowels[9] = 'i\\)'; vowelModifiersUni[9] = 'ී';
vowelsUni[10] = 'ඊ'; vowels[10] = 'ie'; vowelModifiersUni[10] = 'ී';
vowelsUni[11] = 'ඊ'; vowels[11] = 'ee'; vowelModifiersUni[11] = 'ී';
vowelsUni[12] = 'ඒ'; vowels[12] = 'ea'; vowelModifiersUni[12] = 'ේ';
vowelsUni[13] = 'ඒ'; vowels[13] = 'e\\)'; vowelModifiersUni[13] = 'ේ';
vowelsUni[14] = 'ඒ'; vowels[14] = 'ei'; vowelModifiersUni[14] = 'ේ';
vowelsUni[15] = 'ඌ'; vowels[15] = 'uu'; vowelModifiersUni[15] = 'ූ';
vowelsUni[16] = 'ඌ'; vowels[16] = 'u\\)'; vowelModifiersUni[16] = 'ූ';
vowelsUni[17] = 'ඖ'; vowels[17] = 'au'; vowelModifiersUni[17] = 'ෞ';
vowelsUni[18] = 'ඇ'; vowels[18] = '/\a'; vowelModifiersUni[18] = 'ැ';

vowelsUni[19] = 'අ'; vowels[19] = 'a'; vowelModifiersUni[19] = '';
vowelsUni[20] = 'ඇ'; vowels[20] = 'A'; vowelModifiersUni[20] = 'ැ';
vowelsUni[21] = 'ඉ'; vowels[21] = 'i'; vowelModifiersUni[21] = 'ි';
vowelsUni[22] = 'එ'; vowels[22] = 'e'; vowelModifiersUni[22] = 'ෙ';
vowelsUni[23] = 'උ'; vowels[23] = 'u'; vowelModifiersUni[23] = 'ු';
vowelsUni[24] = 'ඔ'; vowels[24] = 'o'; vowelModifiersUni[24] = 'ො';
vowelsUni[25] = 'ඓ'; vowels[25] = 'I'; vowelModifiersUni[25] = 'ෛ';
nVowels = 26;

specialConsonantsUni[0] = 'ං'; specialConsonants[0] = /\\n/g;
specialConsonantsUni[1] = 'ඃ'; specialConsonants[1] = /\\h/g;
specialConsonantsUni[2] = 'ඞ'; specialConsonants[2] = /\\N/g;
specialConsonantsUni[3] = 'ඍ'; specialConsonants[3] = /\\R/g;
//special characher Repaya
specialConsonantsUni[4] = 'ර්' + '\u200D'; specialConsonants[4] = /R/g;
specialConsonantsUni[5] = 'ර්' + '\u200D'; specialConsonants[5] = /\\r/g;

consonantsUni[0] = 'ඬ'; consonants[0] = 'nnd';
consonantsUni[1] = 'ඳ'; consonants[1] = 'nndh';
consonantsUni[2] = 'ඟ'; consonants[2] = 'nng';
consonantsUni[3] = 'ථ'; consonants[3] = 'Th';
consonantsUni[4] = 'ධ'; consonants[4] = 'Dh';
consonantsUni[5] = 'ඝ'; consonants[5] = 'gh';
consonantsUni[6] = 'ඡ'; consonants[6] = 'Ch';
consonantsUni[7] = 'ඵ'; consonants[7] = 'ph';
consonantsUni[8] = 'භ'; consonants[8] = 'bh';
consonantsUni[9] = 'ශ'; consonants[9] = 'sh';
consonantsUni[10] = 'ෂ'; consonants[10] = 'Sh';
consonantsUni[11] = 'ඥ'; consonants[11] = 'GN';
consonantsUni[12] = 'ඤ'; consonants[12] = 'KN';
consonantsUni[13] = 'ළු'; consonants[13] = 'Lu';
consonantsUni[14] = 'ද'; consonants[14] = 'dh';
consonantsUni[15] = 'ච'; consonants[15] = 'ch';
consonantsUni[16] = 'ඛ'; consonants[16] = 'kh';
consonantsUni[17] = 'ත'; consonants[17] = 'th';

consonantsUni[18] = 'ට'; consonants[18] = 't';
consonantsUni[19] = 'ක'; consonants[19] = 'k';
consonantsUni[20] = 'ඩ'; consonants[20] = 'd';
consonantsUni[21] = 'න'; consonants[21] = 'n';
consonantsUni[22] = 'ප'; consonants[22] = 'p';
consonantsUni[23] = 'බ'; consonants[23] = 'b';
consonantsUni[24] = 'ම'; consonants[24] = 'm';
consonantsUni[25] = '‍ය'; consonants[25] = '\\u005C' + 'y';
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
consonantsUni[41] = 'ඹ'; consonants[41] = 'B';
consonantsUni[42] = 'ෆ'; consonants[42] = 'f';
consonantsUni[43] = 'ඣ'; consonants[43] = 'q';
consonantsUni[44] = 'ග'; consonants[44] = 'g';
//last because we need to ommit this in dealing with Rakaransha
consonantsUni[45] = 'ර'; consonants[45] = 'r';

specialCharUni[0] = 'ෲ'; specialChar[0] = 'ruu';
specialCharUni[1] = 'ෘ'; specialChar[1] = 'ru';
//specialCharUni[2]='්‍ර'; specialChar[2]='ra';


function startText(text) {
    var s, r, v;
    // text = $("#tb1").val();
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

    console.log(text);
    return (text);
}




var previous_input_text = "";
var new_input_text = "";
var outofscope_text = "";

// TextBox Keys
$("#tb1").keypress(function (event) {
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
$("#tb1").keydown(function (event) {

    // Only activates if the language is Sinhala


    switch_check = $('#flexSwitchCheckChecked').is(":checked");
    var key = (event.keyCode ? event.keyCode : event.which);


    // Handling the Backspace for Sinhalese
    if (switch_check) {
        if (key == 8) {
            // new_input_text = new_input_text.substring(new_input_text.length - 1, -1);
            // previous_input_text = previous_input_text.substring(previous_input_text.length - 1, -1);
            previous_input_text = "";
            var current_val = $("#tb1").val();
            current_val = current_val.substring(current_val.length - 1, -1);
            outofscope_text = current_val;
        }
    }

    // Handling Enter (Submitting Text when Enter is pressed)
    if (key == 13) {
        $("#btnsend").trigger("click");
    }
    console.log(new_input_text);
});

// Filling the Text-box with the new value
$("#tb1").keyup(function (event) {
    // Only activates if the language is Sinhala
    switch_check = $('#flexSwitchCheckChecked').is(":checked");

    if (switch_check) {
        // if (key == 8) {
        //     // new_input_text = new_input_text.substring(new_input_text.length - 1, -1);
        //     // previous_input_text = previous_input_text.substring(previous_input_text.length - 1, -1);
        //     // previous_input_text = "";
        //     outofscope_text = $("#tb1").val();
        // }
        // $("#tb1").val(new_input_text);
        // previous_input_text = $("#tb1").val();
        new_input_text = startText(previous_input_text);
        console.log(new_input_text);
        $("#tb1").val(outofscope_text + new_input_text);
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

    console.log(keys);
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
            outofscope_text = $("#tb1").val();
        }
    }
});

$(document).keyup(function (event) {
    var key = (event.keyCode ? event.keyCode : event.which);
    delete keys[key];
});


//Reference

//අ a      ආ aa        ඇ A          ඈ AA , Aa
// ඉ  i    ඊ ii         උ  u
// ඌ uu   ඍ R         ඎ RR, Rr
// ඏ Q    ඐ QQ, Qq    එ e
// ඒ ee    ඓ E        ඔ o
// ඕ oo    ඖ ou       ං x         ඃ H


// # ක k   # ඛ K   # ග g  # ඝ G    # ඞ X ??  # ඟ nng
// # ච ch  # ඡ Ch  # ජ j   # ඣ q  # ඤ KN     # ඥ GN
//# ඦ ??   # ට t   # ඨ  T  # ඩ d   # ඪ D       # ණ N   # ඬ  nnd
// # ත t   # ථ T   # ද dh  # ධ Dh   # න n      # ඳ nndh ??
// # ප p   # ඵ P   # බ b   # භ B    # ම m     # ඹ
// # ය y   # ර r    # ල     # ව w    # ශ sh    # ෂ Sh
// # ස s   # හ h    # ළ L   # ෆ f

// #  ්
// #  ා 
// #  ැ 
// #  ෑ
// #   ි  ී  ු  ූ   ෘ   ෙ   ේ   ෛ   ො   ෝ   ෞ   ෟ 
// # ෲ  ෴
