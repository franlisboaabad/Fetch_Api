const button1 = document.getElementById('button_1');
const button2 = document.getElementById('button_2');
const button3 = document.getElementById('button_3');


$('#modal_1').on('shown.bs.modal', function () {
    $('#button_1').trigger('focus')
})




$('#modal_2').on('shown.bs.modal', function () {
    $('#button_2').trigger('focus')
})



$('#modal_3').on('shown.bs.modal', function () {
    $('#button_3').trigger('focus')
})
