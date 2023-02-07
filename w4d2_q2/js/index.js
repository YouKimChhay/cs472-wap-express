$(() => {

  $('#ask').submit(() => {
    fetch("http://localhost:3000/8ball")
    .then(res => res.text())
    .then(text => $('#text').val(text).select());
  
    return false; //to prevent making the default form request
  });

});
