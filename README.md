# Ticketazo – Plan de Pruebas y Automatización con Cypress

Este repositorio contiene la automatización de pruebas end-to-end para Ticketazo, una plataforma web para la compra y gestión de entradas a espectáculos.
El objetivo es validar funcionalidades críticas del sistema, asegurar la calidad del producto y documentar defectos encontrados durante la ejecución de pruebas.

## 📂 Estructura del proyecto

```
cypress/
  ├── e2e/        # Casos de prueba automatizados
  ├── fixtures/   # Datos de prueba
  ├── support/    # Comandos custom y configuraciones
documentación/
README.md
package.json
```

---

## 📝 Tableto Trello

Link tablero: https://trello.com/b/eELH7luU/xacademy-qa-automation

📌 Listas sugeridas

Backlog → ideas o tareas pendientes que todavía no arrancaste.

To Do → lo que ya decidiste hacer pronto.

In Progress → lo que estás trabajando en este momento.

Review / Testing → tareas listas, pero que necesitan revisión.

Done ✅ → finalizado.


## 🚀 Tecnologías utilizadas

- [Cypress](https://www.cypress.io/) - Framework de testing E2E
- [Node.js](https://nodejs.org/) - Entorno de ejecución

---

## 📦 Requisitos previos

Antes de comenzar, asegurate de tener instalado:

- Node.js (v16 o superior)
- npm o yarn

---

## ⚙️ Instalación

Cloná el repositorio y luego instalá las dependencias:

```bash
git clone https://github.com/fosuna22/Santex-academy---cypress-proyecto-final-
cd Santex-academy---cypress-proyecto-final-
npm install
```

## ▶️ Ejecución de pruebas

### Modo gráfico

```
npx cypress open
```

### Terminal

```
npx cypress run
```
