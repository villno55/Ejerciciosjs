const API_URL = "https://back-sispa.onrender.com/usuarios";


const txtNombre = document.getElementById('nombre');
const txtApellido = document.getElementById('apellido');
const txtDocumento = document.getElementById('documento');
const txtCorreo = document.getElementById('correo');
const tabla = document.getElementById('tabla');

async function crearUsuario() {
  const data = {
    nombre: txtNombre.value,
    apellido: txtApellido.value,
    documento: txtDocumento.value,
    crreo_institu: txtCorreo.value
  };

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  alert("Usuario creado");
  listarUsuarios();
}

async function listarUsuarios() {
  const res = await fetch(API_URL);
  const usuarios = await res.json();

  tabla.innerHTML = "";
  usuarios.forEach(u => {
    tabla.innerHTML += `
      <tr>
        <td>${u._id}</td>
        <td>${u.nombre}</td>
        <td>${u.apellido}</td>
        <td>${u.documento}</td>
        <td>${u.crreo_institu}</td>
      </tr>
    `;
  });
}

async function actualizarUsuario() {
  const id = document.getElementById("id").value;

  const data = {
    nombre: txtNombre.value,
    apellido: txtApellido.value,
    documento: txtDocumento.value,
    crreo_institu: txtCorreo.value
  };

  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  alert("Usuario actualizado");
  listarUsuarios();
}

async function eliminarUsuario() {
  const id = document.getElementById("deleteId").value;

  if (!id) return alert("Por favor ingrese un ID");

  await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });

  alert("Usuario eliminado");
  listarUsuarios();
}

