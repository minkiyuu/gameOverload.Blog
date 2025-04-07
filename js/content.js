const posts = [
    {
        title: "Como foi Acompanhar TODOS os Patches de Cyberpunk 2077!",
        content: "Cyberpunk 2077 realmente teve sua redenção?",
        category: "experiences",
        link: "/pages/blogs/cyberpunk.html"
    }
];

// Renderizar posts recentes na Home
function renderPosts() {
    const container = document.querySelector(".blogs-grid");
    if (!container) return;

    let html = "";
    posts.forEach(post => {
        html += `
            <article class="blogs">
                <h3>${post.title}</h3>
                <p>${post.content}</p>
                <a href="${post.link}">Leia mais</a>
            </article>
        `;
    });

    container.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", renderPosts);
