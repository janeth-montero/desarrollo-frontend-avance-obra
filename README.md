# Avance de obra para gerencia

Repositorio del sistema de avance de obra de Beta Residencial de desarrollos ISI.

Esta aplicación es un proyecto ficticio desarrollado como parte de la clase de Desarrollo de Frontend con [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

El proyecto “Beta Residencial - Sistema de avance de obra para gerencia” es una aplicación web diseñada para ejemplificar el desarrollo web con el framework Angular a los alumnos de la clase Diseño de Frontend.

Esta aplicación permita a la gerencia de la constructora “Desarrollos ISI” supervisar  y  administrar el  avance  de  obra  y  estatus  de propiedades. La herramienta proporcionará una vista general del avance en el proceso de construcción de las casas, las casas listas y disponibles para la venta y brindará información esencial para la toma de decisiones estratégicas.

Este proyecto se encuentra en desarrollo, por lo cual la documentación presentada puede describir funcionalidad incompleta o en proceso de desarrollo.

## Requisitos del Sistema

Antes de comenzar, asegúrate de que tengas instalados los siguientes requisitos en tu sistema:

- **Node.js**: Versión 12 o superior. Puedes descargarlo desde [nodejs.org](https://nodejs.org/).
- **npm**: Versión 6 o superior. npm generalmente se instala junto con Node.js.

## Instalación del proyecto
Una vez que tengas Node.js y npm instalados, sigue estos pasos para instalar el proyecto en tu entorno de desarrollo local:

1. Clona este repositorio en tu máquina local utilizando el siguiente comando:

```bash
git clone https://github.com/janeth-montero/desarrollo-frontend-avance-obra.git
```

2. Instala Angular CLI version 16 de manera global:

```bash
npm install -g @angular/cli@16
```

3. Navega al directorio del proyecto:

```bash
cd desarrollo-frontend-avance-obra
```

4. Instala las dependencias del proyecto utilizando npm (Node Package Manager):

```bash
npm install
```

## Ejecutar el ambiente de desarrollo

Para ejecutar el ambiente de desarrollo en tu navegador, ejecuta el siguiente comando (`http://localhost:4200/`):

```bash
ng serve -o
```

La aplicación se recargará automáticamente si cambia alguno de los archivos fuente.

## Build

Ejecuta `ng build` para compilar el proyecto. Los archivos generados en la compilación se almacenarán en el directorio `dist/`.

## Más ayuda

Para obtener más ayuda sobre Angular CLI, utiliza `ng help` o consulte el sitio [Angular CLI Overview and Command Reference](https://angular.io/cli).

## Estructura del proyecto

Estructura inicial del proyecto:

```bash

src/                          # Carpeta principal del proyecto.
├── app/
│   ├── pages/                # Carpeta con los modulos de cada pagina y sus componentes.
│   │   ├── autenticacion/
│   │   │   ├── autenticacion.module.ts
│   │   │   ├── ...
│   │   │
│   │   ├── dashboard/
│   │   │   ├── dashboard.module.ts
│   │   │   ├── ...
│   │   │
│   │   ├── inventario/
│   │   │   ├── inventario.module.ts
│   │   │   ├── ...
│   │   │
│   │   └── progreso-obra/
│   │       ├── progreso-obra.module.ts
│   │       ├── ...
│   │
│   │
│   ├── services/             # Carpeta con los servicios de datos.
│   │   ├── casa.service.ts
│   │   ├── ...
│   │
│   │
│   ├── models/               # Carpeta con los modelos, interfaces y datos estaticos.
│   │   ├── casa.model.ts
│   │   ├── ...
│   │
│   │
│   ├── app-routing.module.ts # modulo con la configuracion del routeo.
│   ├── app.module.ts         # modulo principal y de arranque del sistema.
│   ├── ...
│
│
├── assets/
│
├── styles/
│
├── ...

```

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

Proyecto desarrollado por Janeth Montero como proyecto de la clase Desarrollo Frontend. Con este proyecto se pretende adentrar a los estudiantes en los temas estudiados.
Contacto: janeth.montero@unison.mx │ [LinkedIn](https://www.linkedin.com/in/janeth-montero/)
