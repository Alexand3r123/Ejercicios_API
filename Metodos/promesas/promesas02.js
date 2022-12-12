let myForm = document.getElementById("myForm");
myForm.addEventListener("submit", ajax);

function ajax(event){
    event.preventDefault();
    const url = 'promesas02.php';
    fetch(url, { 
        method: 'POST',
        body : new FormData(myForm)
    })
    .then(resp => {
        if(resp.ok)
            return resp.text()
        else
            throw new Error("Error en la llamada");
    })

    .then(data => {
        document.getElementById("contenido").innerHTML = data
    })
    .catch(error => console.error(error))
}