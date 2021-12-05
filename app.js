//download data from the cloud
fetch("project.json")
  .then((x) => x.json())
  .then((y) => storeData(y));

//function for storing data in local storage
function storeData(data) {
  localStorage.setItem("orders", JSON.stringify(data));
}

//search for order by customer. Store order data for the next usage
function searchDataByCustomer(orderData, searchFieldData) {
  orderData.forEach(function (key) {
    if (key.customer == searchFieldData) {
      localStorage.setItem("order", JSON.stringify(key));
      location.href = "tilaus.html";
    }
  });
}

//search for order by customerID. Store order data for the next usage
function searchDataByCustomerId(orderData, searchFieldData) {
  orderData.forEach(function (key) {
    if (key.customerid == searchFieldData) {
      localStorage.setItem("order", JSON.stringify(key));
      location.href = "tilaus.html";
    }
  });
}

//search for order by orderID. Store order data for the next usage
function searchDataByOrderId(orderData, searchFieldData) {
  orderData.forEach(function (key) {
    if (key.orderid == searchFieldData) {
      localStorage.setItem("order", JSON.stringify(key));
      location.href = "tilaus.html";
    }
  });
}

//function for selection of search criteria
function searchCriteria() {
  let orderData = JSON.parse(localStorage.orders);
  let searchFieldData = document.getElementById("searchField").value;
  if (document.getElementById("radioOrderId").checked) {
    searchDataByOrderId(orderData, searchFieldData);
  } else if (document.getElementById("radioCustomer").checked) {
    searchDataByCustomer(orderData, searchFieldData);
  } else if (document.getElementById("radioCustomerId").checked) {
    searchDataByCustomerId(orderData, searchFieldData);
  } else {
    document.getElementById("searchErrMsg").style.display = "inline";
  }
}

//hide error message
function toggleSearchErrMsg() {
  if (document.getElementById("searchErrMsg").style.display == "inline") {
    document.getElementById("searchErrMsg").style.display = "none";
  }
}

//a function that runs when the page is fully loaded
function init() {
  document
    .getElementById("searchBtn")
    .addEventListener("click", searchCriteria);
}
