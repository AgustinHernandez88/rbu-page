```markdown
## Descripción

Este proyecto es una aplicación web diseñada para la gestión de tareas, con un formulario de inicio de sesión desarrollado en React y una API REST creada con Node.js y Express.

## Estructura del Proyecto

RBU/
├── backend/                
│   ├── controllers/         # Controladores que manejan la lógica de negocio
│   ├── routes/              # Definición de las rutas de la API REST
│   ├── server.js            # Archivo principal del servidor Express
│   ├── data/   
│   └── package.json         # Configuración de dependencias y scripts para el backend
├── login-task-manager/     
│   ├── public/              # Archivos estáticos (CSS, imágenes)
│   ├── src/
│   │   ├── assets/          # Imagenes para el Proyecto                 
│   │   ├── components/      # Componentes reutilizables de React
│   │   ├── App.js           # Componente principal de la aplicación React
│   │   └── index.js         # Punto de entrada para React
│   └── package.json         # Configuración de dependencias y scripts para el frontend
├── node_modules/           
│   └── ...                  # Dependencias instaladas por npm (se genera automáticamente)
├── package.json            
│                           # Archivo de configuración para la raíz del proyecto
├── package-lock.json       
│                           # Archivo de bloqueo de versiones exactas de dependencias
└── README.md               
                            # Documentación del proyecto

## Tecnologías Utilizadas

### Frontend
- React (versión 19)
- CSS

### Backend
- Node.js (versión 20 o superior)
- Express.js

## Funcionalidades

### Frontend
- **Formulario de Inicio de Sesión**: Diseño responsivo que cumple con los estándares modernos de UI.
- **Gestión de Tareas**: Interfaz para visualizar y gestionar tareas.

### Backend
- **API REST**: Soporte para las operaciones CRUD:
  - `GET /tasks` - Obtener todas las tareas.
  - `GET /tasks/:id` - Obtener una tarea por ID.
  - `POST /tasks` - Crear una nueva tarea.
  - `PUT /tasks/:id` - Actualizar una tarea.
  - `DELETE /tasks/:id` - Eliminar una tarea.
- **Manejo de Errores**: Implementación básica de respuestas adecuadas para solicitudes incorrectas.

## Instalación

### Clonar el repositorio:
```bash
git clone <URL-del-repositorio>
cd RBU
```

### Backend
1. Instalar dependencias:
   ```bash
   cd backend
   npm install
   ```
2. Iniciar el servidor:
   ```bash
   npm run start
   ```

### Frontend
1. Instalar dependencias:
   ```bash
   cd login-task-manager
   npm install
   ```
2. Iniciar la aplicación:
   ```bash
   npm start
   ```

La aplicación estará disponible en:
- **Backend**: [http://localhost:5000](http://localhost:5000)
- **Frontend**: [http://localhost:3001](http://localhost:3001)

## Support

Este proyecto está bajo licencia MIT y es de código abierto. Si encuentras útil este proyecto, considera compartirlo o contribuir con mejoras. Cada contribución, ya sea en forma de comentarios, problemas o código, es bienvenida.

## Stay in touch

- Author - [Agustín Hernández](https://github.com/AgustinHernandez88)
- Date - [27/12/2024]

## License

Este proyecto está bajo la [licencia MIT](LICENSE).

## Capturas
<img width="953" alt="Captura de pantalla Proyecto RBU" src="https://github.com/user-attachments/assets/9f6ae3fd-0d89-460f-947a-90bde22f5877" />
<img width="329" alt="Captura de pantalla Proyecto RBU 2" src="https://github.com/user-attachments/assets/1d2355d7-0514-493f-97f5-b7b543c077c4" />
