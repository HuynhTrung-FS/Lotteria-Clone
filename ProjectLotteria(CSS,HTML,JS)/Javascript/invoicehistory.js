async function Get(urlGetInvoiceHistory) {
  // fetch(urlGetAllCategory)
  //   .then(function(res){
  //     return res.json();
  //   })
  //   .catch((err) => console.log(err));
  try {
    let res = await fetch(urlGetInvoiceHistory);
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

async function getCustomerInvoiceTrue(idCustomer) {
  let urlGetInvoiceTrueByCustomer = `http://localhost:8000/invoice/getinvoicetrue/${idCustomer}`;
  let listInvoiceId = await Get(urlGetInvoiceTrueByCustomer);
  console.log(listInvoiceId);
     let html1 = "";
    let invoicelist = document.querySelector(".invoice-list");
  listInvoiceId.CustomerInvoice.forEach(async (element) => {
    let urlGetInfoInvoice = `http://localhost:8000/invoice/getinvoicebyid/${element}`;
    let invoiceInfo = await Get(urlGetInfoInvoice);
    let htmlSegment1 = `
    <li class="invoice_item">

    <span class="MaHD">
        <img src="../images/icon-history.svg" alt=""> ${invoiceInfo._id}</span>
    <span class="NgayHD">${invoiceInfo.DateInvoice}</span>
    </li>`;
    html1 += htmlSegment1;
    invoicelist.innerHTML = html1;
  });
}

getCustomerInvoiceTrue(localStorage.getItem("userId"));
