let orderData = JSON.parse(localStorage.order);

//a bit modified order building function from the previous page
function tableConstruct() {
  let tableContent = "";
  tableContent =
    "<tr><th>Order ID</th><td>" +
    orderData.orderid +
    "</td></tr>" +
    "<tr><th>Customer</th><td>" +
    orderData.customer +
    "</td></tr>" +
    "<tr><th>Delivery address</th><td>" +
    orderData.delivaddr +
    "</td></tr>" +
    "<tr><th>Delivery date</th><td>" +
    orderData.deliverydate +
    "</td></tr>" +
    "<tr><th>Investment Address</th><td>" +
    orderData.invaddr +
    "</td></tr>" +
    "<tr><th>Responsible salesperson</th><td>" +
    orderData.respsalesperson +
    "</td></tr>" +
    "<tr><th>Total price</th><td>" +
    orderData.totalprice +
    "</td></tr>";
  document.getElementById("orderTable").innerHTML = tableContent;
}

//a bit modified product list building function from the previous page
function constructProductsList() {
  let productsList = "";
  orderData.products.forEach(function (key) {
    productsList +=
      "<div><table class = 'products'><tr><th>Product</th><td>" +
      key.product +
      "</td></tr><tr><th>Quantity</th><td>" +
      key.qty +
      "</td></tr><tr><th>Price per unit</th><td>" +
      key.unit_price +
      "</td></tr></table></div>";
  });
  document.getElementById("products").innerHTML = productsList;
}

//ONLOAD
function init() {
  tableConstruct();
  constructProductsList();
}
