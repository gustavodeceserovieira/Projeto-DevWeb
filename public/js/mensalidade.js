document.addEventListener("DOMContentLoaded", function() {
    let checkbox = document.getElementById("checkbox");
    if (checkbox) {
        checkbox.addEventListener("change", function() {
            let container = document.getElementById("pagamento");
            container.style.display = this.checked ? "block" : "none";
        });
    }
});