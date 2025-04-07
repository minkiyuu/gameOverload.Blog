
document.addEventListener("DOMContentLoaded", function () {
    renderPosts(); // Sempre renderiza os posts recentes na Home

    // Adiciona evento de clique aos botões de categoria
    document.querySelectorAll(".menu-item").forEach(item => {
        item.addEventListener("click", function (event) {
            const category = this.getAttribute("data-category");
            if (!category) return; // Se não houver categoria, apenas retorna

            // Redireciona para a página correta da categoria
            window.location.href = `/pages/categories/${category}.html`;
        });
    });
});

