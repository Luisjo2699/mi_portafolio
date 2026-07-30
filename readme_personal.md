##  ¿De qué trata el proyecto?

**OmniLife / VidaPro** nació con el propósito de resolver un problema personal: el control de distintas áreas de la vida, entrenamiento, alimentación, pasos diarios, tareas programadas, gestión financiera. 

Este web app centraliza la cotidianidad en un solo panel de control moderno, rápido y modular. Permite auditar el bienestar físico, programar compromisos con alertas automatizadas y mantener el balance económico en entornos económicos complejos (soporte multi-divisa).

## Características y Módulos Principales

 1. Deporte, Nutrición y Salud
* **Control Nutricional:** Registro detallado de ingesta de comidas, conteo automático de calorías y seguimiento de proteínas diarias.
* **Monitoreo de Actividad Física:** Control de pasos diarios con sincronización por fecha y zona horaria localizada (`America/Caracas`).
* **Gestión de Rutinas de Entrenamiento:** Creación de rutinas personalizadas con desglose de ejercicios, series, repeticiones, tiempos de descanso y seguimiento de cumplimiento por días de la semana.

### 2. Planificador de Actividades con Alertas
* **Gestión de Tareas y Hábitos:** Organización de pendientes categorizados por tipo (Entrenamiento, Finanzas, Salud, etc.) con estados dinámicos (*Activo, Pospuesto, Cancelado*).
* **Notificaciones Automatizadas:** Capacidad de programar alertas y notificaciones directamente a través de **Correo Electrónico** y **Telegram** para asegurar el cumplimiento de metas críticas.

###  3. Control Financiero Multidivisa
* **Registro de Transacciones:** Gestión completa de ingresos y gastos con categorización de comercios y marcas.
* **Soporte Multi-moneda:** Diseñado para gestionar transacciones simultáneas en distintas monedas y métodos de pago (`Bs`, `USD`, `USDT`, `CASH`), ideal para contextos económicos con múltiples monedas de curso legal.

---

##  Arquitectura y Decisiones de Diseño

El sistema está construido bajo una estricta separación de responsabilidades:

* **Backend Modular (FastAPI + SQLAlchemy):** La API está estructurada en capas independientes (`routers`, `models`, `schemas`, `database`), lo que facilita la mantenibilidad y la escalabilidad de nuevos módulos sin acoplar la lógica de negocio con la persistencia de datos.
* **Persistencia Robusta (PostgreSQL Code-First):** Modelado relacional avanzado con restricciones de integridad, control de zonas horarias nativas y relaciones de cascada para la gestión eficiente de datos.
* **Frontend Moderno (React 19 + TypeScript + Tailwind CSS v4):** Interfaz altamente reactiva, tipada de extremo a extremo, orientada a una experiencia de usuario fluida (Single Page Application) con animaciones suaves y diseño completamente adaptable.

---

