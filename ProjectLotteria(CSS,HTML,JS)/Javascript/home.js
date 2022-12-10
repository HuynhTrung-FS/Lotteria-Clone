// var header=document.getElementById('header');
// var logo=document.querySelector('.logo');
// window.addEventListener('scroll',function()
//     {
//           if(window.pageYOffset>=199)
//           {
//             header.classList.add('sticky');
//             logo.classList.add('sticky');

//           }
//           else
//           {
//             header.classList.remove('sticky');
//             logo.classList.remove('sticky');

//           }
//     })
// var line=document.querySelector('.line');
// var tabs=document.querySelectorAll('.nav-item');
// var temp=line;
// for (let i=0 ;i<tabs.length;i++)
// {
//   tabs[i].onmouseover=function()
//   {
//   for (let j=0;j<tabs.length;j++)
//   {
//     if(tabs[i].contains(line))
//     {
//       line.remove();
//     }
//   }
//   tabs[i].appendChild(temp);
// }
// }
// /* Tiếng việt,Tiếng Anh*/
// var image_updated=document.querySelector('.icon_vietnam_dowload');
// document.querySelector('#language').addEventListener('change',function(){
//      if(this.value=="VietNam")
//      {
//         image_updated.setAttribute('src','../images/VietNam_Flag.png');
//      }
//      else
//      {
//       image_updated.setAttribute('src','../images/American_Flag.png');
//      }
// })

// /*Modal-JS*/
// var buttons = document.querySelectorAll(".menu_item");
// var modal = document.querySelector(".modal_lotteria");
// var btn_close_1 = document.querySelector(".btn_close_1");
// var btn_close_2 = document.querySelector(".btn_close_2");
// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", function () {
//     modal.classList.add("open");
//   });
// }
// btn_close_1.onclick = function () {
//   modal.classList.remove("open");
// };
// btn_close_2.onclick = function () {
//   modal.classList.remove("open");
// };
// var modal_login = document.querySelector(".modal_login");
// var modal_login_back = document.querySelector(".modal_login_back");
// var btn_back = document.querySelector(".btn_back");
// var btn_next = document.querySelector(".btn_next");
// btn_next.addEventListener("click", function () {
//   modal_login_back.classList.remove("flex");
//   modal_login.classList.add("flex");
// });
// btn_back.addEventListener("click", function () {
//   modal_login.classList.remove("flex");
//   modal_login_back.classList.add("flex");
// });
var header = document.getElementById("header");
var logo = document.querySelector(".logo");
window.addEventListener("scroll", function () {
  if (window.pageYOffset >= 199) {
    header.classList.add("sticky");
    logo.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
    logo.classList.remove("sticky");
  }
});
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

// Food with categories
async function GetFoodsByCategory() {
  let api = `http://localhost:8000/food/getfoodbycategory?FoodCategories=khuyenmai`;
  try {
    let res = await fetch(api);
    return res.json();
  } catch (error) {
    console.log(error);
  }
}
//Render ra giao diện food theo category
async function RenderFoodsByCategory() {
  var discount_item = document.querySelector(".discount-item");
  let items = await GetFoodsByCategory();
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

RenderFoodsByCategory();
