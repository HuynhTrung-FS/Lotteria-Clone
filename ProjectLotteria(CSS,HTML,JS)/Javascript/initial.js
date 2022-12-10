const blockinfo = {
  withUser: document.getElementById("withUser"),
  withoutUser: document.getElementById("withoutUser"),
};
const kt = localStorage.getItem("userId");
console.log(kt);

if (kt != null) {
  blockinfo.withUser.style.display = "block";
  blockinfo.withoutUser.style.display = "none";
  let Btn_info_account = document.querySelector(".menu_item_login_myaccount");

  x1 = document.querySelector(".block_infomation");
  x1.onclick = function (event) {
    event.stopPropagation();
  };
  Btn_info_account.addEventListener("click", function () {
    x1.classList.toggle("none");
  });
  let btn_cart = document.querySelector(".menu_item_login_cart");
  x2 = document.querySelector(".cart_content");
  x2.onclick = function (event) {
    event.stopPropagation();
  };
  btn_cart.onclick = function () {
    if (
      document.querySelector(".block_infomation").classList.contains("none") ==
      false
    ) {
      document.querySelector(".block_infomation").classList.add("none");
    }
    document.querySelector(".cart_content").classList.toggle("none");
  };
} else {
  blockinfo.withUser.style.display = "none";
  blockinfo.withoutUser.style.display = "block";
}
