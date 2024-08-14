// scripts.js

// JavaScript pode ser usado para adicionar interatividade ao portfólio, se necessário.
// Aqui está um exemplo simples de como adicionar um alerta ao clicar em um projeto.

document.addEventListener('DOMContentLoaded', function() {
    const projetos = document.querySelectorAll('.projeto a');
    projetos.forEach(projeto => {
        projeto.addEventListener('click', function(event) {
            alert('Você está saindo para ver ' + this.textContent);
        });
    });
});
