# Dragon Ball Explorer - Prueba Técnica

Aplicación SPA para explorar personajes y planetas del universo Dragon Ball, con sistema de reseñas integrado.

## Demo
[Demo de la prueba técnica](https://candid-hamster-de64c4.netlify.app/)
La aplicación permite visualizar personajes, planetas, buscar y escribir reseñas para cada personaje.

## Stack Tecnológico

| Tecnología | Uso |
|------------|-----|
| React 19 | Framework UI |
| Vite | Bundler y dev server |
| React Query (TanStack Query) | Fetching, cacheo y estado del servidor |
| React Router | Navegación y rutas |
| Axios | Cliente HTTP |
| Tailwind CSS 4 | Estilos y diseño responsivo |
| Zod | Validación de esquemas |
| React Hook Form | Manejo de formularios |
| react-loading-skeleton | Skeletons de carga |
| sileo | Notificaciones/toast |

## APIs Utilizadas

### Dragon Ball API
- **URL**: `https://dragonball-api.com/api`
- **Uso**: Obtener personajes, planetas y detalles
- **Endpoints**:
  - `GET /characters` - Lista de personajes
  - `GET /characters/:id` - Detalle de personaje
  - `GET /planets` - Lista de planetas

### JSONPlaceholder API
- **URL**: `https://jsonplaceholder.typicode.com`
- **Uso**: Sistema de reseñas (CRUD)
- **Endpoints**:
  - `GET /posts?userId={characterId}` - Obtener reseñas de un personaje
  - `POST /posts` - Crear reseña
  - `PUT /posts/:id` - Actualizar reseña
  - `DELETE /posts/:id` - Eliminar reseña

## Estructura del Proyecto

```
src/
├── api/                        # Clientes HTTP
│   ├── db.api.js               # Cliente Dragon Ball API
│   └── jsonplaceholder.api.js  # Cliente JSONPlaceholder + localStorage
│
├── actions/                    # Funciones de fetching
│   ├── get-characters.action.js
│   ├── get-character.action.js
│   ├── get-planets.action.js
│   └── search-characters.action.js
│
├── features/                   # Módulos por feature
│   └── reviews/                # Feature de reseñas
│       ├── components/
│       │   ├── ReviewSection.jsx
│       │   ├── ReviewForm.jsx
│       │   ├── ReviewCard.jsx
│       │   ├── ReviewList.jsx
│       │   └── StarRating.jsx
│       └── hooks/
│           ├── useReviews.js
│           ├── useCreateReview.js
│           ├── useUpdateReview.js
│           └── useDeleteReview.js
│
├── hooks/                      # Hooks globales
│   └── useToast.js
│
├── validations/                # Esquemas Zod
│   ├── userSchema.js
│   └── reviewSchema.js
│
├── components/                 # Componentes reutilizables
│   ├── CharacterCard.jsx
│   ├── CharacterGrid.jsx
│   ├── CharacterCardSkeleton.jsx
│   ├── CharacterPageSkeleton.jsx
│   ├── PlanetCard.jsx
│   ├── PlanetGrid.jsx
│   ├── Pagination.jsx
│   ├── Nav.jsx
│   └── CheckSymbol.jsx
│
├── pages/                      # Páginas/Rutas
│   ├── HomePage.jsx
│   ├── CharacterPage.jsx
│   ├── SearchPage.jsx
│   ├── PlanetPage.jsx
│   └── SuggestPage.jsx
│
├── layout/                     # Layouts
│   └── DBLayout.jsx
│
├── utils/                      # Utilidades
│   └── raceStyles.js
│
├── router/                     # Configuración de rutas
│   └── app.routes.jsx
│
└── assets/                     # Recursos estáticos
    ├── fonts/
    └── svg/
```

## Funcionalidades por Nivel

### Nivel 1 - Básico
- [x] API consumida (Dragon Ball API)
- [x] React Query implementado
- [x] Tailwind CSS responsivo
- [x] Skeletons para carga de datos
- [x] Búsqueda/filtrado de personajes
- [x] Ramas en GitHub

### Nivel 2 - Intermedio
- [x] Vista de detalle de personaje
- [x] React Router con rutas anidadas
- [x] Paginación implementada
- [x] Formulario con validación Zod

### Nivel 3 - Avanzado
- [x] CRUD completo (crear, listar, actualizar, eliminar reseñas)
- [x] Axios para acciones HTTP
- [x] Validación de formularios con Zod
- [x] Manejo de errores con notificaciones (sileo)
- [x] Integración con segunda API (JSONPlaceholder)
- [x] Hooks personalizados
- [x] UI con componentes reutilizables
- [x] Documentación en README
- [ ] Animaciones (opcional)
- [ ] Deploy (opcional)

## Instalación

```bash
# Clonar repositorio
git clone <url-del-repo>

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env

# Ejecutar en desarrollo
npm run dev
```

## Variables de Entorno

```env
VITE_API_URL=https://dragonball-api.com/api
```

## Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run lint     # Linter ESLint
npm run preview  # Preview de build
```

## Sistema de Reseñas

Las reseñas se guardan en localStorage para simular persistencia, ya que JSONPlaceholder es una API fake que no persiste datos reales.

### Flujo:
1. El usuario navega a un personaje
2. En la página de detalle, ve la sección de reseñas
3. Puede crear, editar o eliminar reseñas
4. Las reseñas se asocian al `characterId` del personaje

### Mapeo de datos:
| JSONPlaceholder | Reseña |
|-----------------|--------|
| `id` | ID de la reseña |
| `title` | Título |
| `body` | Contenido |
| `userId` | characterId del personaje |

## Ramas del Repositorio

- `master` - Rama principal
- `nivel-1` - Código del nivel básico
- `nivel-2` - Código del nivel intermedio
- `nivel-3` - Código del nivel avanzado (actual)

## Autor

Prueba técnica - Desarrollo Frontend con React
