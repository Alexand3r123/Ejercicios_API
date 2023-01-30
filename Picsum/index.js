(function(){
    const url = 'https://picsum.photos/v2';
    fetch(`${url}/list`) //Llamado al API externo.
    .then(resp => { //Obtengo la respuesta en el primer THEN
        if(resp.ok && resp.status==200){
            console.log("Petición Correcta");
            return resp.json(); // Se convierte la respuesta a JSON
        }
    })
    .then(data => {
        for(let item of data){ // Ciclo para recorrer los datos
            document.getElementById("content").innerHTML += 
            `<div class="card" style="width: 18rem;">
            <img src="${item.download_url}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${item.author}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${item.id}</h6>
              <a href="${item.url}" class="card-link">${item.url}</a>
            </div>
          </div>`;
        }
    })
    .catch(resp => console.log("Error en el llamado del API"))
})()