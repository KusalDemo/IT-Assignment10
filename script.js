$(document).ready(function() {
    var expression = "";
    function updateDisplay() {
        $('#answer').text(expression);
    }
    $('.col, .colOperators').click(function() {
        var value = $(this).val();
        if (value === 'C') {
            expression = "";
        } else if (value === '=') {
            try {
                expression = eval(expression);
            } catch (error) {
                expression = "Error";
            }
        } else {
            expression += value;
        }
        updateDisplay();
    });
});

