const color = document.querySelector("#ImputColor")
        console.log(color);


color.addEventListener("change", function nombre (e) {
            document.body.style.backgroundColor = e.target.value;
        })
const formulario = document.querySelector("#formularioDatos")
console.log(formulario);

formulario.addEventListener("submit", function (e) {
    e.preventDefault
    const datos = Object.fromEntries(
        new FormData(e.target)
    )
    console.log(datos);
}