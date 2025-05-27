export async function getUsuarios() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!res.ok) throw new Error("Error al obtener usuarios");
    return await res.json();
}

export async function getPostsPorUsuario(userId) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    if (!res.ok) throw new Error("Error al obtener posts");
    return await res.json();
}