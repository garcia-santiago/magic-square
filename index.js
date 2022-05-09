const botonGenerar = document.getElementById("generate");
const botonCheck = document.getElementById("check");
const botonClear = document.getElementById("clear");

const caja1 = document.getElementById("caja1");
const caja2 = document.getElementById("caja2");
const caja3 = document.getElementById("caja3");
const caja4 = document.getElementById("caja4");
const caja5 = document.getElementById("caja5");
const caja6 = document.getElementById("caja6");
const caja7 = document.getElementById("caja7");
const caja8 = document.getElementById("caja8");
const caja9 = document.getElementById("caja9");

botonGenerar.addEventListener("click",() => {
    caja1.value = Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER  - (Number.MAX_SAFE_INTEGER*-1))) + (Number.MAX_SAFE_INTEGER*-1);
    caja2.value = Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER  - (Number.MAX_SAFE_INTEGER*-1))) + (Number.MAX_SAFE_INTEGER*-1);
    caja3.value = Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER  - (Number.MAX_SAFE_INTEGER*-1))) + (Number.MAX_SAFE_INTEGER*-1);
    caja4.value = Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER  - (Number.MAX_SAFE_INTEGER*-1))) + (Number.MAX_SAFE_INTEGER*-1);
    caja5.value = Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER  - (Number.MAX_SAFE_INTEGER*-1))) + (Number.MAX_SAFE_INTEGER*-1);
    caja6.value = Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER  - (Number.MAX_SAFE_INTEGER*-1))) + (Number.MAX_SAFE_INTEGER*-1);
    caja7.value = Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER  - (Number.MAX_SAFE_INTEGER*-1))) + (Number.MAX_SAFE_INTEGER*-1);
    caja8.value = Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER  - (Number.MAX_SAFE_INTEGER*-1))) + (Number.MAX_SAFE_INTEGER*-1);
    caja9.value = Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER  - (Number.MAX_SAFE_INTEGER*-1))) + (Number.MAX_SAFE_INTEGER*-1);
})
botonCheck.addEventListener("click",() => {
    var matrix = [
        [caja1.value, caja2.value, caja3.value],
        [caja4.value, caja5.value,  caja6.value],
        [caja7.value, caja8.value, caja9.value]
    ] 
    checkMS(matrix);
})
botonClear.addEventListener("click", () => {
    caja1.value = "";
    caja2.value = "";
    caja3.value = "";
    caja4.value = "";
    caja5.value = "";
    caja6.value = "";
    caja7.value = "";
    caja8.value = "";
    caja9.value = "";
})

function checkMS(matrix){
    const col1 = parseInt(matrix[0][0])+parseInt(matrix[0][1])+parseInt(matrix[0][2]);
    const col2 = parseInt(matrix[1][0])+parseInt(matrix[1][1])+parseInt(matrix[1][2]);
    const col3 = parseInt(matrix[2][0])+parseInt(matrix[2][1])+parseInt(matrix[2][2]);
    const row1 = parseInt(matrix[0][0])+parseInt(matrix[1][0])+parseInt(matrix[2][0]);
    const row2 = parseInt(matrix[0][1])+parseInt(matrix[1][1])+parseInt(matrix[2][1]);
    const row3 = parseInt(matrix[0][2])+parseInt(matrix[1][2])+parseInt(matrix[2][2]);
    const diag1 = parseInt(matrix[0][0])+parseInt(matrix[1][1])+parseInt(matrix[2][2]);
    const diag2 = parseInt(matrix[0][2])+parseInt(matrix[1][1])+parseInt(matrix[2][0]);
    
    if(col1==col2 && col1==col3 && col1==row1 && col1==row2 && col1==row3 && col1==diag1 && col1==diag2){
        mostrarAlerta("Magic square! all the columns rows and diagonals add up to <span class='font-bold underline'>" + col1 +"</span>", true)
    }
    else{
        mostrarAlerta("not magic square!! :(", false);
    }
}
function mostrarAlerta(mensaje, tipo){
    const existeAlerta = document.querySelector('.bg-red-100');

    if(!existeAlerta) {
        const alerta = document.createElement('p');
        if(tipo){
            alerta.classList.add('bg-green-100', 'border-green-400', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center');

        }else{
            alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center');
        }

    
        alerta.innerHTML = `
            <span class="block sm:inline">${mensaje}</span>
        `;
    
        const divMensaje = document.querySelector('.mensaje');
        divMensaje.appendChild(alerta);
    
        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}