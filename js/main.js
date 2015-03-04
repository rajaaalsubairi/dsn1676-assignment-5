var $toDoList = $('.todo')
var $form = $('form');
var $input = $('#todo');
var $ul = $('.ul');
var $li = $('<li>');

$form.on('submit', function (eventObject) {
    eventObject.preventDefault();
    
    var $li = $('<li>');
    $li.html($input.val());

    var $inputRemove = $('<button class="remove xbutton">X</button>');

    $inputRemove.on('click', function () {
        $li.remove('li');
    });
    
    $li.click(function() {
        $(this).addClass('done');
    });
    
    $li.append($inputRemove);
    $ul.append($li);
    $input.val('');
});