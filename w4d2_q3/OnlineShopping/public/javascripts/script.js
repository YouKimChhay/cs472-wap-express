$(() => {

  $('#addToCart').submit(() => {
    const pid = $('#pid').val();
    const quantity = $('#quantity').val();
    const data = {
      pid: pid,
      quantity: quantity
    };

    fetch("http://localhost:3000/addToCart", {
      method: "post",
      body: JSON.stringify(data),
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => {
      if (!res.ok) throw new Error("Not 200 response");
      else return res.text();
    })
    .then(numItem => {
      let msg = "Product id " + pid + " with quantity " + quantity + " added to cart successfully.";
      msg += " There are currently " + numItem + " in the cart.";
      $('#msg').text(msg);
    })
    .catch(() => {
      let msg = "Sorry, there is no product with id " + pid;
      $('#msg').text(msg);
    })

    return false;
  });

  $('#pid').focus(() => {
    $('#msg').text("");
  });

  $('#quantity').focus(() => {
    $('#msg').text("");
  });
});