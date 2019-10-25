(function() {
  var link = document.querySelector(".write-us-link");
  var popup = document.querySelector(".modal-write-us");
  var close = document.querySelector(".modal-write-us-close");
  var userName = document.querySelector("[name=user-name]");
  var userEmail = document.querySelector("[name=user-email]");
  var userMessage = document.querySelector("[name=user-message]");
  var form = document.querySelector(".write-us-form");
  var isStorageSupport = true;
  var storageUserName = "";
  var storageUserEmail = "";

  try {
    storageUserName = localStorage.getItem("userName");
    storageUserEmail = localStorage.getItem("userEmail");
  } catch (err) {
    isStorageSupport = false;
  }

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");

    if (storageUserName) {
      userName.value = storageUserName;
      userEmail.focus();
      if (storageUserEmail) {
        userEmail.value = storageUserEmail;
        userMessage.focus();
      } else {
        userEmail.focus();
      }
    } else {
      userName.focus();
    }
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  });

  form.addEventListener("submit", function (evt) {
    if (!userName.value || !userEmail.value) {
      evt.preventDefault();
      popup.classList.add("modal-error");
      console.log("Надо написать имя и почту");
    }
    else {
      if (isStorageSupport) {
        localStorage.setItem("userName", userName.value);
        localStorage.setItem("userEmail", userEmail.value);
      }
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
  });

})();

