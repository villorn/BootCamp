export async function getUsuarios() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!res.ok) throw new Error("Error al obtener usuarios");
    return await res.json();
}