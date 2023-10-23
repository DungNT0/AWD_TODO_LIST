export function addNewItem() {

    // add new list item to ul
    var myInput2 = $('#my-input-2').val();
    console.log(myInput2);

    var myInput = $('#my-input').val();
    console.log(myInput);

    // ammend content on ID
    $('#nav-menu').append('<li>' + myInput2 + " - " + myInput + '</li>' +
        '<button class="complete_btn" id="complete_button' + count + '"></button>'
        + '<button class="delete_btn" id="delete_button' + count + '"></button>' + '</br>');

    count++;
}