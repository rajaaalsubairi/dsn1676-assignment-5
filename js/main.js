var $toDoList = $('.todo')
var $form = $('form');
var $input = $('#todo');
var $ul = $('.ul');
var $li = $('<li>');

$form.on('submit', function (eventObject) {
    eventObject.preventDefault();
    
    $ul.css('ul', $input.val());
    
    var $li = $('<li>');
    $li.html($input.val());
    $ul.append($li);
    $input.val('');



    $ul.on('click', 'li', function () {
        $('this').addClass('done');
    });

    var $inputRemove = $('<button class="remove xbutton>X</button">');

    $inputRemove.on('click', function () {
        $li.remove('li');
    });
    
    $li.append($inputRemove);
});
