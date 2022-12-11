/* ĐĂNG NHẬP*/
//Hàm fetch api khi post dữ liệu
async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
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
//Hàm event khi nhấn nút đăng nhập
function login() {
  var account = document.getElementById("email").value;
  var passWord = document.getElementById("pwd").value;
  const user = {
    Account: account,
    PassWord: passWord,
  };
  console.log(user);
  postData("http://localhost:8000/authenticate/login", user).then((data) => {
    console.log(data);
    if (data.user == null) {
      alert("Không đúng tài khoản hoặc mật khẩu. Đăng nhập thất bại");
    } else {
      alert("Đăng nhập thành công");
      localStorage.setItem("userId", data.user);
      window.location.reload();
    }
  });
  // modal.classList.remove("open");
  // for (let i = 0; i < buttons.length; i++) {
  //   buttons[i].addEventListener("click", function () {
  //     modal.classList.remove("open");
  //   });
  // }
}
/*ĐĂNG XUẤT*/
//Hàm event khi nhấn nút đăng xuất
function logout() {
  localStorage.removeItem("userId");
  localStorage.removeItem("invoiceId");
  alert("Đăng xuất thành công");
  window.location.reload();
}
/* Xác thực*/
//Hàm tạo ra mã code random
function randomCode(){
    var result = '';
    var numbers = '0123456789';
    var numbersLength = 5 + Math.floor((Math.random()*numbers.length)/3);
    for(let i =0;i<numbersLength;i++){
        result +=numbers.charAt(Math.floor(Math.random()*numbers.length));
    }
    return result;
}
//Hàm gửi email
function sendEmail(code,emailTo) {
    Email.send({
        Host : "smtp.elasticemail.com",
        Port :"2525",
        Username : "maihuynhtrung0@gmail.com",
        Password : "6B8343F9FE8D6A51C292DF1F46F365A4C278",
        To : `${emailTo}`,
        From : "maihuynhtrung0@gmail.com",
        Subject : "Mã Xác Thực Để Vào Trang",
        Body : `<html><h2>Vui lòng nhập mã xác thực bên dưới để truy cập vào trang:</h2><strong style="font-size: 30px">${code}</strong></html>`
    }).then(
      message => alert(message)
    );
}

//hàm event khi nhấn button gửi mã
function authenticateEmail(){
    var account = document.getElementById("email-register").value;
    var code = randomCode();
    localStorage.setItem("codeAuthenticate",code);
    sendEmail(code,account);
}


/*ĐĂNG KÍ THÀNH VIÊN*/
function register() {
  var customerName = document.getElementById("name-register").value;
  var phoneNumber = document.getElementById("sdt-register").value;
  var account = document.getElementById("email-register").value;
  var passWord = document.getElementById("pwd-register").value;
  var againPassWord = document.getElementById("pwd-register-again").value;
  var codeInput = document.getElementById("mxt-register").value;  
  if (passWord !== againPassWord){
    alert("Mật khẩu không trùng khớp khi nhập lại!!");
    return;
  }
  if(codeInput !== localStorage.getItem("codeAuthenticate")){
    alert("Mã xác thực không đúng! Vui lòng nhập lại");
    return;
  }
    const userRegister = {
        CustomerName: customerName,
        PhoneNumber: phoneNumber,
        Account: account,
        PassWord: passWord,
      };
    postData("http://localhost:8000/authenticate/register", userRegister).then((data) => {
    console.log(data);
    if (data.Message == null) {
        alert("Đăng Ký Thất Bại");
    } else {
        alert("Đăng Ký Thành Công");
        window.location.reload();
        // var modal_login_back = document.querySelector(".modal_login_back");
        // var modal_register = document.querySelector(".modal_register");
        // modal_register.classList.remove("flex");
        // modal_login_back.classList.add("flex");
    }
    });
}

