const idInfo = window.location.href.split("=").pop()
console.log(idInfo);

const imagenPortada = document.getElementById('imagenPortada')
const informacionAnime = document.getElementById('infomacionAnime')

const urlID = `https://api.jikan.moe/v4/anime/${idInfo}`


fetch(urlID).then(resp => resp.json()).then(datos => {
    /* console.log(datos.data) */

    const datosNecesarios = {
        id: datos.data.mal_id,
        imagen: datos.data.images.jpg.large_image_url,
        sinopsis: datos.data.synopsis,
        nombre: datos.data.title,

    }

    const templateImg = `<img src="${datosNecesarios.imagen}" alt="" class="img-fluid">`

    imagenPortada.innerHTML = templateImg

    const templateInfo = `<h1>${datosNecesarios.nombre}</h1>
                           <p>${datosNecesarios.sinopsis}</p>
                            <div class="favorito">
                            <button id="agregarFavoritos" type="button" class="btn btn-dark">Agregar a Favoritos </button>
                            </div>`

    informacionAnime.innerHTML = templateInfo

    /* console.log(datosNecesarios); */

    const agregarFavoritos = document.getElementById("agregarFavoritos")
    console.log(agregarFavoritos);


    agregarFavoritos.addEventListener("click", () =>{
        /* console.log("Agregado"); */
        const datos = {
            id: datosNecesarios.id,
            nombre: datosNecesarios.nombre,
            image: datosNecesarios.imagen
        }

        if(localStorage.getItem("favoritos")){
            console.log("Existe un elemento");
            
            const favoritos = JSON.parse(localStorage.getItem("favoritos"));
            favoritos.push(datos)
            localStorage.setItem("favoritos",JSON.stringify(datos))
        }
        else{
            console.log("No tienes favoritos");
            const favoritos = []
            favoritos.push(datos)
            localStorage.setItem("favoritos",JSON.stringify(datos))

        }

        JSON.parse(localStorage.getItem("favoritos")); 

        



      



    })
})


