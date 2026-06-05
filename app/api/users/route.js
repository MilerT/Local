// =============================================================
// API CRUD de Usuarios - Next.js App Router
// =============================================================
// Base URL: http://localhost:3000/api/users
//
// Endpoints desde Postman:
//   GET    http://localhost:3000/api/users          → Listar todos
//   GET    http://localhost:3000/api/users?id=1     → Obtener uno por id
//   POST   http://localhost:3000/api/users          → Crear usuario
//   PUT    http://localhost:3000/api/users          → Actualizar usuario
//   DELETE http://localhost:3000/api/users?id=1     → Eliminar usuario
// =============================================================

import { NextResponse } from "next/server";

// ── Base de datos en memoria (se reinicia al reiniciar el servidor) ──
let users = [
  { id: 1, name: "Miler Tinta", email: "miler@example.com", age: 25 },
  { id: 2, name: "Ana García", email: "ana@example.com", age: 30 },
  { id: 3, name: "Carlos López", email: "carlos@example.com", age: 28 },
];

let nextId = 4;

// ── Helpers ──
function jsonResponse(data, status = 200) {
  return NextResponse.json(data, { status });
}

function errorResponse(message, status = 400) {
  return NextResponse.json({ success: false, error: message }, { status });
}

// ─────────────────────────────────────────────────────────────
// GET → Listar todos los usuarios o uno por id (?id=1)
// ─────────────────────────────────────────────────────────────
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  // Si se envía ?id=..., devolver solo ese usuario
  if (id) {
    const user = users.find((u) => u.id === Number(id));
    if (!user) {
      return errorResponse(`Usuario con id ${id} no encontrado`, 404);
    }
    return jsonResponse({ success: true, data: user });
  }

  // Sin id → listar todos
  return jsonResponse({
    success: true,
    count: users.length,
    data: users,
  });
}

// ─────────────────────────────────────────────────────────────
// POST → Agregar un nuevo usuario
// Body JSON: { "name": "...", "email": "...", "age": 25 }
// ─────────────────────────────────────────────────────────────
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, age } = body;

    // Validaciones
    if (!name || !email) {
      return errorResponse("Los campos 'name' y 'email' son obligatorios");
    }

    // Verificar email duplicado
    const emailExists = users.some(
      (u) => u.email.toLowerCase() === email.toLowerCase()
    );
    if (emailExists) {
      return errorResponse(`Ya existe un usuario con el email '${email}'`, 409);
    }

    const newUser = {
      id: nextId++,
      name,
      email,
      age: age ?? null,
    };

    users.push(newUser);

    return jsonResponse(
      {
        success: true,
        message: "Usuario creado exitosamente",
        data: newUser,
      },
      201
    );
  } catch {
    return errorResponse("Body JSON inválido", 400);
  }
}

// ─────────────────────────────────────────────────────────────
// PUT → Actualizar un usuario existente
// Body JSON: { "id": 1, "name": "...", "email": "...", "age": 26 }
// ─────────────────────────────────────────────────────────────
export async function PUT(request) {
  try {
    const body = await request.json();
    const { id, name, email, age } = body;

    if (!id) {
      return errorResponse("El campo 'id' es obligatorio");
    }

    const index = users.findIndex((u) => u.id === Number(id));
    if (index === -1) {
      return errorResponse(`Usuario con id ${id} no encontrado`, 404);
    }

    // Verificar email duplicado (excluyendo el usuario actual)
    if (email) {
      const emailExists = users.some(
        (u) => u.id !== Number(id) && u.email.toLowerCase() === email.toLowerCase()
      );
      if (emailExists) {
        return errorResponse(`Ya existe otro usuario con el email '${email}'`, 409);
      }
    }

    // Actualizar solo los campos enviados
    users[index] = {
      ...users[index],
      ...(name !== undefined && { name }),
      ...(email !== undefined && { email }),
      ...(age !== undefined && { age }),
    };

    return jsonResponse({
      success: true,
      message: "Usuario actualizado exitosamente",
      data: users[index],
    });
  } catch {
    return errorResponse("Body JSON inválido", 400);
  }
}

// ─────────────────────────────────────────────────────────────
// DELETE → Eliminar un usuario por su id (?id=1)
// ─────────────────────────────────────────────────────────────
export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return errorResponse("El query param 'id' es obligatorio. Ej: ?id=1");
  }

  const index = users.findIndex((u) => u.id === Number(id));
  if (index === -1) {
    return errorResponse(`Usuario con id ${id} no encontrado`, 404);
  }

  const deletedUser = users.splice(index, 1)[0];

  return jsonResponse({
    success: true,
    message: "Usuario eliminado exitosamente",
    data: deletedUser,
  });
}
