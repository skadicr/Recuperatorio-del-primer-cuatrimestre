# TaskNow

Administrador de tareas personales desarrollado con React Native y Expo.

## Integrantes

- Cecilia Rodriguez


## Descripción

TaskNow es una aplicación móvil que permite organizar las tareas del día a día. Resuelve el problema de tener pendientes dispersos u olvidados: el usuario puede cargar sus tareas, ver cuáles están pendientes o completadas, modificarlas y eliminarlas. Los datos se guardan en el dispositivo, por lo que no se pierden al cerrar la aplicación.

Es un MVP (Minimum Viable Product): tiene pocas funcionalidades, pero todas funcionan correctamente.

Trabajo Práctico Integrador de la materia de desarrollo móvil.

## Tecnologías utilizadas

- React Native
- Expo
- React Navigation (Native Stack)
- AsyncStorage
- Git y GitHub

## Pantallas

| Pantalla | Archivo | Responsabilidad |
| --- | --- | --- |
| Home | `HomeScreen.js` | Mostrar la lista de tareas, marcarlas como completadas y eliminarlas |
| Nueva tarea | `AddTaskScreen.js` | Crear una tarea (título y descripción) |
| Editar tarea | `EditTaskScreen.js` | Modificar el título y la descripción de una tarea existente |

Flujo: `Home → Nueva tarea → Home` y `Home → Editar tarea → Home`. Se navega con `navigation.replace`, de modo que Home se crea de nuevo y vuelve a cargar las tareas guardadas.

## Funcionalidades implementadas

- Alta de tareas (título, descripción y estado)
- Listado de tareas con `FlatList`
- Marcar tareas como completadas (y volver a marcarlas como pendientes)
- Edición de tareas
- Eliminación de tareas
- Validaciones en el formulario (título de al menos 3 caracteres y descripción no vacía)
- Persistencia local con AsyncStorage
- Navegación entre pantallas con React Navigation

## Estructura del proyecto

```
App.js
src/
├── components/
│   ├── CustomButton.js
│   ├── Header.js
│   ├── TaskCard.js
│   ├── TaskForm.js
│   └── TaskList.js
├── screens/
│   ├── HomeScreen.js
│   ├── AddTaskScreen.js
│   └── EditTaskScreen.js
├── navigation/
│   └── AppNavigator.js
├── services/
│   └── storage.js
└── styles/
    ├── colors.js
    └── theme.js
```

## Capturas de pantalla

<!-- Reemplazar por las capturas reales del proyecto (por ejemplo, guardadas en una carpeta capturas/) -->

## Instalación

```bash
git clone URL_REPOSITORIO
cd NOMBRE_DEL_REPOSITORIO
npm install
npx expo start
```
