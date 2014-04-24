email = [94,24,84,13,16,28,18,88,64,20,21,12,
        14,13,27,95,3,15,29,1,0,16,0,37,5,20,
        21,12,14,87,23,10,15,91,74,4,20,16,16,
        7,11,13,52,2,15,24,29,9,76,26,27,8,94,
        86,21,91,94,27,6,74,92,69,21,69,10,11,
        17,3,95,91,28,17,22,9,7,95,77,86,0,18,
        11,13,0,0,16,87,23,10,15,86,53,19,11,
        29,54,12,22,91,74,37,35,15,29,1,32,16,
        0,89,77,24,74];

$('#key').keyup(function (){
    answer = $('#key').val();
    output = deobfuscate(email, answer);
    $('#email').empty();
    $('#email').html(output);
})

function deobfuscate(input, key) {
    output = [];

    if (key == "") {
    	return "<br/><br/>";
    }

    for (var i in input) {
        input_char = input[i];
        key_length = key.length;
        key_char = key.charCodeAt(i % key_length);
        xor = input_char ^ key_char;
        output.push(
            String.fromCharCode(xor)
        )
    }

    return output.join('');

}