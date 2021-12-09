let orderData = JSON.parse(localStorage.order);
let commentId = "comment" + orderData.orderid;
let orderId = "order" + orderData.orderid;
let text = "";
let productBtnDone = "";
let localProductCheck = [];

//function to build the order table
function tableConstruct() {
  let tableContent = "";
  tableContent =
    "<tr><th>Order ID</th><td>" +
    orderData.orderid +
    "</td></tr>" +
    "<tr><th>Customer</th><td>" +
    orderData.customer +
    "</td></tr>" +
    "<tr><th>Customer ID</th><td>" +
    orderData.customerid +
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
    "</td></tr>" +
    "<tr><th>Comment</th><td>" +
    orderData.comment +
    "</td></tr>";
  document.getElementById("orderTable").innerHTML = tableContent;
}

//function for building cards with ordered products. storing the product key in the localstorage
function constructProductsList() {
  let productsList = "";
  orderData.products.forEach(function (key) {
    let x = key.code;
    let replaced = x.replaceAll(" ", "");
    localProductCheck.push(replaced);
    productBtnDone =
      "<div><input type='button' class='myBtn' value='Mark us done' onclick=productDone(\"" +
      replaced +
      "\") /><input type='button' class='myBtn' value='Product not ready' onclick=productNotReady(\"" +
      replaced +
      '") /></div>';
    productsList +=
      "<div><table class = 'products' id =\"" +
      replaced +
      '"><tr><th>Product</th><td>' +
      key.product +
      "</td></tr><tr><th>Description</th><td>" +
      key.description +
      "</td></tr><tr><th>Code</th><td>" +
      key.code +
      "</td></tr><tr><th>Quantity</th><td>" +
      key.qty +
      "</td></tr><tr><th>Shelf</th><td>" +
      key.shelf_pos +
      "</td></tr><tr><th>Supplier code</th><td>" +
      key.suppliercode +
      "</td></tr><tr><th>Price per unit</th><td>" +
      key.unit_price +
      "</td></tr></table></div>" +
      productBtnDone;
  });
  document.getElementById("products").innerHTML = productsList;
}

//marks the table in green if the order is complete
function orderDone() {
  localStorage.setItem(orderId, "done");
  document.getElementById("orderTable").style.backgroundColor = "#ccffdc";
}

//marks the table in red if the order is not completed
function orderNotReady() {
  localStorage.setItem(orderId, "notReady");
  document.getElementById("orderTable").style.backgroundColor = "#ffcccc";
}

//marks the product card in green if the product is completed
function productDone(x) {
  let productCode = "product" + x;
  localStorage.setItem(productCode, "done");
  document.getElementById(x).style.backgroundColor = "#ccffdc";
}

//marks the product card in red if the order is not completed
function productNotReady(x) {
  let productCode = "product" + x;
  localStorage.setItem(productCode, "notReady");
  document.getElementById(x).style.backgroundColor = "#ffcccc";
}

//function to post a comment. Store this comment in local storage
function sendComment() {
  let comment = document.getElementById("commentField").value;
  if (comment != "") {
    text = localStorage.getItem(commentId);
    if (text != null) {
      text += comment + "<br />";
    } else {
      text = comment + "<br />";
    }
    localStorage.setItem(commentId, text);
    document.getElementById("commentHere").innerHTML = text;
    document.getElementById("commentField").value = "";
  }
}

//function to delete comments
function clearComments() {
  localStorage.setItem(commentId, "");
  document.getElementById("commentHere").innerHTML = "";
}

//redirect to printpage
function goToPrintPage() {
  location.href = "printPage.html";
}

//checks local storage and marks tables in color. also puts comments on the page
function checkLocal() {
  document.getElementById("commentHere").innerHTML =
    localStorage.getItem(commentId);
  if (localStorage.getItem(orderId) == "done") {
    document.getElementById("orderTable").style.backgroundColor = "#ccffdc";
  } else if (localStorage.getItem(orderId) == "notReady") {
    document.getElementById("orderTable").style.backgroundColor = "#ffcccc";
  }
  for (i = 0; i < localProductCheck.length; i++) {
    let productCode = "product" + localProductCheck[i];
    if (localStorage.getItem(productCode) == "done") {
      document.getElementById(localProductCheck[i]).style.backgroundColor =
        "#ccffdc";
    } else if (localStorage.getItem(productCode) == "notReady") {
      document.getElementById(localProductCheck[i]).style.backgroundColor =
        "#ffcccc";
    }
  }
}

//a function that runs when the page is fully loaded
function init() {
  tableConstruct();
  constructProductsList();
  checkLocal();
}
