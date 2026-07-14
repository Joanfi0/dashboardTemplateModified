# Quick Dashboard

Dashboard educativo basado en el template gratuito de CoreUI para React, adaptado a una interfaz más simple y enfocada en la gestión de eventos.

Este proyecto es una práctica para entender mejor la estructura de una aplicación React con Vite, ver cómo se organiza un proyecto más completo y comparar con los ejemplos sueltos de la documentación de React Quick Start.

## Origen

Template original:
- CoreUI Free React Admin Template
- https://github.com/coreui/coreui-free-react-admin-template
- https://coreui.io/

Otras fuentes de consulta:
- https://www.youtube.com/watch?v=qe3mrBmeno8
- https://vite.dev/guide/
- https://docs.gitlab.com/development/fe_guide/style/scss/

## Descripción

La idea original del template fue simplificada para convertirse en un dashboard donde se puede cargar un evento con estas características:

- Título
- Fecha
- Hora
- Notas

Al guardar un evento, este se refleja automáticamente en un panel ubicado a la derecha, mostrando el listado completo y el próximo evento registrado.

## Tecnologías utilizadas

- React
- Vite
- SCSS
- Git
- CoreUI
- Codex

También se usó Claude como apoyo para consultas generales y decisiones de estilo.

## Funcionalidades

- Formulario para crear eventos
- Validación básica de campos obligatorios
- Panel de resumen con cantidad total de eventos
- Listado dinámico de eventos
- Ordenamiento por fecha y hora
- Interfaz adaptada con SCSS

## Estructura general

- `src/App.jsx`: configuración principal de la app y ruteo
- `src/layout/DefaultLayout.jsx`: estructura base del dashboard
- `src/views/dashboard/Dashboard.jsx`: lógica principal para agregar y mostrar eventos
- `src/scss/style.scss`: estilos globales y visuales del proyecto

## Instalación y uso

```bash
npm install
npm run start
