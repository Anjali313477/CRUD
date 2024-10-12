let mode = "Insert";
let oldDataId;
function saveData() {
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
    if (name.length < 3) {
        swal("Please Enter Proper Name", "", "warning");
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
    if (pincode.length < 5) {
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



    if (mode == "Insert") {
        let allData = JSON.parse(localStorage.getItem("object")) || [];
        let newId = allData.length ?
            allData[allData.length - 1].id + 1 : 1;

        let data = {
            id: newId,
            Name: name,
            Email: email,
            Age: age,
            Gender: gender,
            State: state,
            City: city,
            PinCode: pincode,
            Number: number
        }
        allData.push(data);
        localStorage.setItem("object", JSON.stringify(allData));

    } else if (mode == "Update") {
        let object = localStorage.getItem("object");
        let allData= JSON.parse(object);
        let dataIndex = allData.findIndex(e => e.id == oldDataId);

        if (dataIndex != -1) {
            allData[dataIndex].Name = name;
            allData[dataIndex].Age = age;
            allData[dataIndex].Email = email;
            allData[dataIndex].Gender = gender;
            allData[dataIndex].Number = number;
            allData[dataIndex].State = state;
            allData[dataIndex].PinCode = pincode;
            allData[dataIndex].City = city;
    
            localStorage.setItem("object", JSON.stringify(allData));
        } else {
            alert("data not found !");
        }
    }
    showTable();
    viewData();
}





function viewData() {
    let table = document.querySelector('.data-table');
    var object = localStorage.getItem('object');

    var objectdata = JSON.parse(object) || [];
    var elements = '';
    if (objectdata.length === 0) {
        elements += `<tr>
            <td class="no-data">Data Not Found</td>
            </tr>`;
    } else {
        elements = "";
        objectdata.map(record => {
            elements += `<tr>
                <td>${record.id}</td>
                <td>${record.Name}</td>
                <td>${record.Email}</td>
                <td>${record.Age}</td>
                <td>${record.State}</td>
                <td>${record.Number}</td>
                <td>
                    <button class="edt" onclick="editData(${record.id})">Edit</button>
                    <button class="dlt" onclick="deleteData(${record.id})">Delete</button>
                </td>
            </tr>`;
        });
    }
    table.innerHTML = elements;
    document.querySelector("form").reset();
}




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




function editData(id) {
    mode = "Update";
    document.querySelector('form').classList.remove("hide")
    document.querySelector('.table').classList.add("hide")
    document.querySelector('.add-button').classList.add("hide")

    let object = localStorage.getItem("object");
    let objectdata = JSON.parse(object);
    let data = objectdata.find(e => e.id == id)

    oldDataId= data.id;

    document.querySelector('#name').value = data.Name;
    document.querySelector('#email').value = data.Email;
    document.querySelector('#number').value = data.Number;
    document.querySelector('#age').value = data.Age;
    document.querySelector('#state').value = data.State;
    document.querySelector('#city').value = data.City;
    document.querySelector('#pincode').value = data.PinCode;
    document.querySelector('#gender').value = data.Gender;

}

function deleteData(id){
    let object = localStorage.getItem("object");
    let objectdata = JSON.parse(object);
    objectdata = objectdata.filter(e => e.id !== id);
    localStorage.setItem("object", JSON.stringify(objectdata));
    viewData() 
}
