function estilo(statusCell, color) {
    statusCell.style.width = '1.5rem';
    statusCell.style.height = '1.5rem';
    statusCell.style.backgroundColor = color;
    statusCell.style.borderRadius = '50%';
    statusCell.style.margin = '5% auto auto auto';
    statusCell.style.padding = '0 auto';
    statusCell.style.display = 'flex';
    statusCell.style.justifyContent = 'center';
    statusCell.innerText = ''
}
//Altera o cor do status na tabela, percorrendo item por item
const tabela = document.getElementById("table");
let tbodyLinhas = tabela.tBodies[0].rows.length;
for (let i = 0; i < tbodyLinhas; i++) {
    let statusCell = tabela.tBodies[0].rows[i].querySelector('.status');
    if (statusCell && statusCell.innerText.trim() == '0') {
        estilo(statusCell, 'red')
    }
    if (statusCell && statusCell.innerText.trim() == '1') {
        estilo(statusCell, 'green')
    }
    //Mecanismo de pesquisa na tabela.
    document.getElementById('pesquisa').addEventListener('keyup', function () {
        const filter = this.value.toLowerCase();
        const rows = document.querySelectorAll('#table tbody tr');
        rows.forEach(row => {
            const cell = row.cells[1]; //filtra por categoria
            const cellText = cell ? cell.textContent.toLowerCase() : '';
            row.style.display = cellText.includes(filter) ? '' : 'none';
        });
    });
}