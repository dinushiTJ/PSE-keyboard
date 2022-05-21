// Initialize Default Properties of Keyboard Interface
var kbi_props = Object();

function KeyboardInterfaceInit(properties) {
    kbi_props = properties;
    console.log(kbi_props);
}

$(document).ready(function () {

    var text;
    var nVowels;

    // Vowel Keys and Maps
    var sinhala_vowels_keys = [
        'uu', 'oo', 'oe', 'aa', 'AA', 'Aa', 'ae', 'ii', 'ie', 'ee', 'ea', 'ei', 'uu', 'au',
        'O', 'a', 'A', 'i', 'e', 'u', 'o', 'E', 'I'
    ];
    var sinhala_vowel_pure_map = {
        'uu': 'ඌ', 'oo': 'ඕ', 'oe': 'ඕ', 'aa': 'ආ', 'AA': 'ඈ', 'Aa': 'ඈ', 'ae': 'ඈ', 'ii': 'ඊ', 'ie': 'ඊ', 'ee': 'ඒ', 'ea': 'ඒ', 'ei': 'ඒ', 'uu': 'ඌ', 'au': 'ඖ',
        'O': 'ඖ', 'a': 'අ', 'A': 'ඇ', 'i': 'ඉ', 'e': 'එ', 'u': 'උ', 'o': 'ඔ', 'E': 'ඓ', 'I': 'ඓ'
    };
    var sinhala_vowel_suffix_map = {
        'uu': 'ූ', 'oo': 'ෝ', 'oe': 'ෝ', 'aa': 'ා', 'AA': 'ෑ', 'Aa': 'ෑ', 'ae': 'ෑ', 'ii': 'ී', 'ie': 'ී', 'ee': 'ේ', 'ea': 'ේ', 'ei': 'ේ', 'uu': 'ූ', 'au': 'ෞ',
        'O': 'ෞ', 'a': '', 'A': 'ැ', 'i': 'ි', 'e': 'ෙ', 'u': 'ු', 'o': 'ො', 'E': 'ෛ', 'I': 'ෛ'
    };

    // Non-joining Character Keys and Maps [ + '\u200D']
    var sinhala_nonjoining_keys = [
        '\\r', 'x', 'H', 'R'
    ];
    var sinhala_nonjoining_map = {
        '\\r': 'ර්',
        'x': 'ං',
        'H': 'ඃ',
        'R': 'ඍ'
    };

    // Consonent Keys and Maps
    var sinhala_consonent_keys = [
        'nndh', 'nnd', 'nng', 'mmb',
        'GN', 'KN', 'Lu', 'Th', 'Dh', 'gh', 'Ch', 'ph', 'kh', 'bh',
        'Sh', 'sh', 'dh', 'ch', 'th',
        'N', 'L', 'K', 'G', 'T', 'D', 'P', 'B', 'C', 'X', 'J',
        't', 'k', 'd', 'n', 'p', 'b', 'm', 'Y', 'y', 'j', 'l', 'v', 'w',
        's', 'h', 'f', 'g', 'c',
        'r'
    ];
    var sinhala_consonant_map = {
        'nndh': 'ඳ', 'nnd': 'ඬ', 'nng': 'ඟ', 'mmb': 'ඹ',
        'GN': 'ඥ', 'KN': 'ඤ', 'Lu': 'ළු', 'Th': 'ථ', 'Dh': 'ධ', 'gh': 'ඝ', 'Ch': 'ඡ', 'ph': 'ඵ', 'kh': 'ඛ', 'bh': 'භ',
        'Sh': 'ෂ', 'sh': 'ශ', 'dh': 'ද', 'ch': 'ච', 'th': 'ත',
        'N': 'ණ', 'L': 'ළ', 'K': 'ඛ', 'G': 'ඝ', 'T': 'ඨ', 'D': 'ඪ', 'P': 'ඵ', 'B': 'භ', 'C': 'ඡ', 'X': 'ඞ', 'J': 'ඣ',
        't': 'ට', 'k': 'ක', 'd': 'ඩ', 'n': 'න', 'p': 'ප', 'b': 'බ', 'm': 'ම', 'Y': 'ය', 'y': 'ය', 'j': 'ජ', 'l': 'ල', 'v': 'ව', 'w': 'ව',
        's': 'ස', 'h': 'හ', 'f': 'ෆ', 'g': 'ග', 'c': 'ච',
        'r': 'ර'
    };
    // consonantsUni[14] = 'ළු'; consonants[14] = 'Lu'; TODO HANDLE THIS SPC

    // Special Character Keys and Maps
    var sinhala_special_keys = [
        'ruu',
        'ru'
    ];
    var sinhala_special_map = {
        'ruu': 'ෲ',
        'ru': 'ෘ'
    };

    // EN-SI Char Converter
    function convert(text) {
        var EN_pattern, SI_pattern, RegEx_pattern;

        // Replacing non-joining characters
        sinhala_nonjoining_keys.forEach((nj_char, idx) => {
            EN_pattern = nj_char;
            SI_pattern = sinhala_nonjoining_map[nj_char];
            text = text.replace(EN_pattern, SI_pattern);
        });

        // Replacing special consonents
        sinhala_special_keys.forEach((sp_char, idx) => {
            sinhala_consonent_keys.forEach((con_char, idx) => {
                EN_pattern = con_char + sp_char;
                SI_pattern = sinhala_consonant_map[con_char] + sinhala_special_map[sp_char];
                RegEx_pattern = new RegExp(EN_pattern, "g");
                text = text.replace(RegEx_pattern, SI_pattern);
            });
        });

        // Replacing consonants + Rakaransha + vowel modifiers
        sinhala_consonent_keys.forEach((con_char, idx) => {
            sinhala_vowels_keys.forEach((v_char, idx) => {
                EN_pattern = con_char + "r" + v_char;
                SI_pattern = sinhala_consonant_map[con_char] + "්‍ර" + sinhala_vowel_suffix_map[v_char];
                RegEx_pattern = new RegExp(EN_pattern, "g");
                text = text.replace(RegEx_pattern, SI_pattern);
            });
            EN_pattern = con_char + "r";
            SI_pattern = sinhala_consonant_map[con_char] + "්‍ර";
            RegEx_pattern = new RegExp(EN_pattern, "g");
            text = text.replace(RegEx_pattern, SI_pattern);
        });

        // Replacing consonents + vowel modifiers
        sinhala_consonent_keys.forEach((con_char, idx) => {
            sinhala_vowels_keys.forEach((v_char, idx) => {
                EN_pattern = con_char + v_char;
                SI_pattern = sinhala_consonant_map[con_char] + sinhala_vowel_suffix_map[v_char];
                RegEx_pattern = new RegExp(EN_pattern, "g");
                text = text.replace(RegEx_pattern, SI_pattern);
            });
        });

        // Replacing consonents + HAL
        sinhala_consonent_keys.forEach((con_char, idx) => {
            EN_pattern = con_char;
            SI_pattern = sinhala_consonant_map[con_char] + "්";
            RegEx_pattern = new RegExp(EN_pattern, "g");
            text = text.replace(RegEx_pattern, SI_pattern);
        });

        // Replacing vowels
        sinhala_vowels_keys.forEach((v_char, idx) => {
            EN_pattern = v_char;
            SI_pattern = sinhala_vowel_pure_map[v_char];
            RegEx_pattern = new RegExp(EN_pattern, "g");
            text = text.replace(RegEx_pattern, SI_pattern);
        });

        console.log(text);
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
                    var current_val = $(kbi_props["textMessageElement"]).val();
                    current_val = current_val.substring(current_val.length - 1, -1);
                    outofscope_text = current_val;
                } else {
                    previous_input_text = "";
                    var current_val = $(kbi_props["textMessageElement"]).val();
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
        console.log(new_input_text);
    });

    // Filling the Text-box with the new value
    $(document).on('keyup', kbi_props["textMessageElement"], function (event) {
        // Only activates if the language is Sinhala
        switch_check = $('#flexSwitchCheckChecked').is(":checked");

        if (switch_check) {
            new_input_text = convert(previous_input_text);
            console.log(new_input_text);
            $(kbi_props["textMessageElement"]).val(outofscope_text + new_input_text);
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
                outofscope_text = $(kbi_props["textMessageElement"]).val();
            }
        }
    });

    $(document).keyup(function (event) {
        var key = (event.keyCode ? event.keyCode : event.which);
        delete keys[key];
    });

});