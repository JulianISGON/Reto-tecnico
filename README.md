
# Reto Técnico - Automatización QA N1 con Cypress

Este proyecto es una solución al reto técnico solicitado, utilizando **Cypress** como herramienta de automatización de pruebas end-to-end (E2E).

---

## 🚀 Tecnologías utilizadas

- [Cypress](https://www.cypress.io/) v12+
- JavaScript (ES6)
- Node.js
- Git & GitHub

---

## 📂 Estructura del Proyecto

```
reto-orangehrm/
├── cypress/
│   ├── e2e/
│   │   └── login/
│   │       ├── login_success.cy.js
│   │       └── login_failure.cy.js
│   ├── fixtures/
│   │   └── users.json
│   ├── pages/
│   │   ├── loginPage.js
│   │   └── dashboardPage.js
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── cypress.config.js
├── .gitignore
└── README.md
```

---

## ✅ Casos de prueba implementados

1. **Flujo Exitoso (Login válido)**
   - Ingresa con usuario y contraseña correctos.
   - Valida acceso al Dashboard y la pestaña Admin.

2. **Flujo No Exitoso (Login inválido)**
   - Ingresa credenciales incorrectas.
   - Valida mensaje de error `Invalid credentials`.

---

## 🧠 Criterios aplicados

- Uso del patrón **Page Object Model (POM)**.
- Separación de lógica de negocio vs lógica de test.
- Reutilización de código con métodos reutilizables.
- Uso de **fixtures (`cy.fixture`)** para separar datos.
- Organización clara y escalable del proyecto.

---

## 📦 Instalación y ejecución

### 1. Clonar el repositorio:
```bash
git clone https://github.com/JulianISGON/Reto-tecnico.git
cd Reto-tecnico
```

### 2. Instalar dependencias:
```bash
npm install
```

### 3. Ejecutar Cypress:
- **Modo visual (GUI):**
```bash
npx cypress open
```
- **Modo headless (consola):**
```bash
npx cypress run
```

---

## 📁 Datos de acceso (entorno demo)

- **URL**: https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
- **Usuario válido**: `Admin`
- **Contraseña válida**: `admin123`

---

## 👨‍💻 Autor

- Julián Isaza  
---
