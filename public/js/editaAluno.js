document.addEventListener("DOMContentLoaded", function() {
    let checkbox = document.getElementById("deletar");
    if (checkbox) {
        console.log(checkbox)
        checkbox.addEventListener("change", function() {
            let container = document.getElementById("atualiza");
            container.style.display = this.checked ? "none" : "block";
        });
    }
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
        console.log(valor)
        document.getElementById("data_nascimento").value = formatDateToJS(valor)
    }
}
document.getElementById("selectAluno").addEventListener("change", atualiza_campos);
document.addEventListener("DOMContentLoaded", atualiza_campos);
