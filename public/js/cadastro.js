/*validação do input do telefone*/
document.getElementById('telefone').addEventListener('input', function (e) {
    let num = e.target.value.replace(/\D/g, '');
    if (num.length > 11) num = num.slice(0, 11);
    if (num.length > 10) {
        e.target.value = `(${num.slice(0, 2)}) ${num.slice(2, 7)}-${num.slice(7)}`;
    } else if (num.length > 6) {
        e.target.value = `(${num.slice(0, 2)}) ${num.slice(2, 6)}-${num.slice(6)}`;
    } else if (num.length > 2) {
        e.target.value = `(${num.slice(0, 2)}) ${num.slice(2)}`;
    } else if (num.length > 0) {
        e.target.value = `(${num}`;
    }
});