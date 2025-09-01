document.addEventListener("DOMContentLoaded", function() {
    let checkbox = document.getElementById("checkbox");
    let select = document.getElementById("select")
    if (checkbox) {
        checkbox.addEventListener("change", function() {
            let container = document.getElementById("pagamento");
            container.style.display = this.checked ? "block" : "none";
        });
    }
    if(select.value == ''){
        let form = document.getElementById("form")
        const msg = form.innerHTML = "Não há alunos devendo!"
        form.style.display = select.value == '' ? msg : "block"
    }  
});