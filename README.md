# Ticketazo – Plan de Pruebas y Automatización con Cypress

Este repositorio contiene la automatización de pruebas end-to-end para Ticketazo, una plataforma web para la compra y gestión de entradas a espectáculos.
El objetivo es validar funcionalidades críticas del sistema, asegurar la calidad del producto y documentar defectos encontrados durante la ejecución de pruebas.

## 📂 Estructura del proyecto

```
cypress/
  ├── e2e/        # Casos de prueba automatizados
  ├── fixtures/   # Datos de prueba
  ├── support/    # Comandos custom y configuraciones
README.md
package.json
```

---

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
cd Challenge_grupo2
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
