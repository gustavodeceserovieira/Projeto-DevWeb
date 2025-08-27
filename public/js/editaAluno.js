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
function atualiza_campos() {
    const select = document.getElementById("selectAluno");
    let selectedOption = select.options[select.selectedIndex];
    if (selectedOption) {
        document.getElementById("rg_atualizado").value = selectedOption.getAttribute("data-rg") || "";
        document.getElementById("nome_atualizado").value = selectedOption.getAttribute("data-nome") || "";
        document.getElementById("data_nascimento").value = selectedOption.getAttribute("data-data") || "";
    }
}
document.getElementById("selectAluno").addEventListener("change", atualiza_campos);
document.addEventListener("DOMContentLoaded", atualiza_campos);
