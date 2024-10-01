function showForm() {
    document.querySelector('.add-button').classList.add("hide");
    document.querySelector('.table').classList.add("hide");
    document.querySelector('.heading').classList.add("hide")
    document.querySelector('form').classList.remove('hide');
}

function showTable() {
    document.querySelector('.add-button').classList.remove("hide");
    document.querySelector('.table').classList.remove("hide");
    document.querySelector('.heading').classList.remove("hide")
    document.querySelector('form').classList.add('hide');
}

function registerForm() {
    event.preventDefault();
    let name = document.querySelector("#name").value.trim();
    let age = document.querySelector("#age").value.trim();
    let city = document.querySelector("#city").value.trim();
    let number = document.querySelector("#number").value.trim()
    let email = document.querySelector("#email").value.trim();
    let gender = document.querySelector("#gender").value.trim();
    let state = document.querySelector("#state").value.trim();
    let pincode = document.querySelector("#pincode").value.trim();



    let chr = /^[A-Za-z\s]+$/
    var regx = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,8})(\.[a-z]+)?$/;
    if (name == "") {
        swal(" Name is required!", "", "warning");
        return false;
    }
    if (!chr.test(name)) {
        swal(" Name should contain only Letters", "", "warning")
        return false;
    }
    if (email == "") {
        swal("Email is required!", "", "warning")
        return false;
    }
    if (!regx.test(email)) {
        swal("Enter valid Email id", "", "warning")
        return false;
    }
    if (age == "") {
        swal("Age is required", "", "warning");
        return false;
    }
    if (age.length > 2) {
        swal("Please Enter Proper age", "", "warning");
        return false;
    }

    if (gender == "") {
        swal("gender is required!", "", "warning")
        return false;
    }
    if (state == "") {
        swal("state is required!", "", "warning")
        return false;
    }
    if (city == "") {
        swal("city is required!", "", "warning")
        return false;
    }
    if (pincode == "") {
        swal("Pincode Number is required!", "", "warning");
        return false;
    }
    if (pincode.length > 6) {
        swal("Valid Pincode Number is required!", "", "warning");
        return false;
    }
    if (number == "") {
        swal("Mobile Number is required!", "", "warning");
        return false;
    }
    if (number == "" || number.length != 10) {
        swal("Valid Mobile Number is required!", "", "warning");
        return false;
    }

}