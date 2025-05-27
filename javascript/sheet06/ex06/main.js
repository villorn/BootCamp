import { getUsuarios, getPostsPorUsuario } from './api.js';
import { mostrarUsuarios, mostrarPosts } from './ui.js';

document.addEventListener('DOMContentLoaded', async () => {
    const usuarios = await getUsuarios();
    mostrarUsuarios(usuarios, async (usuario) => {
        const posts = await getPostsPorUsuario(usuario.id);
        mostrarPosts(posts);
    });
});