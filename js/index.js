let dia = document.getElementById("dia");
let mes = document.getElementById("mes");
let ano = document.getElementById("ano");

let ddd = document.getElementById("ddd").value;
let telefone = document.getElementById("telefone").value;


function validaDDD(){
    let  listaDeDDD = [
        11, 12, 13, 14, 15, 16, 17, 18, 19,
        21, 22, 24,
        27, 28,
        31, 32, 33, 34, 35, 37, 38,
        41, 42, 43, 44, 45, 46,
        47, 48, 49,
        51, 53, 54, 55,
        61,
        62, 64,
        63,
        65, 66,
        67,
        68,
        69,
        71, 73, 74, 75, 77,
        79,
        81, 87,
        82,
        83,
        84,
        85, 88,
        86, 89,
        91, 93, 94,
        92,
        95, 96, 97, 98, 99
    ];

    if (!listaDeDDD.includes(ddd)) return alert('DDD inválido');
}   

function validaTelefone(){
    let confereCaracteres = /^\d{4}\d{4}$/;
    if (!confereCaracteres.test()) return false;
    return true;
}

function validaCheckBox(){
    let meuscheck = document.querySelectorAll("input[type=checkbox]:checked");
    if (meuscheck.length > 3) return false;
    return true;
}


function enviarFormulario(event){
    event.preventDefault();

    // if (!validaTelefone()) return alert("Telefone inválido");
    if(!validaCheckBox()) return alert("Você só pode ter até 3 atividades");


    alert("Cadastro realizado!");

}