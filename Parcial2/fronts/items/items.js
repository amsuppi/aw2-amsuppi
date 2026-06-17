const lista = document.getElementById("lista-libros");
const estado = document.getElementById("estado");

async function cargarLibros() {
  try {
    const respuesta = await fetch("/api/v1/libros");

    if (respuesta.status === 401) {
      window.location.href = "/login";
      return;
    }

    if (!respuesta.ok) {
      throw new Error("Error al cargar los libros");
    }

    const libros = await respuesta.json();
    estado.hidden = true;

    if (libros.length === 0) {
      estado.textContent = "No hay libros en el catálogo.";
      estado.hidden = false;
      return;
    }

    libros.forEach((libro) => {
      const item = document.createElement("li");
      const enlace = document.createElement("a");
      enlace.href = `/item?id=${libro.id}`;
      enlace.textContent = `${libro.titulo} — ${libro.autor}`;
      item.appendChild(enlace);
      lista.appendChild(item);
    });
  } catch (error) {
    estado.textContent = "Error al cargar los libros.";
    console.error(error);
  }
}

cargarLibros();
