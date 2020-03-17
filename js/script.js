var link = document.querySelector(".login-link");

var popup = document.querySelector(".popup");

var close = popup.querySelector(".close-cross-button");

var form = popup.querySelector("popup-form");
var name = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var comment = popup.querySelector("[name=comment]");

var isStorageSupport = true;
  var storage = "";
  
try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");

	if (storage) {
    name.value = storage;
    email.focus();
  } else {
    name.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
if (!name.value || !email.value || !comment.value) {
  evt.preventDefault();
  console.log("Нужно ввести имя, имеил и текст письма");	
	} else {
		if (isStorageSupport) {
      localStorage.setItem("name", name.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
      }
    }
  });