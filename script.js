
    let pass1 = document.getElementById("password1");
    document.getElementById("eye1").addEventListener("click", function () {
      if (pass1.type == "password") {
        pass1.type = "text";
        this.classList.add("fa-eye");
        this.classList.remove("fa-eye-slash");
      } else {
        pass1.type = "password";
        this.classList.remove("fa-eye");
        this.classList.add("fa-eye-slash");
      }
    });
    let pass2 = document.getElementById("password2");
    document.getElementById("eye2").addEventListener("click", function () {
      if (pass2.type == "password") {
        pass2.type = "text";
        this.classList.add("fa-eye");
        this.classList.remove("fa-eye-slash");
      } else {
        pass2.type = "password";
        this.classList.remove("fa-eye");
        this.classList.add("fa-eye-slash");
      }
    });

    pass1.addEventListener("keyup", function () {
      validate(pass1.value);
    });

    pass1.addEventListener("focus", function () {
      RemoveClass("passInfo", "hide");
    });
    pass1.addEventListener("blur", function () {
      AddClass("passInfo", "hide");
    });

    function validate(pswd) {
      // let lengthOf = document.getElementById('length');
      if (pswd.length >= 8) {
        valid("length");
      } else {
        invalid("length");
      }

      if (pswd.match(/[a-z]/)) {
        valid("small");
      } else {
        invalid("small");
      }
      if (pswd.match(/[A-Z]/)) {
        valid("capital");
      } else {
        invalid("capital");
      }
      if (pswd.match(/[0-9]/)) {
        valid("number");
      } else {
        invalid("number");
      }
    }

    function valid(id) {
      AddClass(id, "valid");
      RemoveClass(id, "invalid");
      AddClassOnIcon(id, "fa-check");
      RemoveClassOnIcon(id, "fa-times");
    }

    function invalid(id) {
      AddClass(id, "invalid");
      RemoveClass(id, "valid");
      RemoveClassOnIcon(id, "fa-check");
      AddClassOnIcon(id, "fa-times");
    }

    function AddClass(id, cl) {
      document.getElementById(id).classList.add(cl);
    }

    function RemoveClass(id, cl) {
      document.getElementById(id).classList.remove(cl);
    }

    function AddClassOnIcon(id, cl) {
      document.getElementById(id).firstChild.classList.add(cl);
    }
    function RemoveClassOnIcon(id, cl) {
      document.getElementById(id).firstChild.classList.remove(cl);
    }