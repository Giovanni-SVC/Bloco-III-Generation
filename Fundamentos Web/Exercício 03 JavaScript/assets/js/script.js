/* Como chamar os elementos:
por Tag: getElementByTagname()
por Id:getElementById()
por Nome: getElementsByname ()
por Classe : getElementsByClassName ()
por Seletor: querySelector ()
*/


let nome = document.getElementById('nome') // get especifico do id não precisa de #
let email = window.document.getElementById('email') // "window" antes do document ajuda a completar os comandos
let assunto = window.document.querySelector('#assunto') // querySelector precisa da //#endregion


function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome inválido - Digite um nome válido."
        txtNome.style.color = "red"
    }
    else {
        txtNome.innerHTML = ""
        txtNome.style.color = "green"
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1) { //obrigação de incluir um @ no campo EMAIL
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = "red"
        
    }
    else {
        txtEmail.innerHTML = ""
        txtEmail.style.color = "green"
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")
    if (assunto.value.length < 4) {
        txtAssunto.innerHTML = "Mínimo de 4 caracteres necessários!"
        txtAssunto.style.color = "red"
    }
    else {
        txtAssunto.innerHTML = ""
        txtAssunto.style.color = "green"
    }
}