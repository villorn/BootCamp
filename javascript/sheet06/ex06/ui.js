export function mostrarUsuarios(lista, onClickUsuario) {
    let ul = document.getElementById('usuarios-list');
    if (!ul) {
        ul = document.createElement('ul');
        ul.id = 'usuarios-list';
        document.body.appendChild(ul);
    }
    ul.innerHTML = '';
    lista.forEach(usuario => {
        const li = document.createElement('li');
        li.textContent = usuario.name;
        li.style.cursor = 'pointer';
        li.onclick = () => onClickUsuario(usuario);
        ul.appendChild(li);
    });
}

export function mostrarPosts(posts) {
    let contenedor = document.getElementById('posts-list');
    if (!contenedor) {
        contenedor = document.createElement('ul');
        contenedor.id = 'posts-list';
        document.body.appendChild(contenedor);
    }
    contenedor.innerHTML = '';
    posts.forEach(post => {
        const li = document.createElement('li');
        li.textContent = post.title;
        contenedor.appendChild(li);
    });
}