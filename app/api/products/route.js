// =============================================================
// API de Productos con Filtros - Next.js App Router
// =============================================================
// Base URL: http://localhost:3000/api/products
//
// Endpoints desde Postman:
//   GET http://localhost:3000/api/products                              → Listar todos
//   GET http://localhost:3000/api/products?minPrice=20&maxPrice=100     → Filtrar por rango de precio
//   GET http://localhost:3000/api/products?name=Teclado                 → Filtrar por nombre
//   GET http://localhost:3000/api/products?name=Mouse&minPrice=10&maxPrice=50 → Combinar filtros
// =============================================================

import { NextResponse } from "next/server";

// ── Base de datos en memoria ──
const products = [
  { id: 1, name: "Teclado Mecánico RGB",      price: 75.99,  category: "Periféricos" },
  { id: 2, name: "Mouse Inalámbrico",         price: 29.99,  category: "Periféricos" },
  { id: 3, name: "Monitor 27\" 4K",           price: 349.99, category: "Monitores" },
  { id: 4, name: "Teclado Membrana Básico",    price: 15.50,  category: "Periféricos" },
  { id: 5, name: "Auriculares Bluetooth",      price: 59.99,  category: "Audio" },
  { id: 6, name: "Webcam Full HD",            price: 45.00,  category: "Accesorios" },
  { id: 7, name: "Mouse Gamer Pro",           price: 89.99,  category: "Periféricos" },
  { id: 8, name: "Laptop Stand Aluminio",     price: 35.00,  category: "Accesorios" },
  { id: 9, name: "SSD 1TB NVMe",              price: 99.99,  category: "Almacenamiento" },
  { id: 10, name: "Hub USB-C 7 en 1",         price: 42.50,  category: "Accesorios" },
];

// ── Helpers ──
function jsonResponse(data, status = 200) {
  return NextResponse.json(data, { status });
}

function errorResponse(message, status = 400) {
  return NextResponse.json({ success: false, error: message }, { status });
}

// ─────────────────────────────────────────────────────────────
// GET → Listar productos con filtros opcionales
//
// Query params (todos opcionales, se combinan entre sí):
//   ?name=Teclado         → búsqueda parcial por nombre (case-insensitive)
//   ?minPrice=20          → precio mínimo
//   ?maxPrice=100         → precio máximo
//   ?category=Periféricos → filtrar por categoría exacta
// ─────────────────────────────────────────────────────────────
export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const name     = searchParams.get("name");
  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");
  const category = searchParams.get("category");

  // Validar que los precios sean números válidos
  if (minPrice && isNaN(Number(minPrice))) {
    return errorResponse("'minPrice' debe ser un número válido. Ej: ?minPrice=20");
  }
  if (maxPrice && isNaN(Number(maxPrice))) {
    return errorResponse("'maxPrice' debe ser un número válido. Ej: ?maxPrice=100");
  }
  if (minPrice && maxPrice && Number(minPrice) > Number(maxPrice)) {
    return errorResponse("'minPrice' no puede ser mayor que 'maxPrice'");
  }

  // Aplicar filtros
  let results = [...products];

  // Filtro por nombre (búsqueda parcial, case-insensitive)
  if (name) {
    results = results.filter((p) =>
      p.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  // Filtro por precio mínimo
  if (minPrice) {
    results = results.filter((p) => p.price >= Number(minPrice));
  }

  // Filtro por precio máximo
  if (maxPrice) {
    results = results.filter((p) => p.price <= Number(maxPrice));
  }

  // Filtro por categoría (exacta, case-insensitive)
  if (category) {
    results = results.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );
  }

  // Construir resumen de filtros aplicados
  const appliedFilters = {};
  if (name) appliedFilters.name = name;
  if (minPrice) appliedFilters.minPrice = Number(minPrice);
  if (maxPrice) appliedFilters.maxPrice = Number(maxPrice);
  if (category) appliedFilters.category = category;

  return jsonResponse({
    success: true,
    count: results.length,
    filters: Object.keys(appliedFilters).length > 0 ? appliedFilters : "ninguno",
    data: results,
  });
}
