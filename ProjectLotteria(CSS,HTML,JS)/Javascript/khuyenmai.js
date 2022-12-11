var line = document.querySelector(".line");
var tabs = document.querySelectorAll(".nav-item");
var temp = line;
for (let i = 0; i < tabs.length; i++) {
  tabs[i].onmouseover = function () {
    for (let j = 0; j < tabs.length; j++) {
      if (tabs[i].contains(line)) {
        line.remove();
      }
    }
    tabs[i].appendChild(temp);
  };
}
/* Tiếng việt,Tiếng Anh*/
var image_updated = document.querySelector(".icon_vietnam_dowload");
document.querySelector("#language").addEventListener("change", function () {
  if (this.value == "VietNam") {
    image_updated.setAttribute("src", "../images/VietNam_Flag.png");
  } else {
    image_updated.setAttribute("src", "../images/American_Flag.png");
  }
});

/*Modal-JS*/
var buttons = document.querySelectorAll(".menu_item");
var modal = document.querySelector(".modal_lotteria");
var btn_close_1 = document.querySelector(".btn_close_1");
var btn_close_2 = document.querySelector(".btn_close_2");
var btn_close_3 = document.querySelector(".btn_close_3");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    modal.classList.add("open");
  });
}
btn_close_1.onclick = function () {
  modal.classList.remove("open");
};
btn_close_2.onclick = function () {
  modal.classList.remove("open");
};
btn_close_3.onclick = function () {
  modal.classList.remove("open");
};
/* Navigation Login-Register */
var modal_login = document.querySelector(".modal_login");
var modal_login_back = document.querySelector(".modal_login_back");
var modal_register = document.querySelector(".modal_register");
var btn_back_not_register = document.querySelector(".btn_back_not_register");
var btn_back_register = document.querySelector(".btn_back_register");
var btn_next_not_register = document.querySelector(".btn_next_not_register");
var btn_next_register = document.querySelector(".btn_next_register");

btn_next_not_register.addEventListener("click", function () {
  modal_login_back.classList.remove("flex");
  modal_login.classList.add("flex");
});
btn_next_register.addEventListener("click", function () {
  modal_login_back.classList.remove("flex");
  modal_register.classList.add("flex");
});
btn_back_not_register.addEventListener("click", function () {
  modal_login.classList.remove("flex");
  modal_login_back.classList.add("flex");
});
btn_back_register.addEventListener("click", function () {
  modal_register.classList.remove("flex");
  modal_login_back.classList.add("flex");
});

/*Cate-menu-list*/
// Category with api
let urlGetAllCategory = "http://localhost:8000/category/get";
async function GetCategories() {
  // fetch(urlGetAllCategory)
  //   .then(function(res){
  //     return res.json();
  //   })
  //   .catch((err) => console.log(err));
  try {
    let res = await fetch(urlGetAllCategory);
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

async function RenderCategories() {
  let categories = await GetCategories();
  let html = "";
  let cateMenuList = document.querySelector(".cate-menu-list");
  categories.forEach((element) => {
    console.log(element)
    let htmlSegment = `
    <li class="cate-menu-item">
      <p id="category" class="${element.CategoryClass}">
        <span class="img">
            <img src="${element.CategoryImage}" alt="menu_1">
        </span>
        <span class="text">
            ${element.CategoryName}
        </span>
      </p>
    </li>`;
    html += htmlSegment;
  });
  cateMenuList.innerHTML = html;
  var cate_list = document.querySelectorAll(".cate-menu-item");
  for (let i = 0; i < cate_list.length; i++) {
    cate_list[i].onclick = async function () {
      for (let j = 0; j < cate_list.length; j++) {
        if (cate_list[j].classList.contains("active_border")) {
          cate_list[j].classList.remove("active_border");
        }
      }
      cate_list[i].classList.add("active_border");
      let a = categories[i].CategoryClass;
      RenderFoodsByCategory(a);
    };
  }
}
RenderCategories();
// Food with categories
async function GetFoodsByCategory(item) {
  let api = `http://localhost:8000/food/getfoodbycategory?FoodCategories=${item}`;
  try {
    let res = await fetch(api);
    return res.json();
  } catch (error) {
    console.log(error);
  }
}
//Render ra giao diện food theo category
async function RenderFoodsByCategory(item) {
  var discount_item = document.querySelector(".discount-item");
  let items = await GetFoodsByCategory(item);
  let html = "";
  let htmlSegment = "";
  console.log(items);
  if (items.length != 0) {
    items.forEach((element) => {
      console.log(element);
      htmlSegment = `
      <div class="col-lg-3 col-md-3">
      <div class="inner">
          <div class="field_img" >
             <a href="#">
                 <img class = "food-image" src="${element.FoodImage}" alt="">
             </a>
          </div>
          <div class="name">
              <h5>
                  ${element.FoodName}
              </h5>     
              <a href="#">
                  <img src="../images/icon-heart.svg" alt="" class="icon_item">
              </a>
          </div>
           <div class="description">
              <p class="desc1">${element.FoodDesc}</p>
           </div>
           <p class="price">
              ${convertMoney(element.FoodPriceOrg)}
           </p>
           <button onclick="eventButtonAddToCart('${element._id}','${
        element.FoodName
      }','${element.FoodImage}', '${
        element.FoodPriceOrg
      }')" id="btn-add-to-cart-id" class="btn-add-to-cart">
             Thêm Vào Giỏ Hàng
           </button>
        </div>
      </div> `;
      html += htmlSegment;
    });
  } else {
    htmlSegment =
      '<div class="col-lg-3 col-md-3"><div class="inner-null">Hiện tại sản phẩm không có trong menu này</div></div>';
    html += htmlSegment;
  }
  discount_item.innerHTML = html;
}

/// chuyển tiền sang mệnh giá VND
function convertMoney(num) {
  return num.toLocaleString("it-IT", { style: "currency", currency: "VND" });
}

// Lấy ngày tháng hôm nay
function getCurrentDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  var yyyy = String(today.getFullYear());
  today = dd + "/" + mm + "/" + yyyy;
  return today;
}

// Event tại nút thêm vào giỏ hàng khi chưa đăng nhập và khi đã đăng nhập

var total_money = document.querySelector(".total_money");
var current_price;
var current_quantity;
var total_money_text;
var total_update;

function Delete_Cart(foodId, invoiceId) {
  if (parseFloat(total_money.innerText) > 0) {
    let array_btn_delete_cart = document.querySelectorAll(
      ".btn_delete_cart_item"
    );
    for (var i = 0; i < array_btn_delete_cart.length; i++) {
      array_btn_delete_cart[i].onclick = function (event) {
        total_money_text = total_money.innerText;
        console.log(total_money_text);
        current_price =
          event.target.parentElement.querySelector(".current_price").innerText;
        console.log(current_price);
        current_quantity =
          event.target.parentElement.querySelector(".quantity").innerText;
        console.log(current_quantity);
        event.target.parentElement.remove(); /*Delete Item*/
        DeleteItemCart(foodId, invoiceId);
        /*Update total*/

        total_update =
          parseFloat(total_money_text) -
          parseFloat(current_price) * parseFloat(current_quantity);
        total_money_text = total_update;
        total_money.innerText = total_money_text + ".000đ";
        console.log(total_money_text);
      };
    }
  }
}

// Event tại nút thêm vào giỏ hàng khi chưa đăng nhập và khi đã đăng nhập
function eventButtonAddToCart(foodId, foodName, FoodImage, foodPriceOrg) {
  var modal = document.querySelector(".modal_lotteria");
  var address = "58/5 Lương Định Của";
  var sumAmountCurrent = 0;
  var sumPriceCurrent = 0;
  var dateInvoice = getCurrentDate();
  if (!localStorage.getItem("userId")) {
    modal.classList.add("open");
  } else {
    modal.classList.remove("open");
    var invoiceCreate = {
      SumPrice: sumPriceCurrent,
      SumAmount: sumAmountCurrent,
      DateInvoice: dateInvoice,
      Address: address,
      FoodElement: foodId,
      CustomerId: localStorage.getItem("userId"),
    };
    if (!localStorage.getItem("invoiceId")) {
      postData(
        `http://localhost:8000/invoice/createinvoice/`,
        invoiceCreate
      ).then((data) => {
        // alert(data);
        localStorage.setItem("invoiceId", data.data1);
        console.log(data);
      });
      RenderCart(foodId, foodName, FoodImage, foodPriceOrg);
    } else {
      var idFood2 = {
        FoodElement: foodId,
        InvoiceId: localStorage.getItem("invoiceId"),
      };
      postData(`http://localhost:8000/invoice/addfoodstoinvoice`, idFood2).then(
        (data) => {
          // alert(data);
          console.log(data);
        }
      );
      RenderCart(foodId, foodName, FoodImage, foodPriceOrg);
    }
  }
}

function RenderCart(foodId, foodName, foodImage, foodPriceOrg) {
  let flag = false;
  let cart_item_import;
  let cart_item_quantity;
  var image_cart_item = foodImage;
  var name_cart_item = foodName;
  var price_cart_item = foodPriceOrg;
  let field_name = document.querySelectorAll(".field_name");
  var totalQuantity = 0;
  /*Kiem tra san pham đã có trong cart hay chưa */
  for (var i = 0; i < field_name.length; i++) {
    /*nếu có rồi thì cập nhật lại số lượng */
    if (name_cart_item === field_name[i].innerText) {
      cart_item_quantity =
        field_name[i].parentElement.querySelector(".quantity").innerText;
      quantity_temp = parseFloat(cart_item_quantity);
      quantity_temp += 1;
      flag = true;
      field_name[i].parentElement.querySelector(
        ".quantity"
      ).innerText = `${quantity_temp}`;
      totalQuantity += 1;
      break;
    }
  }
  /*nếu chưa có thì thêm item mới vào cart */
  if (flag == false) {
    cart_item_import = `
        <button class="btn_delete_cart_item">
        
        </button>
        <div class="field_img_cart">
          <img class= "imageFoodClass" src="${image_cart_item}" alt=""> 
        </div>
        <div class="field_info">
              <p class="field_name ">${name_cart_item}</p>
              <div class="field_price">
              <span class="current_price">${price_cart_item}</span>
              <span> x</span>
              <span class="quantity">1</span>
              </div>
        </div>              
      `;
    var node_cart_item = document.createElement("li");
    node_cart_item.innerHTML = cart_item_import;
    node_cart_item.classList.add("cart_item");
    document.querySelector(".cart_list ul").appendChild(node_cart_item);
  }

  /*Cập nhật lại tiền */
  total_money_text = total_money.innerText;

  total_update = parseFloat(total_money_text) + parseFloat(price_cart_item);
  total_money_text = total_update;
  total_money.innerText = total_money_text + ".000đ";
  Delete_Cart(foodId, localStorage.getItem("invoiceId"));
  console.log(totalQuantity);
}

//event khi nhấn nút thanh toán hoá đơn
function SubmitPayment() {
  var total_money1 = document.querySelector(".total_money").innerText;
  if (total_money1 == "0.0đ" || total_money1 == "0.000đ") {
    alert("không có thức ăn nào trong hoá đơn. Vui lòng chọn sản phẩm!!");
  } else {
    console.log(total_money1);
    var invoiceid = localStorage.getItem("invoiceId");
    var userid = localStorage.getItem("userId");
    const dataStatus = {
      InvoiceId: invoiceid,
      CustomerId: userid,
    };
    postData(
      "http://localhost:8000/invoice/addinvoicetruetocustomer/",
      dataStatus
    ).then((data) => {
      console.log(data);
    });
    alert("Đơn hàng thanh toán thành công");
    UpdateCartPayed(invoiceid);
    localStorage.removeItem("invoiceId");
    window.location.reload();
  }
}
// function AddToCart()
// {
//   var cart;
//   var price = document.getElementsByClassName(".inner .price");
//   var foodPriceOrg = parseFloat(price.innerText);
//   var btnAddToCart = document.querySelector(".inner .btn-add-to-cart");
//   btnAddToCart.onclick(
//     console.log(foodPriceOrg)
//   );
//   console.log(foodPriceOrg);
// }
// AddToCart();
