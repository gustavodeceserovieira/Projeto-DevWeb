function atualiza_campos() {
    const select = document.getElementById("selectAluno");
    let selectedOption = select.options[select.selectedIndex];
    if (selectedOption) {
        document.getElementById("nome_atualizado").value = selectedOption.getAttribute("nome") || "";
        document.getElementById("telefone").value = selectedOption.getAttribute("telefone") || "";
    }
    if(select.value == ''){
        let form = document.getElementById("form")
        const msg = form.innerHTML = "Não há alunos cadastrados!"
        form.style.display = select.value == '' ? msg : "block"
    } 
}
document.getElementById("selectAluno").addEventListener("change", atualiza_campos);
document.addEventListener("DOMContentLoaded", atualiza_campos);