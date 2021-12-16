
function listOnibus() {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let obj = JSON.parse(this.responseText);
            for (i = 0; i < obj.length; i++) {
                let linha = obj[i];
                criarLinhaTabela(linha);
            }
        }
    }
    xmlHttp.open("GET", "http://localhost:8000/listOnibus.php");
    xmlHttp.send();
    console.log("Enviei requisição");
}
function criarLinhaTabela(pobjReturnJSON) {
    let tr = document.createElement("tr");
    let td = document.createElement("td"); 
    let textnode = document.createTextNode(pobjReturnJSON.MARCA);
    td.appendChild(textnode); 
    tr.appendChild(td); 

    let td2 = document.createElement("td"); 
    textnode = document.createTextNode(pobjReturnJSON.MODELO);
    td2.appendChild(textnode);
    tr.appendChild(td2);

    let td7 = document.createElement("td"); 
    textnode = document.createTextNode(pobjReturnJSON.PLACA);
    td7.appendChild(textnode);
    tr.appendChild(td7); 

    let tr_fim = document.getElementById("ultimaLinha"); 
    tr_fim.parentNode.insertBefore(tr, tr_fim);
}


function NomeValido(pNome){
    if (pNome == "") {
        return false;
    }
    return true;
}
function emailValido(pEmail) {
    let reg = /\S+@\S+\.\S+/;
    return reg.test(pEmail);
}
function CPFValido(pCpf) {

}
function ValidarDigCPF(pCPF) {
    let Soma = 0;
    let Resto = 0;
    for (let i=1; i<=9; i++) {
        Soma = Soma + parseInt(pCPF.substring(i-1, i)) * (11 - i);
    }
    Resto = (Soma * 10) % 11;
    if (Resto == 10) Resto = 0;
    if (Resto != parseInt(pCPF.substring(9, 10))) return false;

    Soma = 0;
    for (let i=1; i<=10; i++) {
        Soma = Soma + parseInt(pCPF.substring(i-1, i)) * (12 - i);
    }
    Resto = (Soma * 10) % 11;
    if (Resto == 10) Resto = 0;
    if (Resto != parseInt(pCPF.substring(10, 11))) return false;
    return true;
}
function ValidarForm() {
    let objForm = document.getElementById("cadOnibus");
    console.log("objForm: " + objForm.innerHTML);
  
    let strModelo = document.getElementById("marca").value;
    let strModelo = document.getElementById("modelo").value;
    let strPlaca = document.getElementById("placa").value;
    console.log("nome:" + strNome + "  email: " + strEmail + "  cpf:" + strCpf + "  Mat: " + strMat);
    msgErro = "";
    if (!NomeValido(strNome)) {
        msgErro = "não pode ser vazio. \n";
    }
    if (!emailValido(strEmail)) {
        msgErro =+ "Incorreto. \n";
    }
    if (!ValidarDigCPF(strCpf)) {
        msgErro =+ "CPF inválido. \n";
    }
    if (msgErro == "") {
        EnviarForm(strNome, strEmail, strCpf, strMat);
    }
}
function EnviarForm(pNome, pEmail, pCpf, pMat) {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log("Chegou resposta: " + this.responseText)
            document.getElementById("msg").innerHTML = this.responseText;
        }
    }
    xmlHttp.open("GET", "http://localhost/3dawnoite2/ex09_IncluirAluno.php?nome=" + pNome +
    "&email=" + pEmail + "&cpf=" + pCpf + "&matricula=" + pMat);
    xmlHttp.send();
    console.log("Enviei requisição");
}