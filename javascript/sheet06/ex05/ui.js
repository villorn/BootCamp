export function mostrarUsuarios(lista) {
    const contenedor = document.createElement('ul');
    lista.forEach(usuario => {
        const li = document.createElement('li');
        li.textContent = usuario.name;
        contenedor.appendChild(li);
    });
    document.body.appendChild(contenedor);
}