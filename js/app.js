function Lorempicsum() {
    // fetch("https://randomuser.me/api/")
    let contenido = document.querySelector('#contenido');
    fetch("https://picsum.photos/v2/list?page=1&limit=20")
        .then(respuesta => respuesta.json())
        .then(respuesta => {

            contenido.innerHTML = "";
            console.log(respuesta);
            respuesta.forEach(element => {
                contenido.innerHTML +=
                    `
                <div class="col-md-4 pb-4">
                    <div class="card">
                        <img src="${element.download_url}" class="card-img-top" alt="..." width="400" height="300">
                        <div class="card-body">
                            <h5 class="card-title">${element.author}</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            `;
            });
        })
        .catch((error) => console.log('error'));
}


Lorempicsum();

$('#modal_1').on('shown.bs.modal', function () {
    $('#button_1').trigger('focus')
})

$('#modal_2').on('shown.bs.modal', function () {
    $('#button_2').trigger('focus')
})

$('#modal_3').on('shown.bs.modal', function () {
    $('#button_3').trigger('focus')
})


