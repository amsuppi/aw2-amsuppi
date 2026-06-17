const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const estado = document.getElementById("estado");
const detalle = document.getElementById("detalle");

async function cargarLibro() {
  if (!id) {
    estado.textContent = "Falta el parámetro id en la URL.";
    return;
  }

  try {
    const respuesta = await fetch(`/api/v1/libros/${id}`);

    if (respuesta.status === 401) {
      window.location.href = "/login";
      return;
    }

    if (respuesta.status === 404) {
      estado.textContent = "Libro no encontrado.";
      return;
    }

    if (!respuesta.ok) {
      throw new Error("Error al cargar el libro");
    }

    const libro = await respuesta.json();
    estado.hidden = true;
    detalle.hidden = false;
    document.getElementById("titulo").textContent = libro.titulo;
    document.getElementById("autor").textContent = libro.autor;
    document.getElementById("paginas").textContent = libro.paginas;
    document.getElementById("precio").textContent = `$${libro.precio}`;
  } catch (error) {
    estado.textContent = "Error al cargar el libro.";
    console.error(error);
  }
}

cargarLibro();
