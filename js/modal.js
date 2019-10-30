(function () {
  var linkWriteUs = document.querySelector(".write-us-link");
  var popupWriteUs = document.querySelector(".modal-write-us");
  var closeWriteUs = document.querySelector(".modal-write-us-close");
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

  linkWriteUs.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupWriteUs.classList.add("modal-show");

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

  closeWriteUs.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupWriteUs.classList.remove("modal-show");
    popupWriteUs.classList.remove("modal-error");
  });

  form.addEventListener("submit", function (evt) {
    if (!userName.value || !userEmail.value) {
      evt.preventDefault();
      popupWriteUs.classList.remove("modal-error");
      popupWriteUs.offsetWidth = popupWriteUs.offsetWidth;
      popupWriteUs.classList.add("modal-error");
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
      if (popupWriteUs.classList.contains("modal-show")) {
        popupWriteUs.classList.remove("modal-show");
        popupWriteUs.classList.remove("modal-error");
      }
    }
  });

  var linkMap = document.querySelector(".modal-map-link");
  var popupMap = document.querySelector(".modal-map");
  var closeMap = document.querySelector(".modal-map-close");

  linkMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.add("modal-show");
  });

  closeMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popupMap.classList.contains("modal-show")) {
        popupMap.classList.remove("modal-show");
      }
    }
  });
})();
