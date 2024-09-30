function showForm(){
    document.querySelector('.add-button').classList.add("hide");
    document.querySelector('.table').classList.add("hide");
    document.querySelector('.heading').classList.add("hide")
    document.querySelector('form').classList.remove('hide');
}

function showTable(){
    document.querySelector('.add-button').classList.remove("hide");
    document.querySelector('.table').classList.remove("hide");
    document.querySelector('.heading').classList.remove("hide")
    document.querySelector('form').classList.add('hide');
}