/* 並非課程重點的部分 */
// target element
const form = document.querySelector("form");
const submitButton = document.querySelector("#submit-btn");

// 設置點擊監聽器
submitButton.addEventListener("click", function onSubmitButtonClicked(event) {
  form.classList.add("was-validated");
});

// 設置提交監聽器:將資料傳送到後端
form.addEventListener("submit", function onFormSubmit(event) {
  if (!form.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
  }
});
