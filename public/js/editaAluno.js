document.addEventListener("DOMContentLoaded", function() {
    let checkbox = document.getElementById("deletar");
    let container = document.getElementById("atualiza");
    if (checkbox) {
        checkbox.addEventListener("change", function() {
            container.style.display = this.checked ? "none" : "block";
        });
    }
    document.getElementById("form").addEventListener("submit", function (event) {
        if (checkbox && checkbox.checked) {
            return;
        }
        valida_data(event)
    })
});


function formatDateToJS(data){
    const [dia, mes, ano] = data.split("/");
    return `${ano}-${mes}-${dia}`;
}

function atualiza_campos() {
    const select = document.getElementById("selectAluno");
    let selectedOption = select.options[select.selectedIndex];
    if (selectedOption) {
        document.getElementById("nome_atualizado").value = selectedOption.getAttribute("data-nome") || "";
        let valor = selectedOption.getAttribute("data-data") || "" 
        document.getElementById("data_nascimento").value = formatDateToJS(valor)
    }
    if(select.value == ''){
        let form = document.getElementById("form")
        const msg = form.innerHTML = "Não há alunos a serem atualizados!"
        form.style.display = select.value == '' ? msg : "block"
    } 
}
document.getElementById("selectAluno").addEventListener("change", atualiza_campos);
document.addEventListener("DOMContentLoaded", atualiza_campos);


//Valida a data com a categoria
function valida_data(event){
    const dataAtual = document.getElementById("data_nascimento").value
    const dataCategoria = new Date().toISOString().split("T")[0];
    const categoria = document.getElementById("selectCategoria").value.trim().toUpperCase();
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
}