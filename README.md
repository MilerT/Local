# Mi Local de Eventos - Frontend Premium

Proyecto frontend moderno y escalable para un local de eventos (bodas, quinceañeras, eventos corporativos, etc.), desarrollado con **Next.js 14**, **TypeScript** y **Tailwind CSS**. 

## 🚀 Tecnologías Usadas

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Componentes**: React (shadcn/ui style components)
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React
- **Utilidades**: clsx, tailwind-merge

## 📁 Arquitectura del Proyecto

El proyecto sigue una arquitectura limpia basada en las mejores prácticas de Next.js App Router:

```text
├── app/                  # Rutas de la aplicación (Next.js App Router)
│   ├── (pages)/          # Páginas agrupadas (about, services, gallery, etc.)
│   ├── globals.css       # Estilos globales y variables CSS de theming
│   ├── layout.tsx        # RootLayout con Navbar y Footer
│   └── page.tsx          # Página principal (Home)
├── components/           # Componentes reutilizables
│   ├── layout/           # Navbar, Footer
│   └── ui/               # Componentes atómicos (Button, Card, Input)
├── config/               # Configuración centralizada
│   └── branding.ts       # Textos, redes, información de contacto
├── constants/            # Datos estáticos y mocks
│   ├── services.ts       # Mock de servicios
│   ├── gallery.ts        # Mock de fotos de galería
│   └── ...               # Otros mocks
├── lib/                  # Utilidades
│   └── utils.ts          # Funciones para mergear clases de Tailwind
└── public/               # Imágenes estáticas y logos
```

### Decisiones Arquitectónicas
- **Configuración Centralizada**: Toda la información que puede variar (nombre del negocio, teléfono, redes, colores de marca) está controlada en `config/branding.ts` y en `globals.css` (variables CSS para Tailwind). Esto permite "marcar-blanca" (white-label) el proyecto rápidamente.
- **Componentes UI (shadcn style)**: Usamos el patrón de componentes atómicos exportados (Button, Input, Card) que envuelven elementos nativos con estilos de Tailwind, manteniéndolos 100% personalizables y accesibles.
- **Mocks Dinámicos**: Al no tener backend, los datos se obtienen de `/constants` lo que simula llamadas a API de manera sincrónica. Si se agrega un CMS (Sanity, Strapi), solo debes sustituir el mapeo en las páginas.
- **SEO Ready**: `Metadata` API de Next.js está configurada en `layout.tsx` y lista para escalarse por página.

## ⚙️ Cómo ejecutar localmente

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Ejecutar servidor de desarrollo**:
   ```bash
   npm run dev
   ```
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🎨 Cómo personalizar branding

1. **Colores principales**: Modifica las variables CSS en `app/globals.css`. Por defecto usa variables HSL en `:root` y `.dark`.
2. **Textos y Contacto**: Ve a `config/branding.ts` y modifica `name`, `tagline`, urls de redes, etc.
3. **Mocks/Data**: Ve a `constants/` y modifica la información de precios, paquetes o galería.

## 🚀 Cómo desplegar en producción (Vercel)

El proyecto está 100% optimizado para [Vercel](https://vercel.com).
1. Sube tu código a un repositorio de GitHub/GitLab.
2. Inicia sesión en Vercel y selecciona "Add New Project".
3. Importa el repositorio. Next.js será detectado automáticamente.
4. Click en **Deploy**. ¡Listo!

### Compilación local
```bash
npm run build
npm start
```

## 📈 Cómo escalar el proyecto
- **Backend/API**: Crea endpoints en `app/api/` usando Next.js Route Handlers.
- **Autenticación**: Integra NextAuth.js para áreas de administración.
- **Base de Datos**: Usa Prisma ORM + PostgreSQL para guardar reservaciones del formulario de contacto.
"# Local" 
