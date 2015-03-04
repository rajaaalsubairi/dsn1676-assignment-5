var $toDoList = $('.todo')
var $form = $('form');
var $input = $('#todo');
var $ul = $('.list');


$form.on('submit', function (eventObject) {
    eventObject.preventDefault();
    
    $ul.css('.list', $input.val());
    
    var $li = $('<li>');
    $li.html($input.val());
    $ul.append($li);
    $input.val('');

});

$ul.on('click', 'li', function () {

});
