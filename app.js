
// Definición las constantes.

const fecha = document.querySelector('#fecha');
const lista = document.querySelector('#lista');
const elemento = document.querySelector('#elemento');
const input = document.querySelector('#input');
const botonAgregar = document.querySelector('#boton-agregar');
const check = 'bi-record-circle';
const tachado = 'tachado';
const uncheck = 'bi-circle';
let LIST;
let id;

const FECHA = new Date ();
fecha.innerHTML = FECHA.toLocaleDateString('es-MX',{
    weekday: 'long',
    month: 'short',
    day: 'numeric'
});

//DOM, nos permite hacer una interaccion con html, es una manera de llegar a las ramas del html (li en este caso).
//Función agregar tarea.
function agregarTarea(tarea,id,hecho,eliminar) {
    //Si eliminar existe va a revotar una respuesta true o false.
    if (eliminar) {
        return
    };

    //Cuando la tarea cambie, se mocstrara solo el circulo.
    //Se va a ver si en el id esta hecho, el signo nos dice si sí está hehco con el chechk o el uncheck.
    const realizado = hecho ? check : uncheck;
    //Linea que se coloca cuando tenemos el check o el uncheck, aparece si si esta hecho.
    const LINE = hecho ? tachado : '' ;
    const elemento = `<li id="elemento">
                    <i id="${id}" data="hecho" class="bi ${realizado}"></i>
                    <p class="tarea-lista text ${LINE}">${tarea}</p>
                    <i id="${id}" data="eliminar" class="bi bi-x"></i>
                </li>`
                lista.insertAdjacentHTML("beforeend",elemento);

};
 

//Checa si elemnto está check o uncheck.
function tareaRealizada(element) {

    element.classList.toggle(check);
    element.classList.toggle(uncheck);
    
    element.parentNode.querySelector('.text').classList.toggle(tachado);
    LIST[element.id].realizado = LIST[element.id].realizado ?false :true;
}
function tareaEliminada(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].eliminar = true;
    
};

botonAgregar.addEventListener("click", () => {
    const tarea = input.value;
    if (tarea) {
        agregarTarea(tarea, id, false, false)
        LIST.push({
            nombre: tarea,
            id: id,
            hecho: false,
            eliminar: false,
        });
        localStorage.setItem("TODO", JSON.stringify(LIST));
        id++;
        input.value = "";

    }
});
lista.addEventListener("click", function (event){
    const element = event.target;
    const elementData = element.attributes.data.value;
    if (elementData == "hecho") {
        tareaRealizada(element);
    } else if (elementData == "eliminar") { 
        tareaEliminada(element);
    };
    localStorage.setItem("TODO", JSON.stringify(LIST));
});

let data = localStorage.getItem ("TODO");
if (data) {
    LIST = JSON.parse(data);
    id = LIST.length;
    cargarLista(LIST);
} else {
    LIST = [];
    id = 0; 
}
function cargarLista(array) {
    array.forEach(
        function (item){
            agregarTarea(item.nombre, item.id, item.hecho, item.eliminar);
        }
    )
};