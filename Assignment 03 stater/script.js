`use strict`;

const emailInput = document.querySelector("#mail");
const dataOutput = document.querySelector(".data");
const inputForm = document.querySelector(".input");
const ttJob = document.getElementsByClassName("bt");
const ctJob = document.getElementsByClassName("dl");
const hoverOpen = document.getElementsByClassName("hoveropen");
const hoverClose = document.getElementsByClassName("hoverclose");

const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const opendata = function () {
  inputForm.classList.add("hidden");
  dataOutput.classList.remove("hidden");
};
// để hiện form thông tin khi nhập email hợp lệ và ẩn phần nhập email và nút bấm
document.querySelector(".button").addEventListener("click", function () {
  if (!regex.test(emailInput.value)) {
    alert("Email không hợp lệ");
  } else {
    opendata();
  }
});
// để mở và đóng container chứa phần nội dung và hiện hover khi đưa chuột vào và ẩn phần hover khi đưa chuột ra khỏi
for (let i = 0; i < ttJob.length; i++) {
  ttJob[i].onclick = function () {
    ctJob[i].classList.toggle("hidden");
  };

  if (ctJob[i].classList.contains("hidden")) {
    ttJob[i].addEventListener("mouseout", function () {
      hoverOpen[i].classList.add("hidden");
    });
    ttJob[i].addEventListener("mouseover", function () {
      hoverOpen[i].classList.remove("hidden");
    });
    hoverClose[i].classList.add("hidden");
  } else {
    ttJob[i].addEventListener("mouseout", function () {
      hoverClose[i].classList.add("hidden");
    });
    ttJob[i].addEventListener("mouseover", function () {
      hoverClose[i].classList.remove("hidden");
    });
    hoverOpen[i].classList.add("hidden");
  }
}
