document.addEventListener("DOMContentLoaded", function () {
    const path = window.location.pathname;

    // Mapeia a URL 
    const categoryMap = {
        "/pages/categories/reviews.html": "reviews",
        "/pages/categories/experiences.html": "experiences",
        "/pages/categories/lists.html": "lists"
    };

    const category = categoryMap[path];

    if (category) {
        document.body.classList.add("category-page", category);
        console.log("Classe adicionada:", document.body.classList);
        renderCategoryPosts(category);
    }
});

function renderCategoryPosts(category) {
    const container = document.querySelector(".blogs-grid");

    if (!container) {
        console.error("Erro: Não foi possível encontrar o elemento .blogs-grid!");
        return;
    }

    container.innerHTML = ""; 

    // Filtra os posts pela categoria correta
    const filteredPosts = posts.filter(post => post.category === category);

    if (filteredPosts.length === 0) {
        console.log("Nenhum post encontrado para esta categoria!");

    
        container.innerHTML = `
            <div class="no-content">
                <img src="/images/post.svg" alt="Nenhum post encontrado">
                <p>Ainda não temos posts sobre esse tema.</p>
            </div>
        `;
    
        container.classList.add("sem-posts");
        return;
    }

    

    filteredPosts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("category-post"); // Nova classe para diferenciar dos posts da home
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            <a href="${post.link}">Leia mais</a>
        `;
        container.appendChild(postElement);
    });

    console.log(`Posts renderizados para a categoria: ${category}`);
}
