//Excluir se não for usar.
//Mecanismo de pesquisa na tabela.
document.getElementById('pesquisa').addEventListener('keyup', function () {
    const filter = this.value.toLowerCase();
    const rows = document.querySelectorAll('#table tbody tr');
    rows.forEach(row => {
        const cell = row.cells[0]; //filtra por valor pago
        const cellText = cell ? cell.textContent.toLowerCase() : '';
        row.style.display = cellText.includes(filter) ? '' : 'none';
    });
});