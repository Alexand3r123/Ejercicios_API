document.getElementById("btn-enviar").addEventListener("click", ajax);

function ajax(event) {
    event.preventDefault();
    var formElement = document.getElementById("myForm");

    const xhr = new XMLHttpRequest();
    const url = 'test.php';

    xhr.addEventListener("load", resultado);
    xhr.open("POST", url);
    xhr.send(new FormData(formElement));
}

function resultado() {
    if (this.readyState == 4) {
        if(this.status == 200) {
            console.log(this.responseText);
        } else {
            console.log("Error cargando la página");
        }
    }
}