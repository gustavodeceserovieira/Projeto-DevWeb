document.getElementById("formulario").addEventListener("submit", function (event) {
    const dataAtual = document.getElementById("data").value
    const dataCategoria = new Date().toISOString().split("T")[0];
    const categoria = document.getElementById("selectAluno").value.trim().toUpperCase();
    const d1 = new Date(dataAtual)
    const d2 = new Date(dataCategoria)
    let idade = d2.getFullYear() - d1.getFullYear();
    const mes = d2.getMonth() - d1.getMonth();
    if (mes < 0 || (mes === 0 && d2.getDate() < d1.getDate())) {
        idade--;
    }
    let mensagem = "";
    if (categoria === "SUB 7" && !(idade >= 6 && idade <= 7)) mensagem="Data inválida para a categoria SUB 7"
    if (categoria === "SUB 9" && !(idade >= 8 && idade < 10))mensagem="Data inválida para a categoria SUB 9"
    if (categoria === "SUB 11" && !(idade >= 10 && idade <= 11)) mensagem="Data inválida para a categoria SUB 11"
    if (categoria === "SUB 13" && !(idade >= 12 && idade <= 13)) mensagem="Data inválida para a categoria SUB 13"
    if(mensagem){
        event.preventDefault()
        alert(mensagem)
    }
});