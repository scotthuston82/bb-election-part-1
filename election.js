document.addEventListener("DOMContentLoaded", function() {
  var list = document.querySelector('#list');

  $.ajax({
    url: 'https://bb-election-api.herokuapp.com/',
    method: 'GET',
    data_type: 'JSON'
  }).done(function(data){
    // debugger
    for(var i = 0; i < data.candidates.length; i++){
      var li = document.createElement('li');
      li.append(data.candidates[i].name);
      li.append(" Votes: " + data.candidates[i].votes);
      list.append(li);
    }

  });

});
