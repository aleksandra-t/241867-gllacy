var feedback = document.querySelector(".feedback-btn");
var popupFeedback = document.querySelector(".popup-feedback");
var close = document.querySelector(".popup-close");
var login = popupFeedback.querySelector("[name=name]");
var feedbackForm = popupFeedback.querySelector(".feedback-form");
var email = popupFeedback.querySelector("[name=email]");
var storage = localStorage.getItem("name");

feedback.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupFeedback.classList.add("popup-feedback-show");
  if(storage) {
    login.value = storage;
    email.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupFeedback.classList.remove("popup-feedback-show");
  popupFeedback.classList.remove("popupFeedback-error");
});

feedbackForm.addEventListener("submit", function(evt) {
  if(!login.value || !email.value) {
    evt.preventDefault();
    popupFeedback.classList.remove("popup-feedback-error");
    popupFeedback.offsetWidth = popupFeedback.offsetWidth;
    popupFeedback.classList.add("popup-feedback-error");
  } else {
    localStorage.setItem("name", login.value);
  }
});

window.addEventListener("keydown", function(evt) {
  if(evt.keyCode === 27) {
    if(popupFeedback.classList.contains("popup-feedback-show")) {
      popupFeedback.classList.remove("popup-feedback-show");
      popupFeedback.classList.remove("popupFeedback-error");
    }
  }
})
