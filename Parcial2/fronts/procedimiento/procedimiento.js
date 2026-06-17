const boton = document.getElementById("btn-ejecutar");
const resultado = document.getElementById("resultado");

async function ejecutarProcedimiento() {
  resultado.hidden = false;
  resultado.textContent = "Ejecutando...";
  resultado.className = "resultado";

  try {
    const respuesta = await fetch("/procedimientos/resumen-inventario");

    if (respuesta.status === 401) {
      window.location.href = "/login";
      return;
    }

    const data = await respuesta.json();

    if (!respuesta.ok) {
      throw new Error(data.mensaje || "Error al ejecutar el procedimiento");
    }

    if (data.exito) {
      resultado.className = "resultado exito";
      resultado.innerHTML = `
        <strong>${data.mensaje}</strong>
        <ul>
          <li>Total de libros: ${data.datos.totalLibros}</li>
          <li>Promedio de precio: $${data.datos.promedioPrecio}</li>
        </ul>
      `;
    } else {
      throw new Error(data.mensaje);
    }
  } catch (error) {
    resultado.className = "resultado error";
    resultado.textContent =
      error.message || "Error al ejecutar el procedimiento.";
    console.error(error);
  }
}

boton.addEventListener("click", ejecutarProcedimiento);
