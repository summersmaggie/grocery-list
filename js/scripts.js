//biz
var items = ['fruit', 'veg', 'meat', 'drink'];

var itemsUpper = items.map(function(item) {
  return item.toUpperCase();
});

var itemsUpperAbc = items.map(function(item) {
  return items.sort();
});

//ui
$(document).ready(function() {
  $("#grocery").submit(function(event) {
    var items = ['fruit', 'veg', 'meat', 'drink'];

  items.forEach(function(item) {
    var userInput = $("input#" + item).val();
    $("." + item).text(userInput);
  });
    //$('#btn').click(function() {
    // $('ul').append('<li>' + item + '</li>')

    $('#result').show();

    event.preventDefault();
    });
  });
