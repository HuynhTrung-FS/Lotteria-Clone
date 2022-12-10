//Hàm fetch api khi delete dữ liệu
async function deleteData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "DELETE",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });
  return response.json();
}
//Hàm fetch api khi update dữ liệu
async function updateData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "PUT",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });
  return response.json();
}

// Delete product which is added to cart
function DeleteItemCart(foodId, invoiceId) {
  const itemCart = {
    FoodId: foodId,
    InvoiceId: invoiceId,
  };
  deleteData(
    "http://localhost:8000/invoice/deletefoodsfrominvoice/",
    itemCart
  ).then((data) => {
    alert(data);
  });
}

// Update Status the invoice, the sumprice and sumamount when the invoice has been payed and delete the localstorage(invoiceId)
function UpdateCartPayed(invoiceId) {
  const dataInvoice = {
    InvoiceId: invoiceId,
  };
  updateData(
    "http://localhost:8000/invoice/setstatusinvoice/",
    dataInvoice
  ).then(() => {
    console.log(data);
  });
}
