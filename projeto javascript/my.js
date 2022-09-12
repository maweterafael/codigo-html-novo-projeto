
const nome = document.getElementById('name')
const email = document.getElementById('email')
const textearea = document.getElementById('textarea')
const res = document.getElementById('res')
const form = document.querySelector('form')
const error = document.getElementById('errorEmail')
const letter = document.getElementById('letter')


form.addEventListener('submit', (e) => {
    if (nome.value == "" && email.value == "" && textearea.value == "") {
        res.innerHTML = `prencha todos os campos`
        res.style.backgroundColor = "grey"
    }
    e.preventDefault();

})

email.addEventListener("keyup", () => {
    if (validatorEmail(email.value) !== true) {
        error.textContent = "O formato do email deve ser Ex: name@gmail.com";
    } else {
        errorEmail.textContent = "";
        errorEmail.style.backgroundColor = "grey"
    }
});
function validatorEmail(email) {
    let padrãoEmail =
        / ^ [ _a-z0-9- ] + ( \. [ _a-z0-9- ] + ) * @ [ a-z0-9- ] + ( \. [ a-z0-9- ] + ) * ( \. [ az ] { 2,4 } ) $ /;
}


function validatorName(nome) {
    const nomeValue = nome.value.trim()
    if (nomeValue === "" || nomeValue.length < 6) {
        letter.textContent = `verifique o nome preenchido, atenção o prenchimento é obrigatório`
        letter.style.backgroundColor = "grey"
    }
}