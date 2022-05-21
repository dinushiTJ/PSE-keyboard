// Char replacing logic
var sinhala_vowels = [
    'a', 'aa', 'A', 'AA', 'Aa', 'i', 'ii', 'u', 'uu', 'R', 'RR', 'Rr', 'Q', 'QQ', 'Qq', 'e',
    'ee', 'E', 'o', 'oo', ' O', 'x', 'H'
];

var sinhala_vowel_spc = ['aa', 'A', 'AA', 'i', 'ii', 'u', 'uu', 'R', 'RR', 'Rr', 'e', 'ee', 'E', 'o', 'oo', 'O']

var sinhala_consonants = [
    'k', 'K', 'g', 'G', 'KN', 'nng', 'ch', 'Ch', 'j', 'J', 'KJ', 'GN', '??', 't', 'T', 'd',
    'D', 'N', 'nnd', 'th', 'Th', 'd', 'Dh', 'n', 'nndh', 'p', 'P', 'b', 'B', 'm', 'mmb', 'y',
    'r', 'l', 'w', 'sh', 'Sh', 's', 'h', 'L', 'f'
];

// Char Mapping [Common]
var sinhala_vowel_map = {
    'a': 'අ', 'aa': 'ආ', 'A': 'ඇ ', 'AA': 'ඈ', 'Aa': 'ඈ', 'i': 'ඉ', 'ii': 'ඊ', 'u': 'උ',
    'uu': 'ඌ', 'R': 'ඍ', 'RR': 'ඎ', 'Rr': 'ඎ', 'Q': 'ඏ', 'QQ': 'ඐ', 'Qq': 'ඐ',
    'e': 'එ', 'ee': 'ඒ', 'E': 'ඓ', 'o': 'ඔ', 'oo': 'ඕ', ' O': 'ඖ', 'x': 'ං', 'H': 'ඃ'
};

var sinhala_vowel_spc_map = {
    'aa': 'ා', 'A': ' ැ', 'AA': ' ෑ', 'i': ' ි', 'ii': ' ී', 'u': ' ු', 'uu': ' ූ', 'R': ' ෘ',
    'RR': ' ෲ', 'Rr': ' ෲ', 'e': ' ෙ', 'ee': ' ේ', 'E': 'ෛ', 'o': ' ො', 'oo': ' ෝ ',
    'O': ' ෞ', 'Oo': ' ෟ'
}

var sinhala_consonant_map = {
    'k': 'ක්', 'K': 'ඛ්', 'g': 'ග්', 'G': 'ඝ්', 'X': 'ඞ', 'nng': 'ඟ්',
    'ch': 'ච්', 'Ch': 'ඡ්', 'j': 'ජ්', 'J': 'ඣ්', 'KJ': 'ඤ්', 'GN': 'ඥ්', '??': 'ඦ',
    't': 'ට්', 'T': 'ඨ්', 'd': 'ඩ්', 'D': 'ඪ්', 'N': 'ණ්', 'nnd': 'ඬ්',
    'th': 'ත්', 'Th': 'ථ්', 'dh': 'ද්', 'Dh': 'ධ්', 'n': 'න්', 'nndh': 'ඳ',
    'p': 'ප්', 'P': 'ඵ්', 'b': 'බ්', 'B': 'භ්', 'm': 'ම්', 'mmb': 'ඹ්',
    'y': '‍ය්', 'Y': '‍ය්', 'r': 'ර්', 'l': 'ල්', 'w': 'ව්', 'sh': 'ශ්', 'Sh': 'ෂ්',
    's': 'ස්', 'h': 'හ්', 'L': 'ල්', 'f': 'ෆ්'
};

var sinhala_all_posibilities = {    
    'a': 'අ', 'aa': 'ආ', 'A': 'ඇ ', 'AA': 'ඈ', 'Aa': 'ඈ', 'i': 'ඉ', 'ii': 'ඊ', 'u': 'උ',
    'uu': 'ඌ', 'R': 'ඍ', 'RR': 'ඎ', 'Rr': 'ඎ', 'Q': 'ඏ', 'QQ': 'ඐ', 'Qq': 'ඐ',
    'e': 'එ', 'ee': 'ඒ', 'E': 'ඓ', 'o': 'ඔ', 'oo': 'ඕ', ' O': 'ඖ', 'x': 'ං', 'H': 'ඃ',
    'k': 'ක්', 'K': 'ඛ්', 'g': 'ග්', 'G': 'ඝ්', 'X': 'ඞ', 'nng': 'ඟ්',
    'ch': 'ච්', 'Ch': 'ඡ්', 'j': 'ජ්', 'J': 'ඣ්', 'KJ': 'ඤ්', 'GN': 'ඥ්', '??': 'ඦ',
    't': 'ට්', 'T': 'ඨ්', 'd': 'ඩ්', 'D': 'ඪ්', 'N': 'ණ්', 'nnd': 'ඬ්',
    'th': 'ත්', 'Th': 'ථ්', 'dh': 'ද්', 'Dh': 'ධ්', 'n': 'න්', 'nndh': 'ඳ',
    'p': 'ප්', 'P': 'ඵ්', 'b': 'බ්', 'B': 'භ්', 'm': 'ම්', 'mmb': 'ඹ්',
    'y': '‍ය්', 'Y': '‍ය්', 'r': 'ර්', 'l': 'ල්', 'w': 'ව්', 'sh': 'ශ්', 'Sh': 'ෂ්',
    's': 'ස්', 'h': 'හ්', 'L': 'ල්', 'f': 'ෆ්',
}

var special_chars = {
    " ": " ", ".": ".", ",": ",", "<": "<", ">": ">", "?": "?", "/": "/", "'": "'", "\"": "\"",
    ":": ":", ";": ";", "[": "[", "]": "]", "{": "{", "}": "}", "|": "|", "\\": "\\", "0": "0",
    "1": "1", "2": "2", "3": "3", "4": "4", "5": "5", "6": "6", "7": "7", "8": "8", "9": "9",
    "+": "+", "-": "-", "*": "*", "=": "=", "_": "_", "(": "(", ")": ")", "&": "&", "^": "^",
    "%": "%", "$": "$", "#": "#", "@": "@", "!": "!", "~": "~", "`": "`"
};

// Char Mapping [Length]
var sinhala_len_1 = { 'Q': 'ඏ', 'x': 'ං', 'H': 'ඃ', 'O': 'ඖ', 'E': 'ඓ' }
var sinhala_len_2 = {
    'aa': 'ආ', 'AA': 'ඈ', 'Aa': 'ඈ', 'ii': 'ඊ',
    'uu': 'ඌ', 'RR': 'ඎ', 'Rr': 'ඎ', 'QQ': 'ඐ',
    'Qq': 'ඐ', 'ee': 'ඒ', 'oo': 'ඕ', 'X': 'ඞ'
}



var previous_input_text = "";
var new_input_text = "";

// TextBox Keys
$("#tb1").keypress(function (event) {
    // previous_input_text = $("#tb1").val();

    var key = (event.keyCode ? event.keyCode : event.which);
    var ch = String.fromCharCode(key);
    var valid_chars = "";
    var isSpecial = false;

    // Only activates if the language is Sinhala
    switch_check = $('#flexSwitchCheckChecked').is(":checked");

    if (switch_check) {
        // Reset on Non-EN char
        if (ch in special_chars) {
            previous_input_text = ""
            valid_chars = "";
            isSpecial = true;
            new_input_text += ch;

            // TODO: have to check if we need to handle complex char combinations
        }

        // Check for valid chars. A newly typed char should not be a command character.
        if ((key >= 20 && key <= 126) && !isSpecial) {
            previous_input_text += String.fromCharCode(key);
        }

        // Get only English charset out of all previous characters
        [...previous_input_text].forEach((e, i) => {
            char_to_int = e.charCodeAt(0);
            if ((char_to_int >= 20 && char_to_int <= 126)) {
                valid_chars += e;
            }
        });
        console.log("VALID CHARS:", valid_chars);

        if (valid_chars == "") {
            // If no valid english chars present that means no need to replace
            // anything. we can safely ignore this condition for now.

            // Empty for now

        } else if (valid_chars.length == 1) {
            // If previously typed unconverted chars are just 1 char that means
            // we can replace that with standalone type-able sinhala chars, aka, non-modifiable
            // length-of-1 characters.

            if (valid_chars in sinhala_len_1) {
                var re_char = sinhala_len_1[valid_chars];
                if (re_char.substring(re_char.length - 1) == " ") {
                    re_char = re_char.substring(re_char.length - 1, -1);
                }
                previous_input_text = previous_input_text.replace(valid_chars, re_char);
                console.log(re_char, valid_chars, previous_input_text);
                new_input_text += re_char;
            }
        } else if (valid_chars.length == 2) {
            // If pending char len is 2, we can replace 
            // with solid len 2 chars in len2 charmap.

            if (valid_chars in sinhala_len_2) {
                var re_char = sinhala_len_2[valid_chars];
                if (re_char.substring(re_char.length - 1) == " ") {
                    re_char = re_char.substring(re_char.length - 1, -1);
                }
                previous_input_text = previous_input_text.replace(valid_chars, re_char);
                console.log(re_char, valid_chars, previous_input_text);
                new_input_text += re_char;
            }
        } else if (valid_chars.length == 3) {
            // If pending char len is 3, we can replace 
            // with solid len 3 chars in len3 charmap.
            
        } else if (valid_chars.length == 4) {
            // If pending char len is 4, we can replace 
            // with solid len 4 chars in len4 charmap.
            
        } else if (valid_chars.length == 5) {
            // If pending char len is 5, we can replace 
            // with solid len 5 chars in len5 charmap.
            
        } else if (valid_chars.length == 6) {
            // If pending char len is 6, we can replace 
            // with solid len 6 chars in len6 charmap.

        } else {
            console.log("Else: " + previous_input_text.length);
        }

        var shouldAccumilate = false;
        for (k in sinhala_all_posibilities) {
            if(k.startsWith(valid_chars)) {
                shouldAccumilate = true;
                break;
            }
        }

        if (!shouldAccumilate) {
            previous_input_text = previous_input_text.replace(valid_chars, "");
            console.log("CLEARED VALID CHARS.")
        }
        
        console.log(previous_input_text);
    } else {
        // Check for valid chars
        if ((key >= 20 && key <= 126)) {
            new_input_text += String.fromCharCode(key)
        }
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
            new_input_text = new_input_text.substring(new_input_text.length - 1, -1);
        }
    }

    // Handling Enter (Submitting Text when Enter is pressed)
    if (key == 13) {
        $("#btnsend").trigger("click");
    }
});

// Filling the Text-box with the new value
$("#tb1").keyup(function (event) {
    // Only activates if the language is Sinhala
    switch_check = $('#flexSwitchCheckChecked').is(":checked");

    if (switch_check) {
        $("#tb1").val(new_input_text);
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
        } else {
            $("#flexSwitchCheckChecked").prop('checked', true);
            buildToast("bg-danger", "Switched to Sinhala", "Press CTRL+Q to Switch back to English.", "", "media/lang.png");
            $('.toast').toast('show');
            valid_chars = "";
            previous_input_text = "";
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
