document.getElementById('categoria-select').addEventListener('change', function() {
    const categoriaId = this.value;
    const alunosContainer = document.getElementById('alunos-container');
    alunosContainer.innerHTML = '';
    document.getElementById('submit-btn').style.display = 'block';

    if (categoriaId) {
      fetch(`/get_alunos/${categoriaId}`)
        .then(response => response.json())
        .then(alunos => {
          if (alunos.length) {
            alunos.forEach(aluno => {
              alunosContainer.innerHTML += `
                <div>
                  <label>
                    <input type="checkbox" name="presenca[${aluno.rg}]" value="on" checked>
                    ${aluno.rg} - ${aluno.nome}
                  </label>
                </div>`;
            });
            document.getElementById('submit-btn').style.display = 'block';
          } else {
            alunosContainer.innerHTML = '<p>Nenhum aluno encontrado.</p>';
          }
        });
    }
});